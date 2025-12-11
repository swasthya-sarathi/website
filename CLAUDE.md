# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server at localhost:3000
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with `@import "tailwindcss"` syntax
- **Package Manager**: pnpm
- **React**: v19

## Architecture

This project uses the Next.js App Router with all pages under the `app/` directory:
- `app/layout.tsx` - Root layout with Geist font configuration
- `app/page.tsx` - Home page
- `app/globals.css` - Global styles with Tailwind and CSS custom properties for theming

## Path Aliases

Use `@/*` to import from the project root (configured in tsconfig.json).
