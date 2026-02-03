import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAILJS_CONFIG = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

// RFQ Overrides
export const EMAILJS_RFQ_CONFIG = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_RFQ_SERVICE_ID || '',
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_RFQ_TEMPLATE_ID || '',
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_RFQ_PUBLIC_KEY || '',
};

// Email Data Interface
export interface EmailData {
    name: string;           // Sender Name
    email: string;          // Sender Email
    message: string;        // Message payload
    [key: string]: any;     // Common additional fields
}

export interface EmailConfigOverride {
    serviceId?: string;
    templateId?: string;
    publicKey?: string;
}

/**
 * Sends an email using EmailJS
 */
export const sendEmail = async (data: EmailData, config?: EmailConfigOverride) => {
    try {
        const serviceId = config?.serviceId || EMAILJS_CONFIG.SERVICE_ID;
        const templateId = config?.templateId || EMAILJS_CONFIG.TEMPLATE_ID;
        const publicKey = config?.publicKey || EMAILJS_CONFIG.PUBLIC_KEY;

        console.log('--- EmailJS Debug Info ---');
        console.log('Using Service ID:', serviceId);
        console.log('Using Template ID:', templateId);
        console.log('Using Public Key (Start):', publicKey ? `${publicKey.substring(0, 5)}...` : 'MISSING');
        console.log('Payload:', data);

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS Error: Missing configuration keys');
            return { success: false, error: 'Missing configuration' };
        }

        const response = await emailjs.send(
            serviceId,
            templateId,
            data,
            publicKey
        );

        console.log('EmailJS Success Response:', response);
        return { success: true, response };
    } catch (error) {
        console.error('EmailJS Execution Error:', error);
        return { success: false, error };
    }
};
