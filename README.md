# Gineve Music - Luxury Live Music Website

A premium, cinematic one-page website for Gineve Music, showcasing refined live music experiences for Abuja's finest events.

## 🎵 Features

- **Dark Luxury Design**: Sophisticated dark theme with muted gold accents
- **Cinematic Animations**: Smooth Framer Motion animations with scroll triggers
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **SEO Optimized**: Comprehensive meta tags for local search visibility
- **Performance**: Next.js Image optimization and lazy loading
- **Contact Form**: Integrated with Formspree for inquiries

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Typography**: Playfair Display + Crimson Pro
- **Form**: Formspree
- **Language**: TypeScript

## 📦 Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Configure Formspree**
   - Sign up at [formspree.io](https://formspree.io)
   - Create a new form
   - Replace `YOUR_FORM_ID` in `components/BookingForm.tsx` with your form ID:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

3. **Add Images**
   Place the following images in the `/public` directory:
   - `hero-performance.jpg` - Hero section background (1920x1080px recommended)
   - `portrait.jpg` - About section portrait (800x1200px recommended)
   - `gallery-1.jpg` through `gallery-6.jpg` - Performance gallery images (1200x800px recommended)

   **Image Guidelines**:
   - High quality, professionally shot
   - Dark, cinematic tones
   - Compressed for web (use tools like TinyPNG)
   - Consistent color grading

4. **Update Video IDs**
   In `components/VideoSection.tsx`, replace placeholder video IDs:
   ```typescript
   embedUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
   ```

5. **Update Contact Information**
   - Email in `components/Footer.tsx` and `components/BookingForm.tsx`
   - Phone number in both components
   - Social media URLs in `components/Footer.tsx`

## 🏃 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📱 Page Sections

1. **Hero** - Full-screen cinematic introduction with CTAs
2. **About** - Brand story with portrait and credentials
3. **Signature Sound** - Genre expertise showcase
4. **Performance Offerings** - Service packages
5. **Notable Highlights** - Prestigious performances and collaborations
6. **Performance Gallery** - Photo masonry grid
7. **Testimonials** - Client feedback cards
8. **Video Section** - Embedded performance videos
9. **Booking Form** - Contact form with Formspree
10. **Footer** - Contact info and social links

## 🎨 Design Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  dark: '#0F0F10',
  gold: '#C5A059',
  // Add more colors
}
```

### Fonts
Change fonts in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
```

### Animations
Adjust timing in component files:
```typescript
transition={{ duration: 0.8, delay: 0.2 }}
```

## 🔧 Configuration

### SEO
Update metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ...
}
```

### Performance
- Images are automatically optimized via Next.js Image component
- Lazy loading enabled for gallery
- Minimal animation payload
- Font display swap for faster loading

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js
4. Deploy

### Netlify

1. Push code to GitHub
2. Create new site on Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Deploy

### Custom Server

```bash
npm run build
npm start
```

Serve on port 3000 or configure with environment variables.

## 📝 Content Management

### Testimonials
Edit `components/Testimonials.tsx`:
```typescript
const testimonials = [
  {
    quote: "Your testimonial...",
    name: "Client Name",
    event: "Event Type",
  },
]
```

### Collaborations
Edit `components/NotableHighlights.tsx`:
```typescript
const collaborations = {
  bands: ["Band 1", "Band 2"],
  artists: ["Artist 1", "Artist 2"],
}
```

### Services
Edit `components/PerformanceOfferings.tsx` to add/remove offerings.

## 🎯 Performance Metrics Target

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 🐛 Troubleshooting

**Images not loading:**
- Check file names match exactly (case-sensitive)
- Verify images are in `/public` directory
- Clear Next.js cache: `rm -rf .next`

**Form not submitting:**
- Verify Formspree form ID
- Check browser console for errors
- Ensure CORS is enabled on Formspree

**Build errors:**
- Run `npm install` again
- Delete `node_modules` and `.next` folders
- Check Node.js version (requires 18+)

## 📄 License

All rights reserved © 2024 Gineve Music

## 🤝 Support

For technical support or customization requests, contact your developer.

---

**Built with precision for luxury brands** ✨
