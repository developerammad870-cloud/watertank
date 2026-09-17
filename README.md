# Sewerage Water Tank — الشفط میاں مجاری

One-page website for a sewage suction and septic tank emptying service in
Mahbellah Saniya and Al Khoud, Muscat, Oman. English and Arabic, built with
Next.js (App Router).

```
app/layout.tsx          fonts (self-hosted with next/font), page title and description
app/page.tsx            the page markup, and the structured data for search engines
app/globals.css         all styles
app/ui/site-script.js   everything interactive, and the business details (CONFIG)
app/ui/site-behavior.tsx  runs site-script.js once the page has loaded
public/images/          hero photo (tank.jpg, and tank-ar.jpg mirrored for Arabic)
public/videos/          the "At work" video and its poster frame
```

## Running it

Needs Node.js 20.9 or newer.

```bash
npm install
npm run dev      # development, with live reload → http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Changing business details

The phone, WhatsApp and email are set in the `CONFIG` block at the top of
`initSite()` in `app/ui/site-script.js`:

```js
const CONFIG = {
  phoneDisplay: "+968 7636 8205",
  phoneIntl:    "96876368205",
  whatsappDisplay: "+968 7806 1190",
  whatsappIntl: "96878061190",
  email:        "shafit.mianmajari@gmail.com"
};
```

`CONFIG` updates the page once it loads, but the same numbers are also written
directly into `app/page.tsx` so the links work before the script runs. When a
number changes, search `app/page.tsx` for the old one and replace every copy,
including the `telephone` field in `jsonLd` at the top of the file.

## The video

The "At work" section plays `public/videos/tanker.mp4` on a loop, whole and
uncropped. A portrait (phone) video sits beside the gallery pictures on desktop
and fills the width on mobile; a landscape video spans the full width instead.
It starts downloading as soon as the page opens, so it is ready to play by the
time a visitor scrolls to it. Until it plays, its first frame
(`public/videos/tanker-poster.jpg`) is shown in its place.

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
ffmpeg -i original.mp4 -vf scale=720:-2:flags=lanczos -c:v libx264 -crf 24 -preset slow -profile:v high -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart public/videos/tanker.mp4
ffmpeg -i public/videos/tanker.mp4 -frames:v 1 -q:v 3 public/videos/tanker-poster.jpg
```

- `-crf 24` sets quality: lower is sharper and bigger.
- `+faststart` puts the video's index at the front of the file, so playback can
  begin before the whole file has downloaded.
- The second command saves the first frame as the poster image; redo it
  whenever the video changes.

## Putting it online

The site deploys to Vercel; see [DEPLOY.md](DEPLOY.md). Every push to `main`
goes live automatically.

The 3D truck loads Three.js from cdnjs, so it needs an internet connection; the
3D section shows a message if it cannot load. Fonts are self-hosted with the
site, so no requests go to Google Fonts.
