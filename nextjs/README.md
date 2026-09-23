# Beautification — Next.js 15 (App Router) Edition

This directory contains the complete Next.js 15 (App Router) version of **Beautification — The Beauty Studio**.

## Quick Start

1. Navigate to this directory (or copy the contents to your Next.js project root):
```bash
cd nextjs
npm install
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/layout.tsx`: Root HTML layout with font imports, metadata, and OpenGraph tags.
- `app/page.tsx`: Interactive client page (`'use client'`) featuring:
  - 3D Stepped Carousel with auto-advance and interactive controls
  - Infinite Continuous Marquee Services Showcase
  - 10-node 3D Spatial Curated Portfolio with mouse tilt & depth parallax
  - Bridal Reservations & Atelier availability
  - Live Booking Terminal with direct prefilled WhatsApp integration
  - Interactive Google Maps Studio Locator (Mohammadpur Ring Road)
- `app/globals.css`: Tailwind v4 configuration, blueprint grids, 3D preserve stage styling, and keyframe animations.
- `next.config.mjs`: Configured for remote images from Google Cloud CDN.

## Deployment

Deploy directly to **Vercel**, **Google Cloud Run**, or **Netlify**:
```bash
npm run build
npm run start
```
