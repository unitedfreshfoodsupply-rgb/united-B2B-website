import { useState } from 'react';
import { toast } from 'sonner';
import { useUnifiedTranslation } from './use-unified-translation';

interface ResendOptions {
    endpoint: string;
    onSuccess?: () => void;
}

export const useResend = () => {
    const { t } = useUnifiedTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const sendEmail = async (options: ResendOptions, data: any) => {
        setIsSubmitting(true);
        try {
            // Get API base URL from environment variable
            // In production, this should be your Vercel deployment URL
            const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
            const apiUrl = apiBaseUrl ? `${apiBaseUrl}${options.endpoint}` : options.endpoint;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to send message');
            }

            setSubmitted(true);
            toast.success(t('contact.form.success_message') || 'Sent successfully!');
            options.onSuccess?.();
            return true;
        } catch (error: any) {
            console.error('Resend Error:', error);
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
