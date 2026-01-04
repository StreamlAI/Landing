# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development - starts Express server with Vite dev middleware
npm run dev

# Client-only development (Vite dev server on port 5000)
npm run dev:client

# Production build (builds both client and server)
npm run build

# Start production server (serves built assets)
npm run start

# Type checking
npm run check

# Database schema push (requires DATABASE_URL env var)
npm run db:push
```

## Architecture

This is a full-stack TypeScript application with a landing page focus, built on the Replit stack pattern.

### Directory Structure
- `client/` - React frontend (Vite)
- `server/` - Express backend
- `shared/` - Shared types and schemas (Drizzle + Zod)

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

### Frontend Stack
- **React 19** with wouter for routing
- **TanStack Query** for data fetching (`client/src/lib/queryClient.ts`)
- **shadcn/ui** components (new-york style) in `client/src/components/ui/`
- **Tailwind CSS v4** with Vite plugin
- **Framer Motion** for animations

### Backend Stack
- **Express** server that serves both API and static files
- **Drizzle ORM** with PostgreSQL (schema in `shared/schema.ts`)
- In development, Vite dev server is set up as middleware
- In production, serves static files from `dist/public/`

### API Pattern
- All API routes should be prefixed with `/api` (see `server/routes.ts`)
- Use `apiRequest()` from `client/src/lib/queryClient.ts` for API calls
- Storage interface in `server/storage.ts` abstracts data access

### Build Process
- Custom build script at `script/build.ts`
- Vite builds client to `dist/public/`
- esbuild bundles server to `dist/index.cjs`
- Specific server dependencies are bundled (see allowlist in build script)
