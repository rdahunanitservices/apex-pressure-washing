# Apex Pressure Washing — Sample Website

A modern, mobile-first landing page built for **Apex Pressure Washing** (Charleston, SC) as a **free preview** by **RDahunan I.T. Services**.

> Status: **Free sample / prospect demo** — the client replied "yes send something over" to the cold email. Built to show what their new site could look like before any commitment.

## The client
- **Business:** Apex Pressure Washing
- **Location:** Cross County Road, Charleston, SC 29418
- **Phone:** 843-442-0300 · **Email:** ApexPressureSC@gmail.com
- **Hours:** Mon–Sun, 7:00am – 7:00pm
- **Reputation:** Voted Best in Charleston, 3 years running
- All content pulled from their current site (www.ApexPressure.com).

## What this sample delivers (the four things promised in the pitch email)
1. **Mobile-first** — one-tap call button fixed to the bottom of the screen on phones.
2. **Fast loading** — plain HTML/CSS/JS, no framework, no build step.
3. **"Get a Free Estimate" CTAs that drive calls** — sticky call bar, hero buttons, and a quote form throughout.
4. **Built to rank for "pressure washing Charleston"** — title/meta, keywords, and LocalBusiness schema markup.

## Sections
Hero · Services (Pressure Washing · Drone Cleaning · Concrete) · Trust stats ·
Why Apex (real mission statement) · How It Works · Service Areas · Reviews · Free Estimate form · Footer.

## Real differentiators highlighted
- **Drone cleaning** — Lucid Bots Sherpa, 300 PSI soft-wash up to 4,500 PSI, 300+ sq ft/min.
- **Concrete** — diesel-heated water, rotary scrubbers, up to 6,000 PSI at 8 GPM.

## Tech
```
src/
  index.html   # markup + SEO/OG + LocalBusiness JSON-LD
  styles.css   # navy + aqua theme, fully responsive
  script.js    # mobile nav, scroll reveals, estimate form
  logo.svg     # droplet + "A" peak mark (also the favicon)
vercel.json    # serves /src as static
```

## Run locally
Open `src/index.html` in a browser, or:
```
npx serve src
```

## Before going live (real project)
- [ ] Swap placeholder Unsplash photos for **real Apex job photos** (before/afters convert best).
- [ ] Replace the sample testimonials with **real Google / Facebook reviews**.
- [ ] Wire the estimate form to a real handler (FormSubmit.co, Formspree, or a Vercel serverless route) — currently opens a pre-filled email.
- [ ] Point `canonical` / OG `url` at the final domain.
- [ ] Confirm full service-area list (Daniel Island / West Ashley / North Charleston added as likely — verify).
- [ ] Add Google Business Profile link + embedded map.

## Deploy
```
vercel --prod
```
