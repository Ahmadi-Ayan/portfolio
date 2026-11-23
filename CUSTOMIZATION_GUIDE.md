# 🎬 সেটআপ & কাস্টমাইজেশন গাইড

## ধাপে ধাপে গাইড

### প্রথম ৫ মিনিটে শুরু করুন

```bash
# প্রজেক্ট ফোল্ডারে যান
cd /data/user/0/ai.antigem/files/home/projects/ahmadi-ayan-portfolio

# ডেভেলপমেন্ট সার্ভার চালু করুন
pnpm dev

# ব্রাউজারে খুলুন
# http://localhost:3000
```

✅ **এখন আপনার পোর্টফোলিও ব্রাউজারে দেখা যাবে!**

---

## 🎨 পার্ট ১: কন্টেন্ট কাস্টমাইজ করুন

### ১. নাম এবং লোগো

**File:** `app/components/Header.tsx`

খুঁজুন:
```tsx
<div className="logo">AY</div>
```

পরিবর্তন করুন:
```tsx
<div className="logo">AB</div> {/* আপনার ইনিশিয়াল */}
```

### ২. হোম পেজ টেক্সট

**File:** `app/components/Hero.tsx`

খুঁজুন:
```tsx
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
  <span className="block text-foreground">Crafting</span>
  <span className="block bg-gradient-to-r from-accent via-accent to-accent-secondary bg-clip-text text-transparent">
    Exceptional Experiences
  </span>
</h1>

<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
  Award-winning designer specializing in premium UI/UX design, design systems, and strategic brand direction for global companies.
</p>
```

পরিবর্তন করুন আপনার নিজের টেক্সট দিয়ে।

### ৩. প্রজেক্ট শোকেস

**File:** `app/components/Work.tsx`

খুঁজুন:
```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Premium Fintech App',
    category: 'Mobile App',
    description: 'Redesigned mobile banking experience...',
    // ...
  },
  // ৬টি প্রজেক্ট আছে
];
```

প্রতিটি প্রজেক্ট এডিট করুন:
- `title` - প্রজেক্ট নাম
- `description` - বর্ণনা
- `tags` - প্রযুক্তি ট্যাগ
- `impact` - ফলাফল
- `year` - বছর

**উদাহরণ:**
```typescript
{
  id: 1,
  title: 'আমার প্রথম প্রজেক্ট',
  category: 'Web Design',
  description: 'এখানে আপনার প্রজেক্ট বিবরণ লিখুন।',
  image: '🎨', // Emoji রাখুন বা ইমেজ পাথ দিন
  tags: ['UI/UX', 'React', 'Design'],
  impact: '+50% User Engagement',
  year: 2024,
}
```

### ৪. আবাউট সেকশন

**File:** `app/components/About.tsx`

খুঁজুন:
```tsx
<p className="text-lg text-muted-foreground mb-6 leading-relaxed">
  I'm Ahmadi Ayan, a premium designer...
</p>
```

আপনার বায়ো দিয়ে প্রতিস্থাপন করুন।

স্কিলস আপডেট করুন:
```typescript
const skills = [
  'UI/UX Design',
  'Design Systems',
  // আপনার স্কিলস যোগ করুন
];
```

### ৫. টেস্টিমোনিয়াল

**File:** `app/components/Testimonials.tsx`

খুঁজুন:
```typescript
const testimonials = [
  {
    quote: "Ahmadi's design approach...",
    author: 'Sarah Johnson',
    role: 'CEO, TechStartup Inc',
    avatar: '👩‍💼',
  },
  // ৩টি টেস্টিমোনিয়াল
];
```

আপনার ক্লায়েন্ট টেস্টিমোনিয়াল দিয়ে পূরণ করুন।

### ৬. কন্টাক্ট ইনফরমেশন

**File:** `app/components/Contact.tsx`

