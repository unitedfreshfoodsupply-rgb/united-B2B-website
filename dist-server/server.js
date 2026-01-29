import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';
import { z } from 'zod';
import dotenv from 'dotenv';
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;
// Resend Configuration
const resend = new Resend(process.env.RESEND_API_KEY);
// Middleware
app.use(cors());
app.use(express.json());
// --- UTILS ---
const validateHoneypot = (data) => {
    if (data._company_id_verification && data._company_id_verification.length > 0) {
        throw new Error('Spam detected');
    }
};
const createEmailTemplate = (title, data) => {
    const rows = Object.entries(data)
        .filter(([key]) => !key.startsWith('_'))
        .map(([key, value]) => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">${key.replace(/([A-Z])/g, ' $1').toUpperCase()}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${value}</td>
      </tr>
    `).join('');
    return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
      <div style="background: #064e3b; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 20px;">UNITED Supply Hub - ${title}</h1>
      </div>
      <div style="padding: 20px;">
        <table style="width: 100%; border-collapse: collapse;">
          ${rows}
        </table>
      </div>
      <div style="background: #f8f8f8; color: #666; padding: 15px; text-align: center; font-size: 12px;">
        This request was generated from the Uniteda official platform. 
        <br/>© ${new Date().getFullYear()} UNITED Agricultural Supply. Cairo, Egypt.
      </div>
    </div>
  `;
};
const createPlainTextFallback = (title, data) => {
    const rows = Object.entries(data)
        .filter(([key]) => !key.startsWith('_'))
        .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
        .join('\n');
    return `UNITED Supply Hub - ${title}\n\n${rows}\n\nGenerated on: ${new Date().toISOString()}`;
};
// --- ROUTES ---
// Contact API
const contactSchema = z.object({
    fullName: z.string().min(2),
    entityName: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(3),
    payload: z.string().min(10),
    _company_id_verification: z.string().optional(),
});
app.post('/api/contact', async (req, res) => {
    try {
        const data = req.body;
        validateHoneypot(data);
        const validatedData = contactSchema.parse(data);
        const { data: emailResponse, error } = await resend.emails.send({
            from: 'UNITED Support <system@united-ffv.com>',
            to: ['support@united-ffv.com'],
            subject: `Support Inquiry: ${validatedData.subject}`,
            html: createEmailTemplate('Brand Inquiry / Support', validatedData),
            text: createPlainTextFallback('Brand Inquiry / Support', validatedData),
            replyTo: validatedData.email,
        });
        if (error)
            throw error;
        res.status(200).json({ success: true, message: 'Message sent successfully' });
    }
    catch (error) {
        console.error('Contact Submission Error:', error);
        res.status(400).json({
            error: error.message || 'Validation failed',
            details: error instanceof z.ZodError ? error.errors : undefined
        });
    }
});
// RFQ API
const rfqSchema = z.object({
    company: z.string().min(2),
    businessType: z.string().min(2),
    country: z.string().optional(),
    city: z.string().min(2),
    volume: z.string().min(2),
    frequency: z.string().min(2),
    requirements: z.string().optional(),
    name: z.string().min(2),
    position: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(8),
    categories: z.array(z.string()).optional(),
    _company_id_verification: z.string().optional(),
});
app.post('/api/rfq', async (req, res) => {
    try {
        const data = req.body;
        validateHoneypot(data);
        const validatedData = rfqSchema.parse(data);
        const { data: emailResponse, error } = await resend.emails.send({
            from: 'UNITED Supply HUB <system@united-ffv.com>',
            to: ['sales-team@united-ffv.com'],
            subject: `New RFQ: ${validatedData.company}`,
            html: createEmailTemplate('New Request For Quotation', validatedData),
            text: createPlainTextFallback('New Request For Quotation', validatedData),
            replyTo: validatedData.email,
        });
        if (error)
            throw error;
        res.status(200).json({ success: true, message: 'RFQ submitted successfully' });
    }
    catch (error) {
        console.error('RFQ Submission Error:', error);
        res.status(400).json({
            error: error.message || 'Validation failed',
            details: error instanceof z.ZodError ? error.errors : undefined
        });
    }
});
// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));
// Serve index.html for any remaining routes (client-side routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
