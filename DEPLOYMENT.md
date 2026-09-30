# رفع الموقع على cPanel — Deployment Guide

**الدومين:** https://limitedmediaproduction.com

الموقع متبني وجاهز. مش محتاج `npm` ولا Node على السيرفر — كل الملفات المطلوبة موجودة في فولدر `dist/`.
The site is pre-built. No Node/npm is needed on the server — everything to upload is in `dist/`.

---

## الطريقة الأسهل: ملف ZIP واحد

1. نزّل الملف **[upload-to-cpanel.zip](upload-to-cpanel.zip)** (زرار Download على صفحة الملف في GitHub).
2. في cPanel افتح **File Manager** → ادخل على `public_html`.
3. من **Settings** (فوق على اليمين) فعّل **Show Hidden Files (dotfiles)**.
4. امسح ملفات الموقع القديمة من `public_html` لو موجودة.
5. **Upload** للملف `upload-to-cpanel.zip` جوه `public_html` → كليك يمين عليه → **Extract** → وبعدين امسح الـ zip.
6. اتأكد إن `index.html` و `.htaccess` وفولدر `assets` موجودين **مباشرةً** جوه `public_html` (مش جوه فولدر فرعي).

## أو: رفع فولدر `dist/` يدوي

ارفع **محتويات** فولدر [`dist/`](dist) (مش الفولدر نفسه) على `public_html`، بما فيهم الملف المخفي `.htaccess`.

---

## ⚠️ مهم

- **`.htaccess` لازم يترفع.** هو اللي بيخلي لينكات زي `/about` و `/contact` تفتح مباشرة (من غيره هتطلع 404)، وبيحوّل `http` و `www` لـ `https://limitedmediaproduction.com`.
- **SSL لازم يكون شغال** على الدومين (cPanel → **SSL/TLS Status** → AutoSSL)، لأن الموقع بيحوّل كل الزوار لـ https.

## ✅ اختبار بعد الرفع

- [ ] https://limitedmediaproduction.com بيفتح وفيديو الصفحة الرئيسية شغال
- [ ] https://limitedmediaproduction.com/contact بيفتح مباشرة (مش 404)
- [ ] http://www.limitedmediaproduction.com بيحوّل لـ https من غير www
- [ ] أيقونة الموقع (L) ظاهرة في التاب
- [ ] إرسال رسالة تجربة من فورم Contact ووصولها على limitedmediaproduction@gmail.com
- [ ] تسجيل الموقع في Google Search Console وإضافة `https://limitedmediaproduction.com/sitemap.xml`

---

## للمطورين فقط: إعادة البناء بعد تعديل الكود

```bash
npm install
cp .env.example .env   # وحط مفاتيح EmailJS الحقيقية
npm run build          # يطلع فولدر dist/ جديد
```

مفاتيح EmailJS بتتحط جوه الـ build وقت البناء، فلازم ملف `.env` يكون موجود قبل `npm run build`، وإلا فورم التواصل مش هيبعت.
EmailJS keys are baked in at build time — `.env` must exist before `npm run build` or the contact form will fail.
