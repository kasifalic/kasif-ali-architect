# Portfolio Website - Project Context

## Overview
Personal portfolio website for Kasif Ali - AI Systems Architect with 10+ years of experience.

## Tech Stack
- **Framework:** React + TypeScript + Vite
- **Styling:** Tailwind CSS + Custom CSS
- **Animations:** GSAP (GreenSock)
- **UI Components:** shadcn/ui
- **Fonts:** Sora (headings), Outfit (body), Playfair Display (elegant text), JetBrains Mono (code)

## Project Structure
```
/home/kasifali/portfolio/
├── public/
│   └── kasif-hero.png          # Main hero image (Gemini illustrated, transparent BG)
├── src/
│   ├── components/
│   │   ├── HeroNew.tsx         # Current hero section (main focus)
│   │   ├── HeroSection.tsx     # Old hero section (not in use)
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   └── Index.tsx           # Main page using HeroNew
│   └── index.css               # Global styles + custom classes
├── refer/                       # Reference images folder
│   ├── Adobe Express - file.png           # Current hero image (transparent BG)
│   ├── Gemini_Generated_Image_*.png       # AI generated illustrated version
│   └── Screenshots...
└── tailwind.config.ts
```

## Color Palette

### Warm Gradient Background (Hero)
```css
#FFF8F0 → #FFF5E6 → #FFECD9 → #FFE4C4 → #FFE0BC → #FFDDB5
```

### Golden/Amber Theme Colors
```
Primary Golden: #C9A86C
Light Golden: #E8D5A3
Dark Amber: #8B7355
Amber Text: amber-700, amber-800, amber-900
```

### CSS Variables (in index.css)
```css
--background: hsl(40 33% 96%)     /* Warm cream */
--primary: hsl(24 95% 53%)        /* Orange */
--accent: hsl(142 71% 45%)        /* Green */
--charcoal: hsl(0 0% 15%)         /* Dark text */
```

## Current Hero Section Design

### Layout
- **Full viewport height** (`h-screen`) - exactly one screen, no overflow
- Warm peachy-orange gradient background (`.warm-gradient`)
- **"Hello" text on left, "There" text on right** - elegant Playfair Display italic
- **LARGE illustrated portrait in center** - dominates the viewport (82vh height, 65vw width)
- **"I'm Kasif"** name below image
- Compact role section in frosted glass card
- Golden/amber themed buttons (compact size)
- **Stats on LEFT and RIGHT sides** (not bottom) - floating animation

### Stats Positioning
- **Left side:** "10+ Years Experience" and "9 Production Apps"
- **Right side:** "$27M+ Spend Managed" and "1000+ Assets Tracked"
- Each stat in frosted glass card with floating up/down animation
- Different timing for each stat (2.2s to 3s) for organic feel

### Hero Image Specifications
- **File:** `/public/kasif-hero.png`
- **Style:** Gemini AI-generated illustrated portrait with golden glow
- **Background:** Transparent (removed via Adobe Express)
- **Size:** `clamp(450px, 65vw, 900px)` width, `clamp(550px, 82vh, 950px)` height
- **Priority:** Image is the BIGGEST element - dominates the landing page

### Key CSS Classes (in index.css)
```css
.warm-gradient          /* Peachy gradient background */
.hero-greeting          /* Playfair Display italic with golden gradient for "Hello There" */
.hero-name              /* Sora font, bold for "I'm Kasif" */
.hero-name-gradient     /* Dark gradient text */
.btn-golden             /* Golden gradient button with glow (compact: px-6 py-3) */
.btn-elegant            /* Golden outline button (compact: px-6 py-3) */
.elegant-divider        /* Gradient vertical line */
```

### GSAP Animations
1. Stats float in with scale animation
2. "Hello" slides from left
3. "There" slides from right
4. Image scales in from 0.85
5. Name animates up
6. Role section animates up
7. Buttons fade in
8. **Continuous floating animation** for stats (up/down with yoyo)

## Design Decisions Made

1. **Illustration over photo:** Using AI-generated illustrated version looks more artistic and unique
2. **Transparent background:** Allows seamless blending with warm gradient
3. **Golden/amber theme:** Complements the golden glow in the illustration
4. **Playfair Display font:** Elegant serif italic for "Hello There" greeting
5. **Stats on sides:** Fills vacant space on left/right instead of bottom row
6. **Floating stats animation:** Adds life without being distracting
7. **Maximum image size:** Image is the hero - takes up 82% of viewport height
8. **Compact UI elements:** Role section, buttons made smaller to maximize image space

## What Was Tried & Removed
- Floating icon boxes (sparkles, stars, zap) - looked too AI-generated/generic
- Pulsing dots and gradient orbs - cluttered
- "Available for opportunities" badge - removed for cleaner look
- mix-blend-mode effects - caused yellow tint on t-shirt
- Circular profile image - switched to portrait style
- Stats at bottom row - moved to sides for better use of space

## Key Files to Edit

### For Hero Section Changes
- `src/components/HeroNew.tsx` - Component structure, layout, animations
- `src/index.css` - Styles for `.hero-greeting`, `.hero-name`, buttons, etc.

### For Other Sections (TODO - not yet styled to match)
- `src/components/ProjectsSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/ExperienceSection.tsx`
- `src/components/ContactSection.tsx`

## Dev Server
```bash
npm run dev
# Runs on http://localhost:8080/
```

## Current State Summary
Hero section is complete with:
- ✅ "Hello There" in elegant golden gradient Playfair Display
- ✅ LARGE illustrated portrait (82vh) with transparent background
- ✅ "I'm Kasif" name with proper spacing
- ✅ Compact role card with "AI Systems & Cloud Architecture" / "ARCHITECT"
- ✅ Golden "Let's Connect" + outline "Download CV" buttons
- ✅ Stats on left/right sides with floating animation
- ✅ Scroll indicator at bottom
- ✅ Everything fits on single viewport (h-screen)

## Next Steps / TODO
- [ ] Style Projects section to match hero aesthetic (golden/amber theme)
- [ ] Style About section
- [ ] Style Experience section
- [ ] Style Contact section
- [ ] Ensure responsive design works on mobile
- [ ] Review overall color consistency across sections

## Reference Images Location
All reference screenshots and images are in `/home/kasifali/portfolio/refer/`

## Quick Commands
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
