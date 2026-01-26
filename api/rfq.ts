import { z } from 'zod';
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

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;

    // 1. Honeypot Check
    validateHoneypot(data);

    // 2. Schema Validation
    const validatedData = rfqSchema.parse(data);

    // 3. Dispatch Email
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
    console.error('RFQ Submission Error:', error);
    return res.status(400).json({
      error: error.message || 'Validation failed',
      details: error instanceof z.ZodError ? error.errors : undefined
    });
  }
}
