# 🚀 دليل النشر - Deployment Guide

## الملفات الموجودة على GitHub

جميع الملفات التالية موجودة وجاهزة للتحميل من المستودع:

### 📦 **الملفات الأساسية:**
- `package.json` - قائمة التبعيات والأوامر
- `package-lock.json` - إصدارات التبعيات المُحددة
- `index.html` - الصفحة الرئيسية

### ⚙️ **ملفات التكوين:**
- `vite.config.ts` - إعدادات بناء المشروع
- `tailwind.config.ts` - إعدادات التنسيقات
- `postcss.config.js` - معالج التنسيقات
- `tsconfig.json` - إعدادات TypeScript
- `.gitignore` - الملفات المحمية

### 💾 **الكود المصدري:**
- `src/` - مجلد الكود الكامل
  - `src/pages/` - الصفحات الرئيسية
  - `src/components/` - المكونات القابلة لإعادة الاستخدام
  - `src/assets/` - الصور والملفات الوسائط

### 📁 **الملفات المبنية (جاهزة للنشر):**
- `dist/index.html` - الصفحة المبنية
- `dist/assets/` - جميع الملفات المحسنة والمضغوطة

---

## 🔧 خطوات النشر على السيرفر

### الخطوة 1: تحميل المشروع
```bash
git clone https://github.com/faragello12/media-production.git
cd media-production
```

### الخطوة 2: إعداد متغيرات البيئة
```bash
# أنشئ ملف .env
cat > .env << EOF
VITE_EMAILJS_SERVICE_ID=service_vh6ihkg
VITE_EMAILJS_TEMPLATE_ID=template_njxn3u1
VITE_EMAILJS_PUBLIC_KEY=4sah5wvp0Nt9AbeLT
EOF
```

### الخطوة 3: تثبيت التبعيات
```bash
npm install
```

### الخطوة 4: بناء المشروع
```bash
npm run build
```

### الخطوة 5: نشر الملفات
```bash
# رفع محتويات مجلد dist/ فقط إلى المسار العام في السيرفر
# عادةً يكون المسار: /var/www/public_html/ أو /home/username/public_html/

cp -r dist/* /path/to/public_html/
```

---

## ⚠️ ملفات محمية (لن تجدها على GitHub)

- `.env` - مفاتيح API (يجب إنشاؤها على السيرفر)
- `node_modules/` - التبعيات (تُثبت محلياً)
- `dist/` الملفات المبنية (تُنشأ محلياً)

---

## 🌐 إعدادات السيرفر المهمة

### 1. إعادة التوجيه (SPA Routing)
تأكد من أن السيرفر يُعيد توجيه جميع الطلبات التي لا توجد بها ملفات إلى `index.html`:

**لـ Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**لـ Nginx:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    root /path/to/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 2. HTTPS
تأكد من تفعيل HTTPS (استخدم Let's Encrypt مثلاً):
```bash
# على Ubuntu/Debian
sudo apt-get install certbot
sudo certbot certonly --webroot -w /path/to/dist -d your-domain.com
```

### 3. Gzip Compression
فعّل ضغط الملفات لتحسين الأداء:
```nginx
gzip on;
gzip_types text/css application/javascript image/svg+xml;
gzip_min_length 1000;
```

---

## ✅ قائمة التحقق قبل النشر

- [ ] تم استنساخ المشروع من GitHub
- [ ] تم إعداد ملف `.env` مع مفاتيح EmailJS
- [ ] تم تشغيل `npm install` و `npm run build`
- [ ] تم رفع محتويات `dist/` إلى السيرفر
- [ ] تم إعداد إعادة التوجيه (SPA Routing)
- [ ] تم تفعيل HTTPS
- [ ] تم اختبار جميع الروابط والصفحات

---

## 🐛 استكشاف الأخطاء

### المشروع لا يُحمّل
- تحقق من أن جميع الملفات موجودة في `dist/`
- تأكد من إعادة توجيه SPA صحيحة

### رسالة خطأ في EmailJS
- تحقق من مفاتيح API في `.env`
- تأكد من أن البيانات صحيحة في لوحة تحكم EmailJS

### مشاكل الأداء
- فعّل Gzip Compression
- استخدم CDN للصور الكبيرة
- تحقق من سرعة الاتصال بالإنترنت

---

## 📞 معلومات المساعدة

- **مستودع GitHub:** https://github.com/faragello12/media-production
- **موقع البريد الإلكتروني:** limitedmediaproduction@gmail.com
- **الدعم الفني:** تواصل مع المطور