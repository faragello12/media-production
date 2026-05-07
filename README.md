## Media Production (Figma → React + Tailwind + GSAP)

This is a React + Tailwind implementation based on the Figma file:
`Media-Production`.

### Run locally

```bash
cd media-production
npm install
npm run dev
```

### Build for production

```bash
npm run build
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### Security Notes

- EmailJS API keys are stored in environment variables (not committed to git)
- All dependencies are audited for security vulnerabilities
- The application uses HTTPS in production

### Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your web server
3. Ensure your server serves the `index.html` file for all routes (SPA routing)
