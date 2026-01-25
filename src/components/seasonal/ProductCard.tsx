import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SeasonalArc } from "./SeasonalArc";
import { TrendingUp, Calendar } from "lucide-react";

interface SeasonalProduct {
    name: string;
    category: string;
    egypt: number[];
    uae: number[];
    image?: string; // Optional image URL
}

interface ProductCardProps {
    product: SeasonalProduct;
    region: "egypt" | "uae" | "both";
    currentMonth: number;
    onClick: () => void;
}

const getAvailabilityStatusKey = (data: number[], currentMonth: number) => {
    const current = data[currentMonth];
    const nextMonth = data[(currentMonth + 1) % 12];
    const prevMonth = data[(currentMonth - 1 + 12) % 12];

    if (current === 2) {
        // Check if ending soon
        if (nextMonth < 2) return { statusKey: "seasonal.status.ending_soon", color: "text-orange-500", bg: "bg-orange-500/10" };
        return { statusKey: "seasonal.status.peak_now", color: "text-accent", bg: "bg-accent/10" };
    }
    if (current === 1) {
        return { statusKey: "seasonal.status.available", color: "text-blue-500", bg: "bg-blue-500/10" };
    }
    if (nextMonth === 2 || (nextMonth === 1 && data[(currentMonth + 2) % 12] === 2)) {
        return { statusKey: "seasonal.status.coming_soon", color: "text-purple-500", bg: "bg-purple-500/10" };
    }
    return { statusKey: "seasonal.status.off_season", color: "text-muted-foreground", bg: "bg-muted" };
};

export function ProductCard({ product, region, currentMonth, onClick }: ProductCardProps) {
    const { t } = useTranslation('pages');
    // Handle 'both' region by combining Egypt and UAE data
    const egyptData = product.egypt;
    const uaeData = product.uae;

    // For 'both', use the maximum availability from either region
    const data = region === "both"
        ? egyptData.map((val, idx) => Math.max(val, uaeData[idx]))
        : region === "egypt" ? egyptData : uaeData;

    const { statusKey, color, bg } = getAvailabilityStatusKey(data, currentMonth);
    const peakMonths = data.filter(v => v === 2).length;
    const isPeakNow = data[currentMonth] === 2;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.02 }}
            onClick={onClick}
            className={`
        group relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden
        ${isPeakNow ? "bg-accent/5 border-accent/20 shadow-lg shadow-accent/10" : "bg-card border-border hover:border-primary/20"}
      `}
        >
            {/* Status Badge */}
            <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${bg} ${color}`}>
                    {statusKey === "seasonal.status.peak_now" && <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />}
                    {t(statusKey)}
                </span>

                {/* Product Image */}
                {product.image ? (
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md border border-border/50 bg-gradient-to-br from-muted/50 to-background">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                        />
                    </div>
                ) : (
                    // Fallback: Category emoji if no image
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center text-3xl border border-border/50">
                        {product.category === "Fruits" ? "🍎" : product.category === "Vegetables" ? "🥬" : "🌿"}
                    </div>
                )}
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
                    <span>{peakMonths} {t('seasonal.legend.peak')} {peakMonths === 1 ? t('seasonal.modal.peak_months') : t('seasonal.modal.peak_months')}</span>
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
                <span className="text-xs font-medium text-primary">{t('products.catalog.showing')} →</span>
            </div>
        </motion.div>
    );
}
