import { useState } from 'react';
import { toast } from 'sonner';
import { useUnifiedTranslation } from './use-unified-translation';
import { sendEmail as sendEmailJS, EmailData } from '@/lib/email';

interface EmailOptions {
    onSuccess?: () => void;
    // We keep endpoint for compatibility but it's not used by EmailJS directly
    endpoint?: string;
}

export const useResend = () => {
    const { t } = useUnifiedTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const sendEmail = async (options: EmailOptions, data: EmailData) => {
        setIsSubmitting(true);
        try {
            // 1. Honeypot check for spam
            if (data._company_id_verification) {
                console.warn('Spam detected via honeypot');
                setSubmitted(true); // Pretend success to the bot
                return true;
            }

            // 2. Send via EmailJS
            const result = await sendEmailJS(data);

            if (!result.success) {
                throw new Error('Failed to send message via EmailJS');
            }

            setSubmitted(true);
            toast.success(t('contact.form.success_message') || 'Sent successfully!');
            options.onSuccess?.();
            return true;
        } catch (error: any) {
            console.error('Email Error:', error);
            toast.error(error.message || t('contact.form.error_message') || 'Failed to send message.');
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetStatus = () => {
        setSubmitted(false);
        setIsSubmitting(false);
    };

    return {
        sendEmail,
        isSubmitting,
        submitted,
        resetStatus,
    };
};
