# Sewerage Water Tank — الشفط میاں مجاری

One-page website for a sewage suction and septic tank emptying service in
Mahbellah Saniya and Al Khoud, Muscat, Oman. English and Arabic, no build step, no dependencies.

```
index.html          the whole site: markup, styles and scripts
videos/tanker.mp4   the "At work" video
server.js           small static server for running it locally
```

## Running it

Needs Node.js 18 or newer.

```bash
npm start            # → http://localhost:3000
```

To use another port, set `PORT` first: `$env:PORT=8080; npm start` in
PowerShell, or `PORT=8080 npm start` in bash.

`server.js` serves only `index.html` and the `videos/` and `images/` folders.
Everything else in the project folder (including `.git` and any `.env` file)
returns 404.

## Changing business details

The phone, WhatsApp and email are set in the `CONFIG` block near the bottom of
`index.html`:

```js
const CONFIG = {
  phoneDisplay: "+968 7636 8205",
  phoneIntl:    "96876368205",
  whatsappDisplay: "+968 7806 1190",
  whatsappIntl: "96878061190",
  email:        "info@example.com"
};
```

`CONFIG` updates the page once it loads, but the same numbers are also written
directly into the HTML so the links work without JavaScript. When a number
changes, search `index.html` for the old one and replace every copy, including
the `telephone` field in the `application/ld+json` block in `<head>`.

## The video

The "At work" section plays `videos/tanker.mp4` on a loop, whole and uncropped.
A portrait (phone) video sits beside the gallery pictures on desktop and fills
the width on mobile; a landscape video spans the full width instead. It starts
downloading as soon as the page opens, so it is ready to play by the time a
visitor scrolls to it. Until it plays, its first frame
(`videos/tanker-poster.jpg`) is shown in its place.

Sound is on by default, with one limit set by every browser: a page cannot play
sound before the visitor has tapped, clicked or pressed a key on it. Until then
the video plays muted, and the sound comes on with that first interaction.
Visitors can press Mute at any time.

### Replacing the video

Keep it light. The current file is 720×1280 at about 1 Mbps (1.4 MB for 11
seconds), which plays without stalling on a 1.5 Mbps connection. The phone
original was 18 MB at 12.8 Mbps and stalled constantly on the same connection;
it is kept in the git history (commit `d849bbc`).

Export H.264 MP4 so it plays everywhere, including iPhone. With
[ffmpeg](https://ffmpeg.org), from the phone original:

```bash
ffmpeg -i original.mp4 -vf scale=720:-2:flags=lanczos -c:v libx264 -crf 24 -preset slow -profile:v high -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart videos/tanker.mp4
ffmpeg -i videos/tanker.mp4 -frames:v 1 -q:v 3 videos/tanker-poster.jpg
```

- `-crf 24` sets quality: lower is sharper and bigger.
- `+faststart` puts the video's index at the front of the file, so playback can
  begin before the whole file has downloaded.
- The second command saves the first frame as the poster image; redo it
  whenever the video changes.

## Putting it online

The site is static, so any host works:

- **Static hosting** (Netlify, Cloudflare Pages, GitHub Pages, Vercel): upload
  `index.html` and the `videos/` folder. `server.js` is not needed there.
- **A Node host** (Render, Railway, a VPS): run `npm start`. The host usually
  sets `PORT` itself.

The 3D truck loads Three.js from cdnjs, and fonts come from Google Fonts, so
both need an internet connection. The 3D section shows a message if it cannot
load.