খুঁজুন:
```tsx
{[
  { icon: '📧', label: 'Email', value: 'hello@ahmadi-ayan.com' },
  { icon: '💬', label: 'WhatsApp', value: '+880 1XXXXXXXXX' },
  { icon: '🔗', label: 'LinkedIn', value: '/in/ahmadi-ayan' },
].map(...)
```

আপনার কন্টাক্ট ডেটা দিয়ে পরিবর্তন করুন।

---

## 🖼️ পার্ট ২: ইমেজ যোগ করুন

### ১. প্রজেক্ট ইমেজ

**ফোল্ডার তৈরি করুন:**
```bash
mkdir -p public/images
```

**ইমেজ রাখুন:**
```
public/images/
├── project1.jpg
├── project2.jpg
├── profile.jpg
└── og-image.jpg (1200x630px)
```

### ২. কম্পোনেন্টে ইমেজ ব্যবহার করুন

**File:** `app/components/Work.tsx`

খুঁজুন:
```tsx
<div className="project-image">🏦</div>
```

পরিবর্তন করুন:
```tsx
import Image from 'next/image';

<div className="project-image">
  <Image
    src="/images/project1.jpg"
    alt="Project name"
    fill
    className="object-cover"
  />
</div>
```

### ৩. প্রোফাইল ইমেজ

**File:** `app/components/About.tsx`

খুঁজুন:
```tsx
<div className="text-9xl opacity-50">👨‍💼</div>
```

পরিবর্তন করুন:
```tsx
import Image from 'next/image';

<Image
  src="/images/profile.jpg"
  alt="Ahmadi Ayan"
  width={400}
  height={400}
  className="rounded-2xl"
/>
```

---

## 🎨 পার্ট ৩: রঙ কাস্টমাইজ করুন

### রঙ পরিবর্তন করুন

**File:** `app/globals.css`

খুঁজুন:
```css
:root {
  --accent: #d4af37;              /* Gold */
  --accent-secondary: #b8860b;    /* Dark gold */
  --background: #0a0a0a;
  --foreground: #f5f5f5;
  --muted: #2d2d2d;
  --muted-foreground: #a0a0a0;
  --border: #1a1a1a;
  --card: #131313;
}
```

### কালার অপশন

**নীল থিম:**
```css
--accent: #3b82f6;
--accent-secondary: #1e40af;
```

**গোলাপী থিম:**
```css
--accent: #ec4899;
--accent-secondary: #be123c;
```

**সবুজ থিম:**
```css
--accent: #10b981;
--accent-secondary: #047857;
```

**বেগুনি থিম:**
```css
--accent: #8b5cf6;
--accent-secondary: #6d28d9;
```

---

## 📱 পার্ট ৪: মেটাডেটা & SEO

### ব্রাউজার ট্যাব টাইটেল

**File:** `app/layout.tsx`

খুঁজুন:
```typescript
export const metadata: Metadata = {
  title: "Ahmadi Ayan – Premium UI/UX Designer...",
  description: "Award-winning designer crafting...",
};
```

পরিবর্তন করুন আপনার নাম দিয়ে।

### Open Graph (শেয়ারিং)

একই ফাইলে:
```typescript
openGraph: {
  title: "আপনার নাম – ডিজাইনার",
  description: "আপনার পরিচয়",
  type: "website",
},
```

---

## 🚀 পার্ট ৫: টেস্টিং

### লোকাল টেস্টিং

```bash
# ডেভেলপমেন্ট সার্ভার
pnpm dev

# ব্রাউজারে খুলুন
# http://localhost:3000

# মোবাইলে টেস্ট করুন
# DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)
```

### চেকলিস্ট

```
[ ] সব পেজ লোড হয় ✓
[ ] লিঙ্ক কাজ করে ✓
[ ] ইমেজ দেখা যায় ✓
[ ] মোবাইলে দেখা যায় ✓
[ ] ডার্ক থিম ভালো লাগে ✓
[ ] ফর্ম কাজ করে ✓
```

