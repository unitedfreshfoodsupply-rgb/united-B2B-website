import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAILJS_CONFIG = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_95n4on3',
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_p2ms9vb',
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'vPVpMvjlLxSGzy2nw',
};

// Email Data Interface
export interface EmailData {
    name: string;           // Sender Name
    email: string;          // Sender Email
    message: string;        // Message payload
    [key: string]: any;     // Common additional fields
}

/**
 * Sends an email using EmailJS
 */
export const sendEmail = async (data: EmailData) => {
    try {
        console.log('--- EmailJS Debug Info ---');
        console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID);
        console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
        console.log('Public Key (First 5 chars):', EMAILJS_CONFIG.PUBLIC_KEY.substring(0, 5) + '...');
        console.log('Payload:', data);

        const response = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            data,
            EMAILJS_CONFIG.PUBLIC_KEY
        );

        console.log('EmailJS Success Response:', response);
        return { success: true, response };
    } catch (error) {
        console.error('EmailJS Execution Error:', error);
        return { success: false, error };
    }
};
