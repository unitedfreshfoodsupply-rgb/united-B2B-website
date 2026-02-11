import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, TrendingUp, MapPin, ArrowRight, ShieldCheck, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { ProduceImage } from "@/components/ui/ProduceImage";
import { cn } from "@/lib/utils";

interface Product {
    id: string;
    key: string;
    category: string;
    origin: string;
    season: string;
    image: string;
    grades: string[];
    price: string;
}

interface ProductCatalogModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
    t: (key: string, params?: any) => string;
}

export function ProductCatalogModal({ product, isOpen, onClose, t }: ProductCatalogModalProps) {
    if (!product) return null;

    const productName = t(`products.catalog.items.${product.key}.name`);
    const scientificName = t(`products.catalog.items.${product.key}.scientific_name`);
    const origin = t(`products.catalog.items.${product.key}.origin`);
    const seasonType = product.season;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-white rounded-[2rem] sm:rounded-[3.5rem] max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl [&>button:last-child]:hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white hover:bg-uniteda-emerald hover:border-uniteda-emerald transition-all duration-300 shadow-xl lg:bg-black/5 lg:text-muted-foreground lg:border-black/10 lg:hover:bg-uniteda-emerald lg:hover:text-white lg:hover:border-uniteda-emerald"
                >
                    <X size={20} className="drop-shadow-sm" />
                </button>

                <div className="flex flex-col lg:flex-row items-stretch min-h-full">
                    {/* Visual Section */}
                    <div className="relative w-full lg:w-[42%] bg-slate-50 h-[320px] sm:h-[450px] lg:h-auto flex-shrink-0 flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-100">
                        {product.image.length > 2 ? (
                            <div className="absolute inset-0">
                                <ProduceImage
                                    src={product.image}
                                    alt={productName}
                                    className="w-full h-full object-cover lg:scale-110 transition-transform duration-700 hover:scale-125"
                                    isPriority={true}
                                />
                            </div>
                        ) : (
                            <div className="text-[10rem] sm:text-[12rem] drop-shadow-2xl select-none animate-float">
                                {product.image}
                            </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute top-6 left-6">
                            <span className={cn(
                                "px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] backdrop-blur-md border shadow-lg",
                                seasonType === "peak" ? "bg-emerald-500 text-white border-emerald-400" :
                                    seasonType === "starting" ? "bg-amber-500 text-white border-amber-400" :
                                        "bg-slate-600 text-white border-slate-500"
                            )}>
                                {t(`products.filters.season.${seasonType}`)}
                            </span>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="flex-1 p-6 sm:p-10 lg:p-14 flex flex-col bg-white min-h-0">
                        <DialogHeader className="space-y-2 mb-8 sm:mb-10 text-start">
                            <span className="text-[10px] sm:text-xs font-black text-uniteda-emerald uppercase tracking-[0.25em] opacity-70 break-words leading-tight">
                                {scientificName}
                            </span>
                            <DialogTitle className="text-2xl sm:text-4xl lg:text-5xl font-black text-uniteda-emerald-dark uppercase leading-[0.95] tracking-tighter break-words hyphens-auto">
                                {productName}
                            </DialogTitle>
                        </DialogHeader>

                        <div className="space-y-6 sm:space-y-8 flex-1 overflow-visible">
                            {/* Stats Grid - Robust scaling */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/60 flex flex-col gap-1 transition-all hover:bg-slate-100/80 group/card">
                                    <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-50 group-hover/card:opacity-80 transition-opacity text-start">
                                        <MapPin size={14} className="text-uniteda-emerald" />
                                        {t('products.catalog.items.imp_1.origin')}
                                    </div>
                                    <p className="font-black text-uniteda-emerald-dark text-base sm:text-lg text-start truncate">{origin}</p>
                                </div>
                                <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/60 flex flex-col gap-1 transition-all hover:bg-slate-100/80 group/card text-start">
                                    <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-50 group-hover/card:opacity-80 transition-opacity">
                                        <TrendingUp size={14} className="text-uniteda-gold" />
                                        Index Pricing
                                    </div>
                                    <p className="font-black text-uniteda-emerald-dark text-base sm:text-lg truncate">
                                        {product.price === "Market Price" ? t('products.catalog.market_price') : product.price}
                                    </p>
                                </div>
                            </div>

                            {/* Details List - Large content safe */}
                            <div className="space-y-4 sm:space-y-5">
                                <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-emerald-50/40 border border-emerald-100/60 transition-all hover:bg-emerald-50/70 shadow-sm">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-uniteda-emerald/10 flex items-center justify-center text-uniteda-emerald shrink-0">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div className="text-start flex-1 min-w-0">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-uniteda-emerald/60 mb-2">Quality Standards</p>
                                        <div className="flex flex-wrap gap-2">
                                            {product.grades.map((grade) => (
                                                <span
                                                    key={grade}
                                                    className="px-3 py-1 bg-white border border-uniteda-emerald/20 rounded-full text-[10px] sm:text-xs font-black text-uniteda-emerald-dark uppercase tracking-wider shadow-sm transition-transform hover:scale-105"
                                                >
                                                    {t(`products.catalog.grades.${grade}`)}
                                                </span>
                                            ))}
                                            <span className="px-3 py-1 bg-uniteda-emerald/5 border border-uniteda-emerald/10 rounded-full text-[10px] sm:text-xs font-black text-uniteda-emerald uppercase tracking-wider">Certified</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-slate-50/80 border border-slate-200/60 transition-all hover:bg-slate-100 shadow-sm">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black/5 flex items-center justify-center text-muted-foreground shrink-0">
                                        <Info size={24} />
                                    </div>
                                    <div className="text-start flex-1 min-w-0">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-1">Fulfillment Network</p>
                                        <p className="text-sm sm:text-base font-bold text-muted-foreground/80 leading-snug">Global logistics distribution managed via Obour Operations Hub</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-12">
                            <Button className="flex-[2] h-14 sm:h-20 rounded-2xl sm:rounded-[1.25rem] bg-uniteda-emerald hover:bg-uniteda-emerald-dark text-white font-black uppercase tracking-[0.15em] text-sm sm:text-base group shadow-xl shadow-uniteda-emerald/20 transition-all hover:scale-[1.02] active:scale-[0.98]" asChild>
                                <Link to="/rfq">
                                    {t('seasonal.modal.request_quote')}
                                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                onClick={onClose}
                                className="flex-1 h-14 sm:h-20 rounded-2xl sm:rounded-[1.25rem] border-slate-200 text-slate-500 font-bold uppercase tracking-widest text-[10px] sm:text-sm hover:bg-slate-50 transition-all active:scale-[0.98]"
                            >
                                {t('seasonal.modal.close')}
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
