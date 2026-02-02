# Denied Claim Referral Landing Page

Single-page informational referral site for users whose insurance claims were denied. The site provides neutral, factual information and optional connections to independent third-party services. It does not provide insurance or legal advice and does not guarantee outcomes.

## Features

- Single-page layout with compliant disclosures and neutral language
- Outbound CTA links ready for affiliate/CPL integration
- Minimalist, trust-focused design optimized for mobile
- SEO-friendly heading structure (H1/H2/H3 only)

## Tech Stack

- **Framework**: Next.js 15.5.0
- **Language**: TypeScript
- **Styling**: Custom CSS
- **Analytics**: Vercel Analytics & Speed Insights (optional)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
denied-claim-referral/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── public/
│   ├── images/
│   ├── robots.txt
│   └── sitemap.xml
├── CHANGELOG.md
├── README.md
└── package.json
```

## Configuration Notes

- **CTA links**: Update the outbound URLs in `src/app/page.tsx`.
- **Site URL**: Set `SITE_URL` or update `next-sitemap.config.js`, `public/robots.txt`, and `public/sitemap.xml`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run sitemap` - Generate sitemap

## Changelog

See `CHANGELOG.md` for version history and updates.
