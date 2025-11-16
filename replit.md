# LegionX Discord Bot - Landing Page

## Overview

A modern, multi-page static marketing website for LegionX, a Discord security bot. This pure frontend application showcases the bot's features, commands, and premium offerings through a visually appealing interface built with React, TypeScript, and Tailwind CSS. The site is optimized for deployment on Vercel and includes static statistics, testimonials, and comprehensive information about the bot's security capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**November 16, 2025 - Converted to Static Site for Vercel Deployment**

1. **Removed Express Backend**: Converted from fullstack Express application to pure frontend static site to enable Vercel deployment:
   - Removed entire `server/` directory
   - Removed Express, database dependencies, and backend-related code
   - Updated package.json to remove backend scripts and dependencies
   
2. **Created Static Data File**: Moved backend data to frontend for static deployment:
   - Created `client/src/data/static-data.ts` with stats and testimonials
   - Updated Home page and Testimonials component to use local data
   - Removed all API calls and TanStack Query usage for stats/testimonials
   
3. **Updated Build Configuration**: Optimized for static site deployment:
   - Updated `vite.config.ts` to output to `dist/` directory
   - Created `vercel.json` for SPA routing and static asset serving
   - Updated workflow to run Vite dev server only (no Express)
   - Successfully tested build with `npm run build` - ready for Vercel deployment

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **Single Page Application (SPA)** with client-side routing to multiple pages (Home, Features, Commands, Premium, Dashboard)

**UI Component System**
- **shadcn/ui** components (New York style variant) built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component library includes 30+ pre-built UI components (buttons, cards, dialogs, forms, etc.)
- Custom theming system supporting light/dark modes through CSS variables

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- Local component state with React hooks
- No global state management library (Redux/Zustand) - relying on React Query for API data caching

**Design System**
- Typography: DM Sans (primary), with support for Space Grotesk (accent), Architects Daughter, Fira Code, and Geist Mono
- Color system based on HSL CSS variables for theme flexibility
- Consistent spacing scale using Tailwind units (4, 6, 8, 12, 16, 20, 24, 32)
- Responsive breakpoints: mobile-first approach with md (768px) and lg (1024px) breakpoints
- Custom gradient backgrounds for visual appeal

### Static Data Architecture

**Data Storage**
- **Static data file** at `client/src/data/static-data.ts`
- All stats and testimonials are hardcoded in the frontend
- No backend API calls - pure static site deployment
- Data can be updated by editing the static data file and rebuilding

**Data Models**
- **Stats**: Server count, user count, uptime percentage, threats blocked
- **Testimonials**: User reviews with server name, author info, content, and ratings
- All data is imported directly into components (no API fetching)

### External Dependencies

**UI Component Libraries**
- **Radix UI** - Headless UI primitives for accessible components (20+ packages)
- **shadcn/ui** - Pre-styled component system built on Radix
- **Lucide React** - Icon library (evidenced by icon imports in components)
- **class-variance-authority** - Variant-based component styling
- **embla-carousel-react** - Carousel/slider functionality

**Development Tools**
- **TypeScript** - Type safety across frontend and backend
- **ESBuild** - Fast JavaScript bundler for production backend builds
- **tsx** - TypeScript execution for development server
- **Tailwind CSS** with PostCSS and Autoprefixer

**Data & Validation**
- **Zod** - Schema validation and TypeScript type inference
- **drizzle-zod** - Integration between Drizzle ORM and Zod schemas

**Deployment**
- **Vercel** - Optimized for static site deployment
- Pre-configured `vercel.json` for SPA routing
- Build output to `dist/` directory

**Utility Libraries**
- **date-fns** - Date manipulation and formatting
- **clsx** & **tailwind-merge** - Conditional CSS class merging
- **nanoid** - Unique ID generation
- **react-hook-form** with **@hookform/resolvers** - Form management (available for future forms)

**Hosting & Integration**
- **Replit** - Primary development and deployment platform with custom Vite plugins
- Environment configured for Replit's infrastructure (REPL_ID checks, cartographer integration)

**Discord Integration**
- OAuth2 URLs configured for bot invitation and server linking
- No active Discord API integration in the landing page code
- Designed to complement a separate Discord bot application