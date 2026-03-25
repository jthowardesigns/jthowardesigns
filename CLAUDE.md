# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React portfolio website built with Vite. Deployed as a single-page application with client-side routing.

## Commands

```bash
npm run dev          # Start Vite dev server
npm run build        # Typecheck and build for production (outputs to dist/)
npm run typecheck    # Run TypeScript without emitting files
npm run preview      # Preview production build locally
npm run start:server # Run Express server (serves dist/ for production)
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## Architecture

- **Entry point**: `src/main.tsx` - renders the app with BrowserRouter
- **App shell**: `src/App.tsx` - defines the layout with header, main content area, and footer. Uses React Router `Routes` for page navigation
- **Pages**: `src/pages/` - route-level components (Home, About, Projects, DesignSystem)
- **Components**: `src/components/` - reusable UI components
- **Styling**: `src/styles/tokens.css` for design tokens; `src/App.css` for layout and components; CSS animations for visual effects
- **Production server**: `server.ts` - Express server that serves static files from `dist/` with fallback to `index.html` for client-side routing

## Code Style

Prettier configuration is in `.prettierrc`. Key conventions:
- No semicolons
- Single quotes
- 2-space indentation
- Avoid arrow function parentheses for single parameters