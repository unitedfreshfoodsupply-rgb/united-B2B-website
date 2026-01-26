import React from "react";
import { cn } from "@/lib/utils";

interface SectionSkeletonProps {
    className?: string;
    height?: string;
}

export const SectionSkeleton: React.FC<SectionSkeletonProps> = ({
    className,
    height = "600px"
}) => {
    return (
        <div
            className={cn(
                "w-full animate-pulse bg-muted/10 flex flex-col items-center justify-center gap-8 px-8",
                className
            )}
            style={{ height }}
        >
            {/* Header Skeleton */}
            <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
                <div className="h-4 w-32 bg-muted/20 rounded-full" />
                <div className="h-12 w-full bg-muted/20 rounded-2xl" />
                <div className="h-6 w-3/4 bg-muted/20 rounded-xl" />
            </div>

            {/* Content Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-64 bg-muted/20 rounded-[2.5rem]" />
                ))}
            </div>
        </div>
    );
};
