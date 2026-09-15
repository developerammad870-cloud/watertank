# Deploying to Vercel

The site is static: `index.html` plus the `videos/` folder. There is no build
step, no server to run and no environment variables. `server.js` is only for
running the site on your own computer.

Repository: https://github.com/developerammad870-cloud/watertank

## First deploy (once)

1. Sign in at [vercel.com](https://vercel.com) with the GitHub account that
   owns the repository.
2. **Add New → Project**, then **Import** `watertank`.
   If it isn't listed, click **Adjust GitHub App Permissions** and give Vercel
   access to the repository.
3. On the configure screen:
   - **Framework Preset:** Other
   - **Root Directory:** `./`
   - **Build Command** and **Output Directory:** leave them empty (no override)
   - **Environment Variables:** none
4. Click **Deploy**. You get an address like `watertank.vercel.app`.

## Updating the site

Every push to the `main` branch redeploys automatically, usually within a
minute. Pushes to any other branch get their own preview address, so a change
can be checked before it goes live.

## Your own domain

Project → **Settings → Domains** → add the domain, then set the DNS records
Vercel shows you at your domain registrar.

## Good to know

- `.vercelignore` keeps `server.js`, the package files and these docs out of the
  deployment, so only the website is published.
- Vercel's free **Hobby** plan is for non-commercial use only. For a business
  website, Vercel's terms require the **Pro** plan.
- The video is 18 MB and every full view downloads it, which counts toward the
  plan's bandwidth. Compressing it (see README) makes it cheaper and faster.
