import React, { Suspense, lazy } from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionSkeleton } from '@/components/ui/SectionSkeleton';

interface LazySectionProps {
    importFunc: () => Promise<{ default: React.ComponentType<any> }>;
    fallback?: React.ReactNode;
    minHeight?: string;
    props?: any;
}

export const LazySection: React.FC<LazySectionProps> = ({
    importFunc,
    fallback,
    minHeight = "400px",
    props = {}
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '600px 0px', // Load much earlier to prevent layout shifts
    });

    const LazyComponent = React.useMemo(() => lazy(importFunc), [importFunc]);

    return (
        <div ref={ref} style={{ minHeight }}>
            {inView ? (
                <Suspense fallback={fallback || <SectionSkeleton height={minHeight} />}>
                    <LazyComponent {...props} />
                </Suspense>
            ) : (
                fallback || <SectionSkeleton height={minHeight} />
            )}
        </div>
    );
};
