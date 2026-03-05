# Streaml Landing Page

A modern, animated landing page for Streaml - an autonomous automation infrastructure platform.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **shadcn/ui** components (new-york style)
- **wouter** for routing

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type checking
npm run check

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/ui/     # shadcn/ui components
├── pages/
│   ├── LandingPage.tsx      # Main landing page
│   ├── PrivacyPolicy.tsx    # Privacy policy page
│   ├── TermsOfService.tsx   # Terms of service page
│   └── not-found.tsx        # 404 page
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── App.tsx            # Main app with routing
├── main.tsx           # Entry point
└── index.css          # Global styles

public/
├── favicon.png        # Site logo/favicon
└── opengraph.png      # OG image for social sharing
```

## Path Aliases

- `@/*` → `src/*`
- `@assets/*` → `attached_assets/*`

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main landing page with hero, features, architecture section |
| `/privacy-policy` | Privacy policy document |
| `/terms-of-service` | Terms of service document |

## Features

- Responsive design for all screen sizes
- Animated hero section with orbital visualization
- Interactive architecture diagrams (click to switch between views)
- Smooth scroll animations with Framer Motion
- Dark theme with glassmorphism effects

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on Vercel: https://vercel.com/new
3. Vercel will automatically detect and deploy

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

Project includes `vercel.json` with route rewrites and cache strategies.

### Other Platforms

Build the project and deploy the `dist/` folder:

```bash
npm run build
```

Compatible with Netlify, Cloudflare Pages, etc.
