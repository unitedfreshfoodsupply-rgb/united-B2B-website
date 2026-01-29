# Vercel Dashboard Deployment - Step by Step

Follow these steps to deploy your API to Vercel using the Dashboard:

## Step 1: Push Your Code to GitHub

First, ensure your code is on GitHub. If you haven't already:

```bash
# Initialize git if needed
git init

# Add all files
git add .

# Commit
git commit -m "Prepare for Vercel deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/uniteda-supply-hub.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

1. **Go to Vercel**: Open https://vercel.com/new in your browser
2. **Sign Up/Login**: Use GitHub, GitLab, or Bitbucket
3. **Import Repository**:
   - Click "Import Git Repository"
   - Select your `uniteda-supply-hub` repository
   - Click "Import"

4. **Configure Project**:
   - **Project Name**: `uniteda-supply-hub-api` (or your choice)
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

5. **Add Environment Variables** (IMPORTANT):
   - Click "Environment Variables"
   - Add:
     - **Name**: `RESEND_API_KEY`
     - **Value**: `REDACTED_RESEND_API_KEY`
     - **Environment**: Select all (Production, Preview, Development)
   - Click "Add"

6. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete (usually 1-2 minutes)

## Step 3: Get Your API URL

After deployment completes:
1. You'll see a success screen with your deployment URL
2. It will look like: `https://uniteda-supply-hub-api.vercel.app`
3. **COPY THIS URL** - you'll need it for the next step

Your API endpoints will be:
- `https://your-project.vercel.app/api/contact`
- `https://your-project.vercel.app/api/rfq`

## Step 4: Test Your API

Open your browser and visit:
```
https://your-project.vercel.app/api/contact
```

You should see:
```json
{"error": "Method not allowed"}
```

This is correct! It means the API is working (it only accepts POST requests).

---

## Next: Configure Frontend

Once you have your Vercel URL, proceed to create `.env.production`:

```bash
echo "VITE_API_BASE_URL=https://your-actual-vercel-url.vercel.app" > .env.production
```

Then build your frontend:
```bash
npm run build
```

The `dist/` folder will be ready to upload to Hostinger.
