@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for "Lior Bashari" - a Full-Stack developer. Built to generate leads from SMB owners with a premium, animated one-page design.

## Commands

- `npm run dev` - Start development server (Turbopack)
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui (Base UI, not Radix)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod v4 validation
- **i18n**: next-intl (Hebrew RTL default, English LTR)
- **Theme**: next-themes (dark default)

## Architecture

### i18n Routing
All pages live under `src/app/[locale]/`. The `middleware.ts` handles locale detection. Default locale is `he` (Hebrew, RTL). Translation files are in `src/messages/he.json` and `src/messages/en.json`.

### shadcn/ui (Base UI)
This project uses shadcn/ui v4 which is built on `@base-ui/react` (NOT Radix). Components use `render` prop instead of `asChild` for composition. Example: `<Button render={<a href="..." />}>`.

### Form System
Multi-step form with conditional fields. Single `useForm` instance orchestrated in `contact-form.tsx`. Zod schema with `.refine()` for conditional budget validation. Server Action in `src/actions/submit-lead.ts` POSTs to `LEAD_WEBHOOK_URL` env var.

### Scroll Animations
Reusable `ScrollAnimation` wrapper component using Framer Motion `whileInView`. All animations respect `prefers-reduced-motion` via CSS.

## Key Directories

- `src/components/sections/` - Page sections (hero, services, method, tech, contact)
- `src/components/forms/` - Multi-step contact form components
- `src/components/shared/` - Reusable components (scroll-animation, toggles)
- `src/schemas/` - Zod validation schemas
- `src/actions/` - Server Actions
- `src/i18n/` - Internationalization config
