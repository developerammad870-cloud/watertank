// Minimal static server for local development — no dependencies needed.
const http = require("http");
const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 3000;

// Only the website and its media folders are served. Everything else in this
// folder (other projects, .env files, .git) stays private.
const PUBLIC_FILES = new Set(["index.html"]);
const PUBLIC_DIRS = new Set(["videos", "images"]);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".m4v": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime"
};

// pipeline closes the file when the browser aborts (video seeks do this constantly)
// and turns read errors into a dropped response instead of a crashed server.
function send(res, file, range) {
  pipeline(fs.createReadStream(file, range), res, () => {});
}

function notFound(res) {
  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not found");
}

const server = http.createServer((req, res) => {
  let urlPath;
  try {
    urlPath = decodeURIComponent(req.url.split("?")[0]);
  } catch {
    res.writeHead(400);
    return res.end("Bad request");
  }

  let rel = path.normalize(urlPath).replace(/^[\\/]+/, "");
  if (rel === "" || rel === ".") rel = "index.html";
  const parts = rel.split(/[\\/]/);
  const allowed = !parts.some(p => p.startsWith(".")) &&
    (PUBLIC_FILES.has(rel) || (parts.length > 1 && PUBLIC_DIRS.has(parts[0])));
  if (!allowed) return notFound(res);

  const file = path.join(ROOT, rel);
  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) return notFound(res);
    const type = TYPES[path.extname(file).toLowerCase()] || "application/octet-stream";

    // Byte ranges let browsers (Safari and iPhone in particular) stream and loop video
    const range = req.headers.range;
    if (range) {
      const m = /^bytes=(\d*)-(\d*)$/.exec(range);
      let start, end;
      if (m && m[1] === "" && m[2] !== "") {          // suffix range: last N bytes
        start = Math.max(stat.size - Number(m[2]), 0);
        end = stat.size - 1;
      } else if (m) {
        start = m[1] === "" ? 0 : Number(m[1]);
        end = m[2] === "" ? stat.size - 1 : Math.min(Number(m[2]), stat.size - 1);
      }
      if (!m || start > end || start >= stat.size) {
        res.writeHead(416, { "Content-Range": `bytes */${stat.size}` });
        return res.end();
      }
      res.writeHead(206, {
        "Content-Type": type,
        "Content-Length": end - start + 1,
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Accept-Ranges": "bytes"
      });
      return send(res, file, { start, end });
    }

    res.writeHead(200, { "Content-Type": type, "Content-Length": stat.size, "Accept-Ranges": "bytes" });
    send(res, file);
  });
});

server.listen(PORT, () => {
  console.log(`\n  Sewerage Water Tank is running at http://localhost:${PORT}\n`);
});
