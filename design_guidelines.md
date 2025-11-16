# Funky Music Discord Bot - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern Discord bot landing pages (MEE6, Dyno, Groovy) and SaaS products with gaming aesthetics. Combining Discord's playful brand language with professional SaaS polish.

## Site Structure

Multi-page website with:
- **Home** (landing page)
- **Features** (detailed feature showcase)
- **Additional pages** to be confirmed with user (Commands, Premium/Pricing, Documentation, etc.)

## Typography System

**Font Stack**:
- Primary: Inter or DM Sans (clean, modern sans-serif via Google Fonts)
- Accent: Optionally Space Grotesk for headlines (futuristic feel)

**Hierarchy**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl lg:text-5xl, font-bold
- Feature Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- Stats Numbers: text-4xl md:text-5xl, font-bold
- Stats Labels: text-sm md:text-base, uppercase tracking-wide

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: gap-8 md:gap-12
- Card padding: p-6 md:p-8

**Container Strategy**:
- Full-width sections with inner max-w-7xl mx-auto px-6 md:px-8
- Content sections: max-w-6xl
- Feature cards: max-w-4xl for centered layouts

## Core Components

### Navigation
- Sticky header with logo (left), nav links (center), CTA button (right)
- Mobile: Hamburger menu with slide-out drawer
- Height: h-16 md:h-20

### Hero Section (Home)
- Height: min-h-[600px] md:min-h-[700px] (natural content height, not forced 100vh)
- Layout: Centered content with logo above headline
- Logo: w-32 md:w-48 (prominent but not overwhelming)
- Two-button CTA group: Primary "Add to Discord" + Secondary "Join Support Server"
- Buttons should have backdrop blur when over gradient/image background

### Stats Dashboard
- 4-column grid on desktop (grid-cols-2 md:grid-cols-4)
- Each stat card: text-center with large number above label
- Spacing: gap-6 md:gap-8
- Cards should feel lightweight, not heavy containers

### Features Preview (Home)
- 3-column grid on desktop (grid-cols-1 md:grid-cols-3)
- Each feature: icon (top), title, description
- Icon size: w-12 h-12 md:w-16 h-16
- CTA link below: "Explore All Features" with arrow

### Features Page
- 2-column grid for feature cards (grid-cols-1 lg:grid-cols-2)
- Each card contains: icon, title, description, "Benefit:" subsection
- Alternating layouts or consistent - choose based on visual rhythm
- More detailed than home preview cards

### Bottom CTA Section
- Centered content with heading + button
- Generous padding: py-20 md:py-32
- Single prominent CTA button

### Footer
- Multi-column layout: Brand + Quick Links + Resources + Social
- Copyright and legal links at bottom

## Icon Strategy

Use **Heroicons** via CDN for all interface icons. Feature-specific icons should use modern, rounded style.

## Images

**Hero Section**: 
- Large background treatment (gradient mesh or abstract musical visualization)
- Logo image prominently displayed (the Discord bot avatar/branding)
- Consider decorative elements like floating music notes or waveforms

**Feature Icons**: 
- Custom or icon library representing: streaming platforms, audio waves, filters, playlists, uptime, DJ controls, social interactions, premium badge

**No stock photos** - this is a tech/gaming product, so abstract graphics and icons work better than photography

## Animations

**Minimal and Purposeful**:
- Subtle fade-in on scroll for feature cards
- Hover lift effect on clickable cards (transform: translateY(-4px))
- Stats counter animation on initial view (optional)
- NO distracting background animations or parallax

## Accessibility

- All interactive elements have clear focus states
- Icon buttons include aria-labels
- Sufficient contrast ratios throughout
- Keyboard navigation support for all features

## Key Design Principles

1. **Gaming-Friendly Professional**: Balance playful Discord aesthetics with SaaS credibility
2. **Clarity Over Cleverness**: Information hierarchy should be immediately obvious
3. **Mobile-First Responsive**: Stack columns gracefully, maintain readability
4. **Call-to-Action Focus**: Discord invite buttons should be unmissable
5. **Social Proof Prominence**: Stats and user counts build trust

## Page-Specific Notes

**Home**: Quick value proposition, social proof (stats), feature tease, conversion focus

**Features**: Comprehensive showcase with benefits clearly stated, educational tone, convince users of value before asking to install