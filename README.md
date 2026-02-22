# E+ للدهانات | Premium Home Painting Services Website

<div dir="rtl">

## 🎨 نظرة عامة

موقع إلكتروني فاخر لشركة E+ للدهانات - خدمات دهان المنازل الاحترافية في المملكة العربية السعودية.

### ✨ المميزات

- 🌟 تصميم فاخر وعصري بنمط Luxury Interior Brand
- 🔄 دعم كامل للغة العربية مع RTL Layout
- 📱 تصميم متجاوب بالكامل (Mobile-First)
- 🎨 لوحة ألوان راقية (Dark Green + Warm Beige + Gold)
- ⚡ أداء عالي وسرعة تحميل ممتازة
- 🎭 رسوم متحركة سلسة وانتقالات أنيقة
- 💬 زر واتساب عائم دائم
- 📧 نموذج تواصل احترافي
- 🖼️ معرض أعمال تفاعلي
- ⭐ قسم آراء العملاء
- 📊 SEO محسّن بالكامل

</div>

## 🛠️ التقنيات المستخدمة

- **React.js** - Frontend Framework
- **Tailwind CSS** - Styling
- **Vite** - Build Tool
- **Google Fonts** - Cairo & Tajawal Arabic Fonts

## 🚀 البدء السريع

### المتطلبات

- Node.js (v16 أو أحدث)
- npm أو yarn

### التثبيت

```bash
# تثبيت المكتبات
npm install

# تشغيل السيرفر المحلي
npm run dev

# بناء النسخة النهائية
npm run build

# معاينة النسخة النهائية
npm run preview
```

الموقع سيعمل على: `http://localhost:5173`

## 📁 هيكل المشروع

```
eazyservice/
├── public/               # الملفات العامة والصور
├── src/
│   ├── components/      # مكونات React
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── PortfolioSection.jsx
│   │   ├── ProcessSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.jsx          # المكون الرئيسي
│   ├── main.jsx         # نقطة الدخول
│   └── index.css        # الأنماط الرئيسية
├── index.html           # HTML الرئيسي
├── tailwind.config.js   # إعدادات Tailwind
└── package.json
```

## 🎨 لوحة الألوان

```css
Primary (Dark Green):  #1F3D36
Secondary (Beige):     #F4EFE7
Accent (Gold):         #C6A96B
Text Dark:             #2B2B2B
Light Background:      #FAF7F2
```

## 📱 الأقسام

1. **Hero Section** - قسم الهبوط الرئيسي
2. **Services** - الخدمات المقدمة
3. **Why Choose Us** - لماذا تختارنا
4. **Portfolio** - معرض الأعمال
5. **Process** - خطوات العمل
6. **Testimonials** - آراء العملاء
7. **Contact** - نموذج التواصل
8. **Footer** - التذييل

## 🔧 التخصيص

### تغيير رقم الواتساب

ابحث عن `966557852506` في الملفات واستبدله برقمك:
- `src/components/WhatsAppButton.jsx`
- `src/components/ContactSection.jsx`
- `src/components/Footer.jsx`

### تغيير الألوان

عدّل ملف `tailwind.config.js`:

```javascript
colors: {
  primary: '#1F3D36',    // لونك الأساسي
  secondary: '#F4EFE7',  // اللون الثانوي
  accent: '#C6A96B',     // لون التمييز
  // ...
}
```

### إضافة الصور

ضع صورك في مجلد `public/` واستخدمها في المكونات:

```jsx
<img src="/your-image.jpg" alt="Description" />
```

## 📦 النشر

### Vercel (موصى به)

```bash
# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel
```

### Netlify

```bash
# بناء المشروع
npm run build

# رفع مجلد dist إلى Netlify
```

### GitHub Pages

```bash
# تثبيت gh-pages
npm install --save-dev gh-pages

# إضافة إلى package.json
"homepage": "https://yourusername.github.io/eazyservice",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# النشر
npm run deploy
```

## 🌟 المميزات المتقدمة

- ✅ Sticky Navbar مع تأثير الشفافية
- ✅ Smooth Scroll Navigation
- ✅ Hover Effects & Animations
- ✅ Mobile Menu
- ✅ Portfolio Filtering
- ✅ Testimonials Slider
- ✅ Contact Form Validation
- ✅ WhatsApp Integration
- ✅ Social Media Links
- ✅ Custom Scrollbar
- ✅ Loading States
- ✅ Error Handling

## 📞 الدعم

للدعم والاستفسارات:
- WhatsApp: +966 55 785 2506
- Email: info@eplus-painting.com

## 📄 الترخيص

هذا المشروع مرخص تحت MIT License

---

<div align="center">
  <p>صُنع بـ ❤️ في المملكة العربية السعودية</p>
  <p>© 2026 E+ للدهانات. جميع الحقوق محفوظة</p>
</div>
