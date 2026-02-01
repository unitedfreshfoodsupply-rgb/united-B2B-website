# Hostinger PHP Bridge Guide (Resend)

This guide explains how to use the PHP bridge on Hostinger to send emails via Resend without needing Vercel.

## 1. Directory Structure
All PHP files are located in the `public/api/` directory. When you run `npm run build`, Vite will copy this directory to `dist/api/`.

- `_resend_helper.php`: Shared logic for CORS and Resend API calls.
- `contact.php`: Entry point for Contact form.
- `rfq.php`: Entry point for RFQ form.

## 2. Configuration
The `RESEND_API_KEY` is hardcoded inside `contact.php` and `rfq.php` for convenience on Hostinger (which doesn't always support easy `.env` access in base PHP).

To update the key:
1.  Open `public/api/contact.php` and `public/api/rfq.php`.
2.  Update the `$RESEND_API_KEY` variable.

## 3. How it Works
1.  Frontend (React) sends a request to `/api/contact.php`.
2.  The PHP script validates the request and headers.
3.  PHP uses `curl` to talk to `https://api.resend.com/emails`.
4.  Resend sends the email and returns success to PHP.
5.  PHP returns success to React.

## 4. Troubleshooting
- **CORS Errors**: Check `_resend_helper.php` to ensure `allowed_origins` includes your exact URL.
- **404 Errors**: Ensure the `api` folder is inside your `public_html` on Hostinger.
- **500 Errors**: Check the PHP error logs in Hostinger's HPanel.
