import { Resend } from 'resend';

// Shared validation logic and email dispatch for UNITED Supply Hub
// Environment variable RESEND_API_KEY must be set in the deployment platform.

export const resend = new Resend(process.env.RESEND_API_KEY);

export const validateHoneypot = (data: any) => {
    if (data._company_id_verification && data._company_id_verification.length > 0) {
        throw new Error('Spam detected');
    }
};

export const createEmailTemplate = (title: string, data: Record<string, any>) => {
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

export const createPlainTextFallback = (title: string, data: Record<string, any>) => {
    const rows = Object.entries(data)
        .filter(([key]) => !key.startsWith('_'))
        .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
        .join('\n');

    return `UNITED Supply Hub - ${title}\n\n${rows}\n\nGenerated on: ${new Date().toISOString()}`;
};
