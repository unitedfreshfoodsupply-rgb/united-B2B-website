import { motion } from "framer-motion";
import { SeasonalArc } from "./SeasonalArc";
import { TrendingUp, Calendar, Apple, Citrus, Grape, Carrot, Salad, Leaf, Sprout } from "lucide-react";

interface SeasonalProduct {
    name: string;
    category: string;
    egypt: number[];
    uae: number[];
}

interface ProductCardProps {
    product: SeasonalProduct;
    region: "egypt" | "uae" | "both";
    currentMonth: number;
    onClick: () => void;
}

const getAvailabilityStatus = (data: number[], currentMonth: number) => {
    const current = data[currentMonth];
    const nextMonth = data[(currentMonth + 1) % 12];
    const prevMonth = data[(currentMonth - 1 + 12) % 12];

    if (current === 2) {
        // Check if ending soon
        if (nextMonth < 2) return { status: "Ending Soon", color: "text-orange-500", bg: "bg-orange-500/10" };
        return { status: "Peak Now", color: "text-accent", bg: "bg-accent/10" };
    }
    if (current === 1) {
        return { status: "Available", color: "text-blue-500", bg: "bg-blue-500/10" };
    }
    if (nextMonth === 2 || (nextMonth === 1 && data[(currentMonth + 2) % 12] === 2)) {
        return { status: "Coming Soon", color: "text-purple-500", bg: "bg-purple-500/10" };
    }
    return { status: "Off-Season", color: "text-muted-foreground", bg: "bg-muted" };
};

// Product-specific icon mapping with VERIFIED lucide-react icons only
const getProductIcon = (productName: string) => {
    const name = productName.toLowerCase();

    // Specific product mappings - using only icons that exist in lucide-react
    if (name.includes("strawberr")) {
        return {
            Icon: Apple,
            iconColor: "text-red-600",
            bgGradient: "bg-gradient-to-br from-red-100 to-pink-50"
        };
    }
    if (name.includes("mango")) {
        return {
            Icon: Apple,
            iconColor: "text-amber-600",
            bgGradient: "bg-gradient-to-br from-amber-100 to-yellow-50"
        };
    }
    if (name.includes("orange")) {
        return {
            Icon: Citrus,
            iconColor: "text-orange-500",
            bgGradient: "bg-gradient-to-br from-orange-100 to-yellow-50"
        };
    }
    if (name.includes("pomegranate")) {
        return {
            Icon: Grape,
            iconColor: "text-rose-700",
            bgGradient: "bg-gradient-to-br from-rose-100 to-pink-50"
        };
    }
    if (name.includes("tomato")) {
        return {
            Icon: Apple,
            iconColor: "text-red-600",
            bgGradient: "bg-gradient-to-br from-red-100 to-orange-50"
        };
    }
    if (name.includes("pepper")) {
        return {
            Icon: Carrot, // Using Carrot as vegetable icon
            iconColor: "text-emerald-600",
            bgGradient: "bg-gradient-to-br from-emerald-100 to-green-50"
        };
    }
    if (name.includes("asparagus")) {
        return {
            Icon: Sprout,
            iconColor: "text-green-600",
            bgGradient: "bg-gradient-to-br from-green-100 to-emerald-50"
        };
    }
    if (name.includes("basil")) {
        return {
            Icon: Leaf,
            iconColor: "text-green-700",
            bgGradient: "bg-gradient-to-br from-green-100 to-lime-50"
        };
    }

    // Category fallbacks
    return {
        Icon: Apple,
        iconColor: "text-primary",
        bgGradient: "bg-gradient-to-br from-primary/10 to-primary/5"
    };
};

export function ProductCard({ product, region, currentMonth, onClick }: ProductCardProps) {
    // Handle 'both' region by combining Egypt and UAE data
    const egyptData = product.egypt;
    const uaeData = product.uae;

    // For 'both', use the maximum availability from either region
    const data = region === "both"
        ? egyptData.map((val, idx) => Math.max(val, uaeData[idx]))
        : region === "egypt" ? egyptData : uaeData;

    const { status, color, bg } = getAvailabilityStatus(data, currentMonth);
    const peakMonths = data.filter(v => v === 2).length;
    const isPeakNow = data[currentMonth] === 2;

    // Get product-specific icon
    const { Icon: ProductIcon, iconColor, bgGradient } = getProductIcon(product.name);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.02 }}
            onClick={onClick}
            className={`
        group relative p-6 rounded-2xl border cursor-pointer transition-all duration-300
        ${isPeakNow ? "bg-accent/5 border-accent/20 shadow-lg shadow-accent/10" : "bg-card border-border hover:border-primary/20"}
      `}
        >
            {/* Status Badge */}
            <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${bg} ${color}`}>
                    {isPeakNow && <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />}
                    {status}
                </span>

                {/* Product Icon with gradient background */}
                <div className={`w-12 h-12 rounded-xl ${bgGradient} flex items-center justify-center shadow-sm border border-border/50`}>
                    <ProductIcon className={`w-6 h-6 ${iconColor}`} strokeWidth={2.5} />
                </div>
            </div>

            {/* Product Info */}
            <div className="mb-4">
                <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">{product.category}</p>
            </div>

            {/* Seasonal Arc */}
            <div className="mb-4">
                <SeasonalArc data={data} currentMonth={currentMonth} compact />
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                    <TrendingUp size={12} />
                    <span>{peakMonths} peak {peakMonths === 1 ? "month" : "months"}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {region === "both" ? (
                        <div className="flex items-center gap-1">
                            <span>🇪🇬</span>
                            <span>🇦🇪</span>
                        </div>
                    ) : (
                        <span className="capitalize">{region}</span>
                    )}
                </div>
            </div>

            {/* Hover indicator */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-medium text-primary">View Details →</span>
            </div>
        </motion.div>
    );
}
