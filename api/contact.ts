import { z } from 'zod';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { resend, validateHoneypot, createEmailTemplate, createPlainTextFallback } from './_utils';

const contactSchema = z.object({
    fullName: z.string().min(2),
    entityName: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(3),
    payload: z.string().min(10),
    _company_id_verification: z.string().optional(), // Honeypot
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // 1. SET MANDATORY CORS HEADERS IMMEDIATELY (Serverless First)
    const origin = req.headers.origin || '';
    const allowedOrigins = [
        'https://united-ffv.com',
        'https://www.united-ffv.com',
        'http://localhost:8080'
    ];

    // Strict Origin Matching to allow Credentials if needed
    if (allowedOrigins.includes(origin.replace(/\/$/, ''))) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
        // Fallback for non-matching but allowing preflight to pass if safe
        res.setHeader('Access-Control-Allow-Origin', allowedOrigins[0]);
    }

    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

    // 2. CRITICAL: Handle Preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // 3. ENFORCE POST ONLY
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const data = req.body;

        // Honeypot Check
        validateHoneypot(data);

        // Schema Validation
        const validatedData = contactSchema.parse(data);

        // Dispatch Email via Resend
        const { data: emailResponse, error } = await resend.emails.send({
            from: 'UNITED Support <system@united-ffv.com>',
            to: ['support@united-ffv.com'],
            subject: `Support Inquiry: ${validatedData.subject}`,
            html: createEmailTemplate('Brand Inquiry / Support', validatedData),
            text: createPlainTextFallback('Brand Inquiry / Support', validatedData),
            replyTo: validatedData.email,
        });

        if (error) throw error;

        return res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error: any) {
        console.error('Contact API Error:', error);
        return res.status(error instanceof z.ZodError ? 400 : 500).json({
            error: error.message || 'Server error',
            details: error instanceof z.ZodError ? error.errors : undefined
        });
    }
}
