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

// CORS configuration - only allow requests from your domain
const allowedOrigins = [
  'https://united-ffv.com',
  'https://www.united-ffv.com',
  'http://localhost:8080', // For local development
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin || '';

  // SET CORS HEADERS IMMEDIATELY
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // HANDLE PREFLIGHT
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;

    // 1. Honeypot Check
    validateHoneypot(data);

    // 2. Schema Validation
    const validatedData = contactSchema.parse(data);

    // 3. Dispatch Email
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
    console.error('Contact Submission Error:', error);
    return res.status(400).json({
      error: error.message || 'Validation failed',
      details: error instanceof z.ZodError ? error.errors : undefined
    });
  }
}
