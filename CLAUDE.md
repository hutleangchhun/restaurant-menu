# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Vite development server with hot reload
- **Build**: `npm run build` - TypeScript compilation followed by production build
- **Lint**: `npm run lint` - ESLint check for code quality
- **Preview**: `npm run preview` - Preview production build locally

## Architecture Overview

This is a bilingual (English/Khmer) React restaurant menu application built with modern web technologies:

**Tech Stack:**
- React 19 + TypeScript
- Vite for build tooling and development
- Tailwind CSS for styling
- shadcn/ui component library (New York style)
- Radix UI primitives for accessible components
- Lucide React for icons
- Google Fonts (Battambang for Khmer, Inter for English)

**Key Architecture Patterns:**
- **Bilingual Support**: Full English and Khmer language support with context-based switching
- **Component-based**: Modular React components with clear separation of concerns
- **Type-safe**: Full TypeScript coverage with strict typing for bilingual menu data
- **Alias imports**: Uses `@/` prefix for clean imports (`@/components`, `@/types`, etc.)
- **Data-driven**: Menu content is centralized in `src/data/menuData.ts`
- **Responsive design**: Mobile-first approach with Tailwind CSS

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components (badge, card, tabs, button)
│   ├── MenuCard.tsx  # Individual menu item display with bilingual support
│   ├── MenuSection.tsx # Menu section component (legacy)
│   └── RestaurantMenu.tsx  # Main menu container with tabs and language toggle
├── contexts/
│   └── LanguageContext.tsx # Language state management (en/km switching)
├── data/
│   └── menuData.ts   # Central bilingual menu data source
├── types/
│   └── menu.ts       # TypeScript interfaces for bilingual MenuItem and MenuCategory
├── lib/
│   └── utils.ts      # Utility functions (cn for className merging)
└── App.tsx           # Root component with LanguageProvider wrapper
```

## Bilingual Implementation

**Language Context:**
- `LanguageContext` provides global language state (`'en' | 'km'`)
- `useLanguage()` hook for accessing current language and toggle function
- Language toggle button in header switches between English and Khmer

**Data Structure:**
- All text content stored as objects: `{ en: string, km: string }`
- Menu items, categories, descriptions, and allergens fully translated
- Type-safe bilingual interfaces in `types/menu.ts`

**Font Implementation:**
- Battambang font for Khmer text (Google Fonts)
- Inter font for English text
- `.font-khmer` CSS class applied conditionally based on language
- Proper line-height and font-weight adjustments for Khmer readability

## Component Hierarchy

- `App` → `LanguageProvider` → `RestaurantMenu` → `MenuCard` components
- Menu organized by categories (appetizers, mains, desserts, beverages)
- Each category renders as a tab with grid of menu cards
- Language toggle in header allows real-time switching

## Data Flow

- Menu data flows from `menuData.ts` → `RestaurantMenu` → `MenuCard`
- Language context flows from `LanguageProvider` throughout component tree
- Type safety enforced via bilingual `MenuItem` and `MenuCategory` interfaces
- Support for dietary restrictions, allergens, and pricing in both languages

## shadcn/ui Integration

The project uses shadcn/ui component library configured with:
- New York style variant
- Neutral base color with CSS variables
- Lucide icons as the icon library
- Components located in `@/components/ui/`

When adding new UI components, use `npx shadcn@latest add [component]` to maintain consistency.

## Styling Approach

- Tailwind CSS with custom CSS variables for theming
- Conditional font classes for Khmer vs English text
- Responsive grid layouts for menu items
- Hover effects and transitions for enhanced UX
- Semantic color classes for dietary badges (green for vegetarian/vegan, blue for gluten-free, red for spicy)
- Custom `.font-khmer` class for proper Khmer font rendering

## Localization Notes

When adding new content:
1. Always provide both English and Khmer translations
2. Use the language context to conditionally apply `.font-khmer` class
3. Follow the bilingual data structure pattern: `{ en: string, km: string }`
4. Test with both languages to ensure proper rendering and layout