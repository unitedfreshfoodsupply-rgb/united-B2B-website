import { z } from 'zod';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { resend, validateHoneypot, createEmailTemplate, createPlainTextFallback } from './_utils';

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
    _company_id_verification: z.string().optional(), // Honeypot
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // 1. SET MANDATORY CORS HEADERS IMMEDIATELY
    const origin = req.headers.origin || '';
    const allowedOrigins = [
        'https://united-ffv.com',
        'https://www.united-ffv.com',
        'http://localhost:8080'
    ];

    if (allowedOrigins.includes(origin.replace(/\/$/, ''))) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
        res.setHeader('Access-Control-Allow-Origin', allowedOrigins[0]);
    }

    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

    // 2. Handle Preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

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

        if (error) throw error;

        return res.status(200).json({ success: true, message: 'RFQ submitted successfully' });
    } catch (error: any) {
        console.error('RFQ API Error:', error);
        return res.status(error instanceof z.ZodError ? 400 : 500).json({
            error: error.message || 'Server error',
            details: error instanceof z.ZodError ? error.errors : undefined
        });
    }
}
