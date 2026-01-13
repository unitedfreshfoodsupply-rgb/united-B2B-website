import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SeasonalProduct {
    name: string;
    category: string;
    egypt: number[];
    uae: number[];
}

interface InSeasonNowProps {
    products: SeasonalProduct[];
    region: "egypt" | "uae" | "both";
    currentMonth: number;
}

const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
        case "fruits":
            return "🍎";
        case "vegetables":
            return "🥬";
        case "herbs":
            return "🌿";
        default:
            return "🌱";
    }
};

export function InSeasonNow({ products, region, currentMonth }: InSeasonNowProps) {
    // Get products at peak (value = 2) for current month
    const peakProducts = products.filter(product => {
        if (region === "both") {
            return product.egypt[currentMonth] === 2 || product.uae[currentMonth] === 2;
        }
        return product[region][currentMonth] === 2;
    }).slice(0, 4); // Limit to 4 products

    if (peakProducts.length === 0) {
        return null;
    }

    return (
        <section className="mb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
            >
                <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <h2 className="font-display text-2xl font-bold text-foreground">
                        In Season Now
                    </h2>
                </div>
                <p className="text-muted-foreground">
                    Peak availability this month - order now for best quality and pricing
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {peakProducts.map((product, index) => {
                    const egyptPeak = product.egypt[currentMonth] === 2;
                    const uaePeak = product.uae[currentMonth] === 2;

                    return (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300"
                        >
                            {/* Pulse indicator */}
                            <div className="absolute top-3 right-3">
                                <div className="relative">
                                    <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-accent animate-ping opacity-75" />
                                </div>
                            </div>

                            {/* Icon */}
                            <div className="text-4xl mb-3">{getCategoryIcon(product.category)}</div>

                            {/* Product name */}
                            <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                                {product.name}
                            </h3>

                            {/* Category */}
                            <p className="text-sm text-muted-foreground mb-3">{product.category}</p>

                            {/* Region badges */}
                            <div className="flex gap-2 mb-4">
                                {egyptPeak && (
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent/20 text-accent text-xs font-medium">
                                        🇪🇬 Egypt
                                    </span>
                                )}
                                {uaePeak && (
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent/20 text-accent text-xs font-medium">
                                        🇦🇪 UAE
                                    </span>
                                )}
                            </div>

                            {/* Quick action */}
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-full text-accent hover:text-accent hover:bg-accent/10 group/btn"
                                asChild
                            >
                                <Link to="/rfq" className="flex items-center justify-center gap-2">
                                    Quick Quote
                                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
