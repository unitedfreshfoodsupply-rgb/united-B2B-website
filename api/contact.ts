import { z } from 'zod';
import { resend, validateHoneypot, createEmailTemplate, createPlainTextFallback } from './_utils';

const contactSchema = z.object({
  fullName: z.string().min(2),
  entityName: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  payload: z.string().min(10),
  _company_id_verification: z.string().optional(), // Honeypot
});

export default async function handler(req: any, res: any) {
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
