import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, TrendingUp, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SeasonalProduct {
    name: string;
    category: string;
    egypt: number[];
    uae: number[];
}

interface ProductDetailModalProps {
    product: SeasonalProduct | null;
    isOpen: boolean;
    onClose: () => void;
    currentMonth: number;
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const getAvailabilityLabel = (value: number) => {
    if (value === 2) return "Peak";
    if (value === 1) return "Available";
    return "Off-season";
};

const getAvailabilityColor = (value: number) => {
    if (value === 2) return "bg-accent text-accent-foreground";
    if (value === 1) return "bg-accent/40 text-foreground";
    return "bg-muted text-muted-foreground";
};

const getBestMonths = (data: number[]) => {
    return data
        .map((value, index) => ({ month: months[index], value, index }))
        .filter(item => item.value === 2)
        .map(item => item.month);
};

export function ProductDetailModal({ product, isOpen, onClose, currentMonth }: ProductDetailModalProps) {
    if (!product) return null;

    const egyptBest = getBestMonths(product.egypt);
    const uaeBest = getBestMonths(product.uae);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-display font-bold flex items-center gap-3">
                        <span className="text-3xl">
                            {product.category === "Fruits" ? "🍎" : product.category === "Vegetables" ? "🥬" : "🌿"}
                        </span>
                        {product.name}
                    </DialogTitle>
                    <p className="text-muted-foreground">{product.category}</p>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 rounded-xl bg-muted/50">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                                <TrendingUp size={14} />
                                <span>Egypt Peak</span>
                            </div>
                            <p className="font-bold text-foreground">{egyptBest.length} months</p>
                        </div>
                        <div className="p-4 rounded-xl bg-muted/50">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                                <TrendingUp size={14} />
                                <span>UAE Peak</span>
                            </div>
                            <p className="font-bold text-foreground">{uaeBest.length} months</p>
                        </div>
                        <div className="p-4 rounded-xl bg-muted/50">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                                <Calendar size={14} />
                                <span>Current Status</span>
                            </div>
                            <p className="font-bold text-foreground">
                                {product.egypt[currentMonth] === 2 || product.uae[currentMonth] === 2 ? "Peak" :
                                    product.egypt[currentMonth] === 1 || product.uae[currentMonth] === 1 ? "Available" : "Off-season"}
                            </p>
                        </div>
                        <div className="p-4 rounded-xl bg-muted/50">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                                <MapPin size={14} />
                                <span>Regions</span>
                            </div>
                            <p className="font-bold text-foreground">Egypt & UAE</p>
                        </div>
                    </div>

                    {/* Best Ordering Windows */}
                    <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
                        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-accent" />
                            Best Ordering Windows
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground mb-2">🇪🇬 Egypt</p>
                                <p className="font-bold text-foreground">
                                    {egyptBest.length > 0 ? egyptBest.join(", ") : "Limited availability"}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground mb-2">🇦🇪 UAE</p>
                                <p className="font-bold text-foreground">
                                    {uaeBest.length > 0 ? uaeBest.join(", ") : "Limited availability"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Monthly Breakdown */}
                    <div>
                        <h3 className="font-bold text-foreground mb-4">Monthly Availability</h3>

                        {/* Egypt */}
                        <div className="mb-4">
                            <p className="text-sm font-medium text-muted-foreground mb-2">🇪🇬 Egypt</p>
                            <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
                                {product.egypt.map((value, index) => (
                                    <div key={index} className="text-center">
                                        <div
                                            className={`
                        w-full aspect-square rounded-lg flex items-center justify-center text-xs font-bold mb-1
                        ${getAvailabilityColor(value)}
                        ${index === currentMonth ? "ring-2 ring-accent ring-offset-2" : ""}
                      `}
                                        >
                                            {months[index].charAt(0)}
                                        </div>
                                        <span className="text-[10px] text-muted-foreground">{getAvailabilityLabel(value)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* UAE */}
                        <div>
                            <p className="text-sm font-medium text-muted-foreground mb-2">🇦🇪 UAE</p>
                            <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
                                {product.uae.map((value, index) => (
                                    <div key={index} className="text-center">
                                        <div
                                            className={`
                        w-full aspect-square rounded-lg flex items-center justify-center text-xs font-bold mb-1
                        ${getAvailabilityColor(value)}
                        ${index === currentMonth ? "ring-2 ring-accent ring-offset-2" : ""}
                      `}
                                        >
                                            {months[index].charAt(0)}
                                        </div>
                                        <span className="text-[10px] text-muted-foreground">{getAvailabilityLabel(value)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                        <Button variant="outline" onClick={onClose} className="flex-1">
                            Close
                        </Button>
                        <Button asChild className="flex-1">
                            <Link to="/rfq" className="flex items-center justify-center gap-2">
                                Request Quote
                                <ArrowRight size={16} />
                            </Link>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
