# Hostinger Node.js Deployment Guide

To deploy your **uniteda-supply-hub** project to Hostinger as a "Node.js Web App", follow these steps:

## 1. Prepare for Deployment
Before uploading, run the following command on your local machine to generate the production files:
```bash
npm run build
```
This will create:
- `dist/`: Your React frontend.
- `dist-server/server.js`: Your compiled Node.js backend.

## 2. Setting Up on Hostinger hPanel
1.  Log in to your **Hostinger hPanel**.
2.  Navigate to **Websites** -> **Manage** for `united-ffv.com`.
3.  Search for **Node.js** in the sidebar and click on it.
4.  Click **Create Application**.
5.  **Application Details**:
    - **App Directory**: `public_html` (or a subdirectory if you prefer).
    - **App Domain**: `united-ffv.com`.
    - **App Port**: (Can be left default, Hostinger usually manages this).
    - **Startup File**: `dist-server/server.js`.
6.  Click **Create**.

## 3. Upload Files
Use the hPanel **File Manager** or FTP (like FileZilla) to upload all files from your project root to the Hostinger **App Directory** EXCEPT `node_modules`.

**Essential files to upload:**
- `dist/` (folder)
- `dist-server/` (folder)
- `package.json`
- `package-lock.json`
- `.env` (Create this on the server or use Hostinger's Environment Variables section)

## 4. Environment Variables
In the Hostinger Node.js dashboard, locate the **Environment Variables** section and add:
- `RESEND_API_KEY`: `REDACTED_RESEND_API_KEY`
- `NODE_ENV`: `production`

## 5. Install Dependencies on Server
Once files are uploaded:
1.  Go back to the Node.js dashboard in hPanel.
2.  Click **NPM Install** to install dependencies on the server.
3.  Click **Run Script** and select `start` (or just click **Restart Application**).

## 6. DNS Setup for Resend
To ensure your emails aren't marked as spam, go to **DNS / Nameservers** in hPanel and add the records provided by Resend during your domain verification:
- **SPF Record**: Should look like `v=spf1 include:resend.com ~all`.
- **DKIM Records**: Usually 3 CNAME records provided by Resend.
- **MX Record**: If you use Resend for receiving but keep Hostinger for web, ensure these don't conflict.

---
**Note**: If you face issues with "File not found", ensure the `dist/` folder is at the same level as `dist-server/` in your `public_html`.
