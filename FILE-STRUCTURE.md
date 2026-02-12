# Gineve Music Website - File Structure

```
gineve-music/
├── app/
│   ├── globals.css                 # Global styles with custom utilities
│   ├── layout.tsx                  # Root layout with SEO metadata
│   └── page.tsx                    # Main page assembling all sections
│
├── components/
│   ├── Hero.tsx                    # Full-screen hero section
│   ├── About.tsx                   # Brand story with portrait
│   ├── SignatureSound.tsx          # Genre showcase grid
│   ├── PerformanceOfferings.tsx    # Service packages
│   ├── NotableHighlights.tsx       # Credentials & collaborations
│   ├── PerformanceGallery.tsx      # Photo masonry grid
│   ├── Testimonials.tsx            # Client testimonial cards
│   ├── VideoSection.tsx            # Embedded videos
│   ├── BookingForm.tsx             # Contact form with Formspree
│   └── Footer.tsx                  # Footer with social links
│
├── public/
│   ├── hero-performance.jpg        # [ADD] Hero background image
│   ├── portrait.jpg                # [ADD] About section portrait
│   ├── gallery-1.jpg               # [ADD] Gallery image 1
│   ├── gallery-2.jpg               # [ADD] Gallery image 2
│   ├── gallery-3.jpg               # [ADD] Gallery image 3
│   ├── gallery-4.jpg               # [ADD] Gallery image 4
│   ├── gallery-5.jpg               # [ADD] Gallery image 5
│   └── gallery-6.jpg               # [ADD] Gallery image 6
│
├── next.config.js                  # Next.js configuration
├── tailwind.config.js              # Tailwind CSS theme config
├── postcss.config.js               # PostCSS configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies
├── README.md                       # Documentation
└── SETUP-CHECKLIST.md             # Setup guide

```

## Component Architecture

### Page Flow
```
page.tsx (Main Container)
  ↓
  ├── Hero (Full viewport)
  ├── About (Dark lighter bg)
  ├── SignatureSound (Dark bg)
  ├── PerformanceOfferings (Dark lighter bg)
  ├── NotableHighlights (Dark bg)
  ├── PerformanceGallery (Dark lighter bg)
  ├── Testimonials (Dark bg)
  ├── VideoSection (Dark lighter bg)
  ├── BookingForm (Dark bg)
  └── Footer (Dark lighter bg)
```

### Component Features

**Hero.tsx**
- Animated entrance
- Scroll-triggered fade-ins
- Smooth scroll to sections
- Responsive typography

**About.tsx**
- Two-column layout (text + image)
- Staggered credential animations
- Decorative frame accents
- Gradient background effects

**SignatureSound.tsx**
- 3-column grid (responsive)
- Hover lift effects
- Gold underline animations
- Corner accent decorations

**PerformanceOfferings.tsx**
- 2-column service grid
- Numbered accent markers
- Hover glow effects
- Smooth transitions

**NotableHighlights.tsx**
- Timeline-style highlights
- Two-column collaboration lists
- Animated bullets
- Gold divider lines

**PerformanceGallery.tsx**
- Masonry grid layout
- Hover zoom effects
- Gold border overlays
- Responsive stacking

**Testimonials.tsx**
- 3-column testimonial cards
- Quote mark accents
- Expanding dividers
- Gradient hover effects

**VideoSection.tsx**
- Responsive video embeds
- 3-column grid
- Border hover effects
- Title animations

**BookingForm.tsx**
- Multi-field form
- Dropdown selections
- Success message state
- Gold border accent
- Formspree integration

**Footer.tsx**
- 3-column layout
- Animated social icons
- Contact information
- Copyright notice

## Styling System

### Color Palette
```css
--color-dark: #0F0F10        /* Main background */
--color-dark-lighter: #1A1A1C /* Alternating sections */
--color-light: #F5F5F3        /* Primary text */
--color-gold: #C5A059         /* Accent color */
```

### Typography Scale
```css
/* Headings: Playfair Display (serif) */
h1: 5xl-8xl (80-96px desktop)
h2: 4xl-6xl (48-72px desktop)
h3: 2xl-4xl (28-48px desktop)

/* Body: Crimson Pro (serif) */
body: lg-xl (18-20px)
small: base-sm (14-16px)
```

### Spacing Pattern
- Section padding: py-32 (8rem / 128px)
- Container max-width: max-w-7xl (80rem / 1280px)
- Grid gaps: gap-6 to gap-16
- Consistent horizontal padding: px-6

### Animation Timing
- Fast interactions: 0.3s
- Standard transitions: 0.5-0.7s
- Entrance animations: 0.8-1.2s
- Scroll trigger delays: 0.1-0.2s increments

## Responsive Breakpoints

```css
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large desktops */
```

## Performance Optimizations

1. **Images**
   - Next.js Image component for optimization
   - Lazy loading for gallery
   - WebP format support
   - Responsive srcset

2. **Animations**
   - Framer Motion with reduced motion support
   - CSS-first animations where possible
   - Scroll-triggered viewport checks
   - Animation delays for staggered effects

3. **Code Splitting**
   - Component-level code splitting
   - Dynamic imports where beneficial
   - Optimized bundle size

4. **SEO**
   - Semantic HTML structure
   - Proper heading hierarchy
   - Alt text for images
   - Meta tags and OpenGraph

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Accessibility Features

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Reduced motion media query support

---

**Built with Next.js 14 & Tailwind CSS**
**Optimized for luxury brand experiences**
