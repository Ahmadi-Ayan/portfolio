# 🚀 Deployment Guide - Ahmadi Ayan Premium Portfolio

## Quick Start

Your premium portfolio is ready to deploy! Here are the fastest ways to go live.

---

## 1️⃣ **Vercel** (Recommended - 1 Click Deploy)

### Why Vercel?
- Built by Next.js creators
- Automatic deployments from Git
- Global CDN & edge functions
- Free tier is generous
- 95+ Lighthouse scores by default

### Deploy Steps:

```bash
# Option A: Using Vercel CLI
npm i -g vercel
cd ahmadi-ayan-portfolio
vercel

# Option B: GitHub Integration
# 1. Push to GitHub
# 2. Go to vercel.com
# 3. Import repository
# 4. Deploy (auto-configured)
```

### Post-Deploy:
- Custom domain: Settings → Domains
- Analytics: Included
- Environment variables: Settings → Environment Variables

**Live in:** 2-5 minutes ⚡

---

## 2️⃣ **Netlify** (Easy Alternative)

### Why Netlify?
- Drag & drop deploy
- Form handling included
- Good performance
- Free SSL certificate

### Deploy Steps:

```bash
# Option A: Using Netlify CLI
npm i -g netlify-cli
cd ahmadi-ayan-portfolio
netlify deploy --prod

# Option B: Drag & Drop
# 1. Run: npm run build
# 2. Go to netlify.com
# 3. Drag & drop `.next` folder
# 4. Done!
```

**Live in:** 1-2 minutes 🚀

---

## 3️⃣ **Railway** (Developer-Friendly)

### Why Railway?
- Simple & fast
- Good free tier
- GitHub integration
- Minimal config

### Deploy Steps:

```bash
# 1. Go to railway.app
# 2. Connect GitHub
# 3. Create new project
# 4. Select repository
# 5. Auto-deploy on push
```

**Live in:** 3-5 minutes 📦

---

## 4️⃣ **Self-Hosted** (Full Control)

### On Linux Server / VPS

```bash
# 1. SSH into server
ssh user@your-server.com

# 2. Install Node.js & pnpm
curl -fsSL https://get.pnpm.io/install.sh | sh -
nvm install 20

# 3. Clone repository
git clone <your-repo-url>
cd ahmadi-ayan-portfolio

# 4. Install & build
pnpm install
pnpm build --webpack

# 5. Start with PM2 (keeps running)
npm i -g pm2
pm2 start "pnpm start" --name "portfolio"
pm2 startup
pm2 save

# 6. Setup Nginx reverse proxy
# See nginx.conf example below
```

### Nginx Configuration

Create `/etc/nginx/sites-available/portfolio`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    # SSL certificates (use Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Static files caching
    location ~* \.(jpg|jpeg|png|gif|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

Setup SSL with Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d yourdomain.com -d www.yourdomain.com
```

**Live in:** 15-30 minutes 🔧

---

## 5️⃣ **Docker** (Container Deployment)

### Create Dockerfile

```dockerfile
# Dockerfile
FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy files
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build
RUN pnpm build -- --webpack

# Expose port
EXPOSE 3000

# Start
CMD ["pnpm", "start"]
```

### Create docker-compose.yml

```yaml
version: '3.8'

services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
```

### Deploy

```bash
# Build & run
docker-compose up -d

# Check logs
docker-compose logs -f

# Stop
docker-compose down
```

**Live in:** 5-10 minutes 🐳

---

## 🔧 Pre-Deployment Checklist

Before going live, update these:

### 1. Content Updates
- [ ] Name in Header (AY → Your initials)
- [ ] Contact email
- [ ] WhatsApp number
- [ ] Social media links
- [ ] Project descriptions
- [ ] Skills & expertise
- [ ] Testimonials

### 2. SEO & Meta
- [ ] Meta description
- [ ] Open Graph image (1200x630px)
- [ ] Favicon
- [ ] Google Analytics (optional)

### 3. Forms & Contact
- [ ] Email service (Formspree, SendGrid, etc.)
- [ ] Contact form handler
- [ ] Reply email setup

### 4. Performance
- [ ] Compress images
- [ ] Test Core Web Vitals
- [ ] Enable caching
- [ ] Setup CDN

### 5. Security
- [ ] HTTPS enabled
- [ ] Security headers
- [ ] Rate limiting
- [ ] Environment variables protected

---

## 📊 Monitoring & Maintenance

### Setup Monitoring

```bash
# Google Analytics
# 1. Create GA4 property
# 2. Get measurement ID
# 3. Add to Header component:

<script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXX`} />
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXX');
  `
}} />
```

### Uptime Monitoring
- UptimeRobot (free)
- Pingdom
- Status.io

### Performance Monitoring
- Vercel Analytics (auto)
- Google PageSpeed Insights
- WebPageTest

---

## 🚨 Troubleshooting

### "Build fails on Android ARM64"
```bash
# Use Webpack instead of Turbopack
pnpm build -- --webpack
```

### "Port 3000 already in use"
```bash
# Kill process
lsof -ti:3000 | xargs kill -9

# Or use different port
pnpm dev --port 3001
```

### "CORS errors"
Add to `next.config.ts`:
```typescript
headers: async () => [
  {
    source: '/:path*',
    headers: [
      { key: 'Access-Control-Allow-Origin', value: '*' },
    ],
  },
],
```

### "Images not loading"
Ensure images are in `/public` folder or use Next.js Image component with proper domains.

---

## 📈 Performance Optimization

### Image Optimization
```tsx
import Image from 'next/image';

<Image
  src="/images/project.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // For above-fold images
/>
```

### Code Splitting
Automatic in Next.js, but optimize with dynamic imports:

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./heavy'), {
  loading: () => <div>Loading...</div>,
});
```

### Caching Headers
Already configured in production. For custom:
```typescript
// next.config.ts
headers: async () => [
  {
    source: '/static/:path*',
    headers: [
      { key: 'Cache-Control', value: 'public, max-age=31536000' },
    ],
  },
],
```

---

## 🎯 Next Steps

1. **Choose hosting** → Pick one from above
2. **Update content** → Personalize portfolio
3. **Test everything** → Local `pnpm dev`
4. **Deploy** → Follow platform instructions
5. **Setup domain** → Point DNS to hosting
6. **Monitor** → Track analytics & performance

---

## 💡 Pro Tips

- **Early redirect**: Set up www redirect ASAP
- **Email forwarding**: Use Gmail forwarding for contact@domain
- **Backup**: Keep Git repository updated
- **Updates**: Push new projects quarterly
- **SEO**: Submit to Google Search Console

---

## 📞 Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **MDN Web Docs**: https://developer.mozilla.org/

---

**Your premium portfolio is ready to shine! 🌟**

Pick a hosting platform above and deploy in minutes.

Good luck! 🚀
