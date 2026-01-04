# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking
npm run check
```

## Architecture

This is a static React landing page built with Vite.

### Directory Structure
- `src/` - React source code
- `public/` - Static assets
- `attached_assets/` - Generated images and assets

### Path Aliases
- `@/*` → `src/*`
- `@assets/*` → `attached_assets/*`

### Stack
- **React 19** with wouter for routing
- **TanStack Query** for data fetching
- **shadcn/ui** components (new-york style) in `src/components/ui/`
- **Tailwind CSS v4** with Vite plugin
- **Framer Motion** for animations

### Build
- Vite builds to `dist/`
- Deploy as static site (Vercel, Netlify, etc.)
