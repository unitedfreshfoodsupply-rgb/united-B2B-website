# Deployment Guide: EmailJS + Hostinger

## Deployment Strategy

We use a client-side email architecture using **EmailJS**. This allows for reliable email sending directly from the browser without needing a dedicated backend or PHP bridge.

### Benefits
- **Zero Backend**: No need for Vercel or PHP maintenance.
- **Reliable**: Professional email delivery via SMTP.
- **Secure**: Public keys are safe for frontend use when restricted by service.

---

## Part 1: Configure EmailJS

### Step 1: Create Account
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Add your Email Service (Gmail or Hostinger SMTP recommended).

### Step 2: Create Template
Create a template and use variables matching your code (e.g., `{{name}}`, `{{email}}`, `{{company}}`, `{{subject}}`, `{{message}}`).

### Step 3: Get API Keys
- **Service ID**: From Email Services page.
- **Template ID**: From Email Templates page.
- **Public Key**: From Account -> API Keys page.

---

## Part 2: Deploy Frontend to Hostinger

### Step 1: Update Environment Variables
Create a `.env.production` file in your project root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Step 2: Build the Frontend
```bash
npm run build
```
This creates a `dist/` folder with your static files.

### Step 3: Upload to Hostinger
1. Login to **Hostinger hPanel**
2. Go to **Files** → **File Manager**
3. Navigate to `public_html`
4. **Upload** all contents from the `dist/` folder.

### Step 4: Configure .htaccess for React Router
Create a `.htaccess` file in `public_html`:
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

---

## Part 3: DNS Configuration for Resend

### Step 1: Access DNS Settings
1. In Hostinger hPanel, go to **Domains** → **DNS / Nameservers**
2. Select `united-ffv.com`

### Step 2: Add Resend DNS Records
Login to your [Resend Dashboard](https://resend.com/domains) and copy the verification records. Add them to Hostinger:

#### 1. DKIM Record (Critical for sending)
- **Type**: `TXT`
- **Name**: `resend._domainkey`
- **Value**: `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+yj8GQSLCFyjx+tvlWPJ08LtTQ0HzqN+ZIjZiWddHlK6qcOWKCqfXGDmFM/1tHfE2Lza7BcQk43e+rDzltqHPvvfpU7UDsJBLqkuYGx+cTXszVSMmCTJujI4uKRqfJ/KWDeaDi4EFZ9JEEuQOuo9cTiD+0p3zcx7qGvh07WpiLQIDAQAB`
- **TTL**: `3600` (أو تلقائي)

#### 2. SPF Records (For authentication)
أضف السجلين التاليين:

**النوع TXT:**
- **Type**: `TXT`
- **Name**: `send`
- **Value**: `v=spf1 include:amazonses.com ~all`
- **TTL**: `3600`

**النوع MX:**
- **Type**: `MX`
- **Name**: `send`
- **Value**: `feedback-smtp.eu-west-1.amazonses.com`
- **Priority**: `10`
- **TTL**: `3600`

### Step 3: Verify Domain
1. After adding all DNS records, wait 5-10 minutes for propagation
2. Go back to Resend Dashboard → Domains
3. Click **Verify** next to `united-ffv.com`
4. If verification fails, wait longer (DNS can take up to 24 hours)

---

## Testing Your Deployment

1. Visit `https://united-ffv.com`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email at `support@united-ffv.com` for the test message
5. Check Vercel logs for any API errors

---

## Troubleshooting

### CORS Errors
- Ensure `https://united-ffv.com` is in the `allowedOrigins` array in your API files
- Check browser console for specific CORS error messages

### API Not Responding
- Verify `VITE_API_BASE_URL` in `.env.production` matches your Vercel URL
- Check Vercel deployment logs for errors
- Ensure `RESEND_API_KEY` is set in Vercel environment variables

### Emails Not Sending
- Verify domain in Resend Dashboard
- Check DNS records are correctly configured
- Review Resend logs for delivery issues
