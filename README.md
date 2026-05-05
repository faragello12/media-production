## Media Production (Figma → React + Tailwind + GSAP)

This is a React + Tailwind landing page implementation based on the Figma file:
`Media-Production` (Frame 1).

### Run locally

```bash
cd media-production
npm install
npm run dev
```

### Add exported design assets

Put your exported images/icons here:

- `media-production/public/assets/`

This project references these filenames (match them exactly):

- `frame 1 background.png`
- `hero section video back ground.png`
- `for public figure photo.png`
- `for artist photo.png`
- `for corporate photo.png`
- `we have been there.png`
- `more than studio.png`
- `talent section phot.png`
- `Digital Cinema.png`
- `digital content icons.png`
- `music production icon.png`
- `logo.png`
- `social media icons.png`
- `sliders icon.png`

### Notes
- The layout + styling are implemented to match the visible Frame 1 structure (hero, service cards, “We’ve been there”, “What We Do”, contact CTA).
- Scroll reveal animations are powered by GSAP + ScrollTrigger (disabled if the OS requests reduced motion).

