
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SeasonalArc } from "./SeasonalArc";
import { TrendingUp, Calendar } from "lucide-react";
import { ProduceImage } from "@/components/ui/ProduceImage";
import { cn } from "@/lib/utils";

interface SeasonalProduct {
    id: string;
    key: string;
    name: string;
    category: string;
    egypt: number[];
    image?: string;
    scientificName?: string;
    origin?: string;
    grades?: string[];
}

interface ProductCardProps {
    product: SeasonalProduct;
    region: "egypt";
    currentMonth: number;
    onClick: () => void;
}

const getAvailabilityStatusKey = (data: number[], currentMonth: number) => {
    const current = data[currentMonth];
    const nextMonth = data[(currentMonth + 1) % 12];

    if (current === 2) {
        if (nextMonth < 2) return { statusKey: "seasonal.status.ending_soon", color: "text-orange-600", bg: "bg-orange-50" };
        return { statusKey: "seasonal.status.peak_now", color: "text-accent", bg: "bg-accent/10" };
    }
    if (current === 1) {
        return { statusKey: "seasonal.status.available", color: "text-emerald-600", bg: "bg-emerald-50" };
    }
    if (nextMonth === 2 || (nextMonth === 1 && data[(currentMonth + 2) % 12] === 2)) {
        return { statusKey: "seasonal.status.coming_soon", color: "text-blue-600", bg: "bg-blue-50" };
    }
    return { statusKey: "seasonal.status.off_season", color: "text-muted-foreground", bg: "bg-muted/50" };
};

export function ProductCard({ product, region, currentMonth, onClick }: ProductCardProps) {
    const { t } = useTranslation('pages');
    const data = product.egypt;

    const { statusKey, color, bg } = getAvailabilityStatusKey(data, currentMonth);
    const peakMonths = data.filter(v => v === 2).length;
    const isPeakNow = data[currentMonth] === 2;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.01 }}
            onClick={onClick}
            className={cn(
                "group relative p-5 rounded-[2.5rem] border cursor-pointer transition-all duration-300 overflow-hidden flex flex-col h-full bg-white",
                isPeakNow ? "border-accent/30 shadow-xl shadow-accent/5 ring-1 ring-accent/5" : "border-black/5 hover:border-accent/20 hover:shadow-lg"
            )}
        >
            {/* Header: Status & Image */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col gap-2">
                    <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border", bg, color, "border-current/10")}>
                        {isPeakNow && <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />}
                        {t(statusKey)}
                    </span>

                    {/* Grades (if any) */}
                    <div className="flex flex-wrap gap-1">
                        {product.grades?.slice(0, 2).map((grade) => (
                            <span key={grade} className="px-2 py-0.5 rounded-md bg-muted/30 text-[8px] font-bold uppercase tracking-tighter text-muted-foreground">
                                {grade}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Product Image */}
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-[#fcfcfc] shrink-0">
                    {product.image && product.image.length > 2 ? (
                        <ProduceImage
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-3xl opacity-40 select-none">
                            {product.category.toLowerCase().includes("fruit") ? "🍎" : product.category.toLowerCase().includes("veg") ? "🥬" : "🌿"}
                        </div>
                    )}
                </div>
            </div>

            {/* Product Info */}
            <div className="mb-4 text-start">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1 block opacity-80">
                    {product.scientificName}
                </span>
                <h3 className="font-display font-black text-xl text-uniteda-emerald-dark mb-1 group-hover:text-accent transition-colors leading-tight">
                    {product.name}
                </h3>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-muted-foreground/70">{product.category}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                    <span className="text-[10px] font-black uppercase text-muted-foreground/50">{product.origin || "Egypt"}</span>
                </div>
            </div>

            {/* Seasonal Arc */}
            <div className="mt-auto mb-5">
                <SeasonalArc data={data} currentMonth={currentMonth} compact />
            </div>

            {/* Bottom Stats */}
            <div className="flex items-center justify-between pt-4 border-t border-black/5 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                    <TrendingUp size={12} className="text-accent" />
                    <span>{peakMonths} {t('seasonal.legend.peak')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-muted-foreground/40" />
                    <span>{t('seasonal.controls.region.egypt_ops').split(' ')[0]} Hub</span>
                </div>
            </div>

            {/* Hover Action */}
            <div className="absolute bottom-4 right-4 translate-x-12 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/20">
                    <Calendar size={14} />
                </div>
            </div>
        </motion.div>
    );
}
