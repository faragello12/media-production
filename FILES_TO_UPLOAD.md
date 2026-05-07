# 📋 قائمة الملفات التي يجب رفعها على السيرفر

## الملفات الموجودة على GitHub (التي تحتاجها):

### 1️⃣ الملفات الرئيسية:
```
package.json              ← متطلبات المشروع
package-lock.json         ← إصدارات التبعيات المحددة بدقة
index.html                ← الصفحة الرئيسية
```

### 2️⃣ مجلد الكود (src/):
```
src/
├── pages/                ← الصفحات الأساسية
├── components/           ← المكونات القابلة لإعادة الاستخدام
├── assets/              ← الصور والملفات الوسائط
├── App.tsx              ← المكون الرئيسي
├── main.tsx             ← نقطة الدخول
└── styles.css           ← التنسيقات
```

### 3️⃣ ملفات التكوين:
```
vite.config.ts           ← إعدادات بناء المشروع
tailwind.config.ts       ← إعدادات Tailwind CSS
postcss.config.js        ← معالج CSS
tsconfig.json            ← إعدادات TypeScript
.gitignore               ← قائمة الملفات المحمية
.env.example             ← مثال لملف البيئة
```

### 4️⃣ ملفات النشر (بعد البناء):
```
dist/
├── index.html           ← الصفحة المبنية
├── assets/
│   ├── *.png            ← الصور المُحسنة
│   ├── *.mp4            ← الفيديوهات
│   ├── *.js             ← الكود المجمع
│   └── *.css            ← التنسيقات المجمعة
└── ...                  ← ملفات أخرى محسنة
```

---

## ⚠️ الملفات التي لن تكون على GitHub:

```
❌ .env                   ← (يجب إنشاؤها على السيرفر)
❌ node_modules/          ← (تُثبت محلياً)
❌ dist/                  ← (تُنشأ محلياً بـ npm run build)
❌ ملفات النظام           ← (.DS_Store, Thumbs.db)
```

---

## 🚀 خطوات النشر الدقيقة:

### الخطوة 1: استنساخ المشروع
```bash
git clone https://github.com/faragello12/media-production.git
cd media-production
```

### الخطوة 2: إعداد البيئة
```bash
# انسخ .env.example وعدّله
cp .env.example .env

# ثم عدّل .env وضع مفاتيح EmailJS الحقيقية
# استخدم محرر النصوص المفضل لديك
nano .env  # أو vi، أو أي محرر آخر
```

### الخطوة 3: تثبيت والبناء
```bash
npm install      # تثبيت جميع التبعيات
npm run build    # بناء المشروع للإنتاج
```

### الخطوة 4: رفع الملفات إلى السيرفر
```bash
# رفع محتويات dist/ فقط إلى جذر موقعك
# مثال: إذا كان الموقع في /home/username/public_html/

cp -r dist/* /home/username/public_html/

# أو استخدم FTP/SFTP
scp -r dist/* user@server:/path/to/public_html/
```

---

## 📊 حجم الملفات المهمة:

```
dist/index.html              ~ 1.7 KB
dist/assets/index-*.css      ~ 23 KB (gzipped: 5 KB)
dist/assets/index-*.js       ~ 347 KB (gzipped: 121 KB)
dist/assets/hero-*.png       ~ 915 KB (الصور الكبيرة)
dist/assets/*.mp4            ~ 3.4 MB (الفيديو)
---
الحجم الكلي تقريباً:         ~ 12-15 MB
```

---

## ✅ التحقق من النشر:

1. ✔️ تأكد من أن `index.html` موجود في جذر الموقع
2. ✔️ تأكد من أن مجلد `assets` يحتوي على جميع الملفات
3. ✔️ اختبر الموقع في المتصفح (https://your-domain.com)
4. ✔️ اختبر نموذج الاتصال (Contact Form)
5. ✔️ افحص console للتحقق من عدم وجود أخطاء

---

## 🔒 تذكيرات أمان:

- ✅ **لا تضع مفاتيح API في الكود** - استخدم `.env` فقط
- ✅ **فعّل HTTPS** - للحماية والأداء
- ✅ **احم ملف `.env`** - لا تشاركه مع أحد
- ✅ **حدث التبعيات بانتظام** - للحماية من الثغرات

---

## 📞 للمساعدة:

إذا واجهت أي مشكلة:
1. تحقق من ملف `DEPLOYMENT.md` في المشروع
2. اقرأ رسائل الأخطاء بعناية
3. تأكد من أن `node_modules` و `dist` تُنشأ بشكل صحيح
4. تواصل مع صاحب المشروع