# Tailwind Theme Reference

This project uses a custom Tailwind CSS theme based on the color **#57944f** (green) with a complementary warm coral accent color.

## Color Palette

### Primary Colors (Green - #57944f)
- `primary-50` through `primary-950`: Full green scale from lightest to darkest
- Main color: `primary-500` (#57944f)
- Usage: Primary buttons, links, brand elements

### Accent Colors (Warm Coral/Terracotta)
- `accent-50` through `accent-950`: Full accent scale
- Main color: `accent-500` (#ff5c33)
- Usage: Highlights, CTAs, dividers, hover states

### Neutral Grays
- `gray-50` through `gray-950`: Standard gray scale
- Usage: Text, borders, backgrounds

### Semantic Colors
- `background`: White (#ffffff)
- `surface`: Light gray background (#f9fafb)
- `surface-light`: Very light background (#f3f3fa)
- `surface-hover`: Hover state background (#e9e9f2)
- `border`: Standard border color (#e5e7eb)
- `border-light`: Light border (#f3f4f6)
- `text-primary`: Black (#000000)
- `text-secondary`: Medium gray (#4b5563)
- `text-muted`: Light gray (#6b7280)

## Typography

### Font Families
- `font-sans` / `.font-albert`: Albert Sans (headings, navigation)
- `font-body` / `.font-open`: Open Sans (body text, descriptions)

### Font Sizes
- `text-xs`: 12px
- `text-sm`: 14px
- `text-base`: 16px
- `text-lg`: 18px
- `text-xl`: 20px
- `text-2xl`: 24px
- `text-3xl`: 30px
- `text-4xl`: 36px

### Font Weights
- `font-medium`: 500
- `font-semibold`: 600
- `font-bold`: 700

## Layout

### Container
- `.max-w-page`: Max width of 1280px (page container)

### Spacing Patterns
Common spacing values used in the design:
- Padding: `px-2`, `px-2.5`, `px-4`, `px-6`, `py-2`, `py-2.5`, `py-6`, `py-12`, `py-16`
- Gaps: `gap-1.5`, `gap-2`, `gap-3`, `gap-4`, `gap-5`, `gap-6`, `gap-8`
- Margins: `mb-3`, `mb-4`, `mb-6`, `mb-8`

## Border Radius
- `rounded-sm`: 6px
- `rounded-md`: 8px
- `rounded-lg`: 12px
- `rounded-xl`: 16px
- `rounded-full`: Full circle

## Usage Examples

### Primary Button
```tsx
<button className="rounded-full bg-primary-500 px-4 py-2.5 font-albert text-base font-medium text-white transition-colors hover:bg-primary-600">
  Click Me
</button>
```

### Accent Button
```tsx
<button className="rounded-full bg-accent-500 px-4 py-2.5 font-albert text-base font-medium text-white transition-colors hover:bg-accent-600">
  Call to Action
</button>
```

### Light Background Section
```tsx
<div className="bg-primary-light py-12 md:py-16">
  {/* Content */}
</div>
```

### Navigation Link with Active State
```tsx
<button className="relative font-albert text-xl font-semibold text-black transition-opacity hover:opacity-80">
  Home
  <span className="absolute bottom-[-10px] left-0 block h-[3px] w-full rounded-full bg-primary-500" />
</button>
```

### Tag/Badge
```tsx
<div className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-2.5 py-1">
  <span className="font-open text-sm font-medium text-primary-700">Tag</span>
</div>
```

### Card with Border
```tsx
<div className="rounded-xl border border-gray-200 bg-white p-2">
  {/* Content */}
</div>
```

## Design Patterns from Example Code

1. **Navigation**: Fixed header with border-bottom, max-width container, flex layout
2. **Buttons**: Rounded-full for pill buttons, rounded-lg/xl for cards
3. **Typography**: Albert Sans for headings/nav, Open Sans for body text
4. **Spacing**: Consistent use of 2.5, 4, 6, 8 spacing units
5. **Colors**: Primary green for main actions, accent coral for highlights
6. **Hover States**: Opacity changes (hover:opacity-80) and background color shifts
7. **Active States**: Underline indicators using absolute positioned pseudo-elements
