# Deploying to Vercel

The site is a Next.js app. Vercel builds it with `next build` on every push and
serves the page as prerendered static HTML. There are no environment variables.

Repository: https://github.com/developerammad870-cloud/watertank

## First deploy (once)

1. Sign in at [vercel.com](https://vercel.com) with the GitHub account that
   owns the repository.
2. **Add New → Project**, then **Import** `watertank`.
   If it isn't listed, click **Adjust GitHub App Permissions** and give Vercel
   access to the repository.
3. On the configure screen:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`
   - **Build Command**, **Output Directory** and **Install Command:** leave the
     overrides off
   - **Environment Variables:** none
4. Click **Deploy**. You get an address like `watertank.vercel.app`.

`vercel.json` sets the framework to Next.js, so a project that was first set up
with a different preset still builds correctly.

## Updating the site

Every push to the `main` branch redeploys automatically, usually within a
minute or two. Pushes to any other branch get their own preview address, so a
change can be checked before it goes live.

## Your own domain

Project → **Settings → Domains** → add the domain, then set the DNS records
Vercel shows you at your domain registrar.

## Good to know

- Vercel's free **Hobby** plan is for non-commercial use only. For a business
  website, Vercel's terms require the **Pro** plan.