---

## 🔗 পার্ট ৬: সোশ্যাল লিঙ্ক

### Footer সোশ্যাল লিঙ্ক

**File:** `app/components/Footer.tsx`

খুঁজুন:
```tsx
{[
  { name: 'Twitter', emoji: '𝕏' },
  { name: 'LinkedIn', emoji: '💼' },
  { name: 'Instagram', emoji: '📸' },
  { name: 'GitHub', emoji: '🐙' },
].map(...)
```

পরিবর্তন করুন:
```tsx
<a href="https://twitter.com/yourhandle" title="Twitter">
  {/* ... */}
</a>
```

---

## ✉️ পার্ট ৭: কন্টাক্ট ফর্ম সেটআপ (অপশনাল)

### Formspree ব্যবহার করুন (সহজ)

1. যান: https://formspree.io
2. সাইন আপ করুন
3. নতুন ফর্ম তৈরি করুন
4. Email পান

**File:** `app/components/Contact.tsx`

খুঁজুন:
```tsx
<form onSubmit={handleSubmit}>
```

পরিবর্তন করুন:
```tsx
<form onSubmit={handleSubmit} action="https://formspree.io/f/YOUR_ID" method="POST">
```

---

## 🎓 পার্ট ৮: প্রোডাকশন বিল্ড

### বিল্ড তৈরি করুন

```bash
# Android/ARM64 এ Webpack ব্যবহার করুন
pnpm build -- --webpack

# অন্যান্য প্ল্যাটফর্মে
pnpm build
```

### স্থানীয়ভাবে টেস্ট করুন

```bash
# প্রোডাকশন বিল্ড চালু করুন
pnpm start

# ব্রাউজারে খুলুন
# http://localhost:3000
```

---

## 🌍 পার্ট ৯: ডেপ্লয় করুন

### দ্রুততম উপায়: Vercel

```bash
# Vercel CLI ইনস্টল করুন
npm i -g vercel

# ডিপ্লয় করুন
vercel

# অনুসরণ করুন প্রম্পট
```

**ফলাফল:** আপনার সাইট ইন্টারনেটে লাইভ! 🎉

### বিকল্প: Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod
```

---

## 🆘 সাধারণ সমস্যা & সমাধান

### সমস্যা ১: "Port 3000 already in use"

```bash
# সমাধান: অন্য পোর্ট ব্যবহার করুন
pnpm dev --port 3001
```

### সমস্যা ২: "Module not found"

```bash
# সমাধান: ডিপেন্ডেন্সি পুনরায় ইনস্টল করুন
rm -rf node_modules
pnpm install
```

### সমস্যা ৩: "Build fails"

```bash
# সমাধান: Webpack ব্যবহার করুন (Android)
pnpm build -- --webpack
```

### সমস্যা ৪: "Styles not loading"

```bash
# সমাধান: Tailwind rebuild করুন
pnpm build
pnpm dev
```

---

## 📚 অতিরিক্ত রিসোর্স

| বিষয় | রিসোর্স |
|------|---------|
| Next.js | https://nextjs.org/docs |
| React | https://react.dev |
| TypeScript | https://www.typescriptlang.org/docs |
| Tailwind | https://tailwindcss.com/docs |

---

## 🎯 শেষ চেকলিস্ট

ডিপ্লয় করার আগে:

```
✓ সব কন্টেন্ট আপডেট
✓ ইমেজ যোগ করা
✓ রঙ কাস্টমাইজ (অপশনাল)
✓ সোশ্যাল লিঙ্ক যোগ করা
✓ লোকাল টেস্টিং সম্পন্ন
✓ বিল্ড সফল
✓ প্রোডাকশন সার্ভার চেক
✓ ডেপ্লয় করতে প্রস্তুত
```

---

**আপনি করতে পারেন! 💪**

যেকোনো প্রশ্ন হলে আবার ফিরে আসুন।

Happy customizing! 🎨
