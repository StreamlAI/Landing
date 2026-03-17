# AGENTS.md - Agentic Coding Guidelines

This document provides guidelines for agents working on this codebase.

## Project Overview

A static React landing page built with Vite, React 19, Tailwind CSS v4, and TypeScript.

## Build Commands

```bash
# Development
npm run dev              # Start Vite dev server
npm run dev-host         # Start dev server accessible on network

# Production
npm run build            # Full build (client + SSR server + prerender)
npm run build:client     # Client-side build only
npm run preview          # Preview production build

# Type checking
npm run check            # Run TypeScript type checking (tsc)
```

**Note**: There are currently no test files in this project.

## Code Style Guidelines

### TypeScript Configuration

- Strict mode enabled in `tsconfig.json`
- Use explicit types for function parameters and return values
- Use `import type` for type-only imports

### Path Aliases

```typescript
// Use @ alias for src imports
import { Navigation } from "@/components/Navigation";
import { cn } from "@/lib/utils";

// Use @assets alias for public assets
// Note: This points to public/ directory
```

### Import Conventions

1. **External libraries** - first, in alphabetical order
2. **@ alias imports** - second, grouped by depth (components, lib, hooks, pages)
3. **Relative imports** - for sibling directory imports

```typescript
// Example import order
import { useState } from "react";                    // external
import { Link } from "wouter";                        // external
import { motion } from "framer-motion";               // external
import { ArrowRight, Menu, X } from "lucide-react";    // external
import { cn } from "@/lib/utils";                     // @ alias - lib
import { LinkedInIcon } from "@/components/icons/";   // @ alias - components
import LandingPage from "@/pages/LandingPage";        // @ alias - pages
```

### Component Patterns

- Use **functional components** with hooks
- Export components as named exports (not default unless single export)
- Use React 19's modern patterns (no need for explicit `React.` prefix)
- Props interfaces should be named `{ComponentName}Props`

```typescript
interface NavigationProps {
  showLinks?: boolean;
}

export function Navigation({ showLinks = true }: NavigationProps) {
  // component implementation
}
```

### Naming Conventions

- **Components**: PascalCase (`Navigation`, `LandingPage`)
- **Hooks**: camelCase with `use` prefix (`useMobile`, `useToast`)
- **Utilities**: camelCase (`cn`, `formatDate`)
- **Files**: kebab-case for components (`navigation.tsx`), camelCase for utils
- **Interfaces/Types**: PascalCase (`BlogPost`, `NavigationProps`)

### Styling

- Use **Tailwind CSS v4** with `@tailwindcss/vite` plugin
- Use `cn()` utility from `@/lib/utils` for conditional class merging
- Follow Tailwind's class ordering conventions (layout → spacing → sizing → visual → states)
- Use inline styles only for dynamic values that can't be handled with Tailwind

```typescript
// Good
<div className="flex items-center gap-4 p-4 bg-white hover:bg-gray-50 transition-colors" />

// Use inline styles for dynamic values
<div style={{ backgroundColor: themeColor }} />
```

### Error Handling

- Use try/catch blocks for async operations
- Log errors with `console.error()` including context
- Return null or throw specific errors for not-found cases

```typescript
try {
  const response = await fetch(url);
  const data = await response.json();
  return data;
} catch (error) {
  console.error(`Error fetching data:`, error);
  return null;
}
```

### UI Components

This project uses **shadcn/ui** components (new-york style) located in `src/components/ui/`. These are built on Radix UI primitives with custom styling. When modifying or adding components:

- Follow the existing patterns in `src/components/ui/`
- Use `cva` (class-variance-authority) for component variants
- Use `cn` utility for class merging

### Routing

- Use **wouter** for routing (lightweight React router)
- Routes defined in `src/App.tsx`

```typescript
import { Switch, Route } from "wouter";

<Switch>
  <Route path="/" component={LandingPage} />
  <Route path="/blog/:slug" component={BlogPost} />
  <Route component={NotFound} />
</Switch>
```

### Data Fetching

- Use **TanStack Query** (`@tanstack/react-query`) for data fetching
- Query client configured in `src/lib/queryClient.ts`

### External Links

Always include `rel="noopener noreferrer"` when using `target="_blank"`:

```typescript
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
```

### Accessibility

- Include `aria-label` for icon-only buttons and links
- Use semantic HTML elements (`<nav>`, `<main>`, `<section>`, etc.)

### State Management

- Use React hooks (`useState`, `useReducer`) for local state
- Use TanStack Query server state for data
- Avoid unnecessary context providers

### File Organization

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   └── icons/          # Custom icon components
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
├── pages/              # Page-level components
├── App.tsx             # Main app with routing
└── main.tsx            # Entry point
```

## Common Patterns

### Creating a New Page

1. Create file in `src/pages/` directory
2. Add route in `src/App.tsx`
3. Use `useSEO` hook for meta tags if needed

### Adding a New shadcn/ui Component

1. Use the shadcn/ui CLI or copy existing pattern from `src/components/ui/`
2. Follow the existing component structure with cva variants

### Modifying Styles

- Tailwind classes in component files
- Custom CSS variables in index.css if needed (follow Tailwind v4 conventions)
