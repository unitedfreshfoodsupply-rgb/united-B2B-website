# Hybrid Deployment Guide: Vercel + Hostinger

This guide explains how to deploy your application using a hybrid architecture:
- **Backend (API)**: Vercel Serverless Functions (free tier)
- **Frontend (Static)**: Hostinger Premium

---

## Part 1: Deploy Backend to Vercel

### Step 1: Prepare Your Vercel Account
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Install Vercel CLI (optional but recommended):
   ```bash
   npm install -g vercel
   ```

### Step 2: Deploy API Functions
You have two options:

#### Option A: Using Vercel CLI (Recommended)
```bash
# Login to Vercel
vercel login

# Deploy from project root
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? uniteda-supply-hub-api (or your choice)
# - Directory? ./ (project root)
# - Override settings? No
```

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository (GitHub/GitLab/Bitbucket)
3. Configure project:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty

### Step 3: Configure Environment Variables
1. In Vercel Dashboard, go to your project → **Settings** → **Environment Variables**
2. Add the following:
   - **Key**: `RESEND_API_KEY`
   - **Value**: `REDACTED_RESEND_API_KEY`
   - **Environment**: Production, Preview, Development (select all)
3. Click **Save**

### Step 4: Get Your API URL
After deployment, Vercel will provide a URL like:
```
https://uniteda-supply-hub-api.vercel.app
```
**Save this URL** - you'll need it for the frontend configuration.

---

## Part 2: Deploy Frontend to Hostinger

### Step 1: Update Environment Variable
Create a `.env.production` file in your project root:
```env
VITE_API_BASE_URL=https://your-vercel-project.vercel.app
```
Replace `your-vercel-project` with your actual Vercel deployment URL from Part 1, Step 4.

### Step 2: Build the Frontend
```bash
npm run build
```
This creates a `dist/` folder with your static files.

### Step 3: Upload to Hostinger
1. Login to **Hostinger hPanel**
2. Go to **Files** → **File Manager**
3. Navigate to `public_html` (or your domain's root directory)
4. **Delete** any existing files in `public_html` (backup first if needed)
5. **Upload** all contents from the `dist/` folder:
   - You can use the Upload button in File Manager
   - Or use FTP (FileZilla) for faster uploads
6. Ensure the file structure looks like:
   ```
   public_html/
   ├── index.html
   ├── assets/
   ├── images/
   └── ... (other files from dist/)
   ```

### Step 4: Configure .htaccess for React Router
Create a `.htaccess` file in `public_html` with the following content:
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
This ensures client-side routing works correctly.

---

## Part 3: DNS Configuration for Resend

### Step 1: Access DNS Settings
1. In Hostinger hPanel, go to **Domains** → **DNS / Nameservers**
2. Select `united-ffv.com`

### Step 2: Add Resend DNS Records
Login to your [Resend Dashboard](https://resend.com/domains) and copy the verification records. Add them to Hostinger:

#### SPF Record
- **Type**: TXT
- **Name**: @ (or leave empty)
- **Value**: `v=spf1 include:_spf.resend.com ~all`
- **TTL**: 3600

#### DKIM Records (3 records)
Resend will provide 3 CNAME records. Add each one:
- **Type**: CNAME
- **Name**: (provided by Resend, e.g., `resend._domainkey`)
- **Value**: (provided by Resend)
- **TTL**: 3600

#### MX Record (Optional - only if using Resend for receiving emails)
- **Type**: MX
- **Name**: @ (or leave empty)
- **Value**: (provided by Resend)
- **Priority**: 10
- **TTL**: 3600

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
