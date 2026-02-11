import React from "react";
import { cn } from "@/lib/utils";

interface ProduceImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
    isPriority?: boolean;
    aspectRatio?: "square" | "video" | "wide" | "auto";
    objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
    width?: string | number;
    height?: string | number;
}

/**
 * High-performance image component for Uniteda Supply Hub.
 * Optimized for low-bandwidth networks and high CWV scores.
 */
export const ProduceImage: React.FC<ProduceImageProps> = ({
    src,
    alt,
    className,
    isPriority = false,
    aspectRatio = "auto",
    objectFit = "cover",
    width,
    height,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    // If it's an Unsplash image, we can use their dynamic resizing API
    const isUnsplash = src.includes("images.unsplash.com");

    const getUnsplashUrl = (width: number, quality = 80) => {
        if (!isUnsplash) return src;
        const baseUrl = src.split("?")[0];
        return `${baseUrl}?auto=format&fit=crop&q=${quality}&w=${width}`;
    };

    const generateSrcSet = () => {
        if (!isUnsplash) return undefined;
        return `
      ${getUnsplashUrl(400)} 400w,
      ${getUnsplashUrl(800)} 800w,
      ${getUnsplashUrl(1200)} 1200w,
      ${getUnsplashUrl(1600)} 1600w
    `.trim();
    };

    const ratioClasses = {
        square: "aspect-square",
        video: "aspect-video",
        wide: "aspect-[21/9]",
        auto: "",
    };


    return (
        <div className={cn(
            "overflow-hidden bg-muted/20 relative",
            ratioClasses[aspectRatio],
            className
        )}>
            <img
                src={isUnsplash ? getUnsplashUrl(800) : src}
                srcSet={generateSrcSet()}
                sizes={isUnsplash ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : undefined}
                alt={alt}
                width={width}
                height={height}
                onLoad={() => setIsLoaded(true)}
                className={cn(
                    "w-full h-full transition-opacity duration-500 ease-in-out",
                    objectFit === "cover" ? "object-cover" : "object-contain",
                    isLoaded ? "opacity-100" : "opacity-0"
                )}
                loading={isPriority ? "eager" : "lazy"}
                {...(isPriority ? { fetchpriority: "high" } : { fetchpriority: "auto" })}
                decoding="async"
                {...props}
            />
            {!isLoaded && (
                <div className="absolute inset-0 bg-muted/10" />
            )}
        </div>
    );
};
