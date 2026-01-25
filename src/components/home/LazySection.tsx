import React, { Suspense, lazy } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazySectionProps {
    importFunc: () => Promise<{ default: React.ComponentType<any> }>;
    fallback?: React.ReactNode;
}

export const LazySection: React.FC<LazySectionProps> = ({ importFunc, fallback }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '600px 0px', // Load much earlier to prevent layout shifts
    });

    const LazyComponent = React.useMemo(() => lazy(importFunc), [importFunc]);

    return (
        <div ref={ref} className="min-h-[200px]">
            {inView ? (
                <Suspense fallback={fallback || <div className="h-20 animate-pulse bg-muted/20" />}>
                    <LazyComponent />
                </Suspense>
            ) : (
                fallback || <div className="h-20 animate-pulse bg-muted/20" />
            )}
        </div>
    );
};
