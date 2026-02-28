# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React portfolio website built with Vite. Deployed as a single-page application with client-side routing.

## Commands

```bash
npm run dev          # Start Vite dev server
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
npm run start:server # Run Express server (serves dist/ for production)
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## Architecture

- **Entry point**: `src/main.jsx` - renders the app with BrowserRouter
- **App shell**: `src/App.jsx` - defines the layout with header, main content area, and footer. Uses React Router `Routes` for page navigation
- **Pages**: `src/pages/` - route-level components (Home, About, Projects)
- **Components**: `src/components/` - reusable UI components
- **Styling**: Single CSS file (`src/App.css`) with CSS animations for visual effects
- **Production server**: `server.js` - Express server that serves static files from `dist/` with fallback to `index.html` for client-side routing

## Code Style

Prettier configuration is in `.prettierrc`. Key conventions:
- No semicolons
- Single quotes
- 2-space indentation
- Avoid arrow function parentheses for single parameters