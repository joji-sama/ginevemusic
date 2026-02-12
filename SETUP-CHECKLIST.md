# Gineve Music Website - Setup Checklist

## ✅ Pre-Launch Checklist

### 1. Content Preparation
- [ ] Collect high-quality performance photos (7 images minimum)
  - Hero background (landscape, 1920x1080px)
  - Portrait photo (vertical, 800x1200px)
  - 6 gallery images (various sizes)
- [ ] Gather performance video links (YouTube/Vimeo)
- [ ] Collect client testimonials (3-5)
- [ ] Verify all text content for accuracy

### 2. Technical Setup
- [ ] Install Node.js (version 18 or higher)
- [ ] Run `npm install` in project directory
- [ ] Create Formspree account and get form ID
- [ ] Update form ID in `components/BookingForm.tsx`

### 3. Content Updates
- [ ] Add images to `/public` folder with correct names
- [ ] Update video IDs in `components/VideoSection.tsx`
- [ ] Replace email addresses:
  - `components/Footer.tsx`
  - `components/BookingForm.tsx`
- [ ] Replace phone numbers in same files
- [ ] Update social media links in `components/Footer.tsx`
- [ ] Customize testimonials in `components/Testimonials.tsx`
- [ ] Update collaborations in `components/NotableHighlights.tsx`

### 4. SEO Configuration
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add Google Analytics (if needed)
- [ ] Create robots.txt
- [ ] Create sitemap.xml

### 5. Testing
- [ ] Test on desktop browser
- [ ] Test on mobile devices
- [ ] Test form submission
- [ ] Check all links work
- [ ] Test video embeds
- [ ] Verify images load correctly
- [ ] Test smooth scrolling
- [ ] Check animations work

### 6. Performance
- [ ] Compress all images (use TinyPNG or similar)
- [ ] Run Lighthouse audit (target 90+ score)
- [ ] Test page load speed
- [ ] Verify lazy loading works

### 7. Deployment
- [ ] Choose hosting platform (Vercel recommended)
- [ ] Push code to GitHub
- [ ] Connect repository to hosting
- [ ] Configure custom domain (if applicable)
- [ ] Set up SSL certificate
- [ ] Test live site thoroughly

### 8. Post-Launch
- [ ] Submit to Google Search Console
- [ ] Monitor form submissions
- [ ] Track analytics
- [ ] Share on social media
- [ ] Send to key contacts

## 🔑 Important Files to Update

1. **Images** (`/public/`)
   - hero-performance.jpg
   - portrait.jpg
   - gallery-1.jpg through gallery-6.jpg

2. **Contact Info**
   - Email: Search for `info@ginevemusic.com` and replace
   - Phone: Search for `+234 808 680 5415` and replace

3. **Form Integration**
   - File: `components/BookingForm.tsx`
   - Line: Update Formspree URL

4. **Videos**
   - File: `components/VideoSection.tsx`
   - Replace: `VIDEO_ID_1`, `VIDEO_ID_2`, `VIDEO_ID_3`

5. **Social Links**
   - File: `components/Footer.tsx`
   - Update all social media URLs

## 🚨 Common Issues

**Issue**: Images not showing
**Fix**: Ensure file names match exactly (case-sensitive) and are in `/public`

**Issue**: Form not working
**Fix**: Double-check Formspree form ID is correct

**Issue**: Build fails
**Fix**: Delete `.next` folder and `node_modules`, run `npm install` again

**Issue**: Slow loading
**Fix**: Compress images further, check internet connection

## 📞 Need Help?

If you encounter issues:
1. Check the README.md troubleshooting section
2. Review the browser console for error messages
3. Verify all file paths are correct
4. Ensure Node.js version is 18+

---

**Time Estimate**: 2-3 hours for complete setup
**Difficulty**: Intermediate (requires basic command line knowledge)
