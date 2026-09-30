## Limited Media Production — Website

**Live:** https://limitedmediaproduction.com

### 🚀 للرفع على السيرفر (cPanel)

الموقع جاهز — نزّل **[upload-to-cpanel.zip](upload-to-cpanel.zip)** وفكّه جوه `public_html`.
الخطوات بالتفصيل في **[DEPLOYMENT.md](DEPLOYMENT.md)**.

---

### Development

React + Vite + Tailwind + GSAP.

```bash
npm install
cp .env.example .env   # add EmailJS keys
npm run dev
```

### Build

```bash
npm run build
```

Outputs the deployable site to `dist/`. Commit the rebuilt `dist/` and regenerate `upload-to-cpanel.zip` from its contents.
