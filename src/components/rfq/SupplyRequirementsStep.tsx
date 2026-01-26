import React from "react";
import { Truck } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface SupplyRequirementsStepProps {
    t: any;
    isRTL: boolean;
    productCategories: string[];
    selectedCategories: string[];
    handleCategoryToggle: (category: string) => void;
    volumeRanges: { value: string, label: string }[];
    frequencies: { value: string, label: string }[];
    values: { volume: string; frequency: string; requirements: string };
    onChange: (field: string, value: string) => void;
}

export const SupplyRequirementsStep: React.FC<SupplyRequirementsStepProps> = ({
    t,
    isRTL,
    productCategories,
    selectedCategories,
    handleCategoryToggle,
    volumeRanges,
    frequencies,
    values,
    onChange
}) => {
    return (
        <div className="p-10 md:p-14 rounded-[3.5rem] bg-white border border-black/5 shadow-2xl shadow-black/[0.02] text-start">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-uniteda-emerald/5 flex items-center justify-center text-uniteda-emerald">
                    <Truck size={24} />
                </div>
                <div>
                    <h2 className="text-xl sm:text-2xl font-black text-uniteda-emerald-dark leading-none">{t('rfq.form.sections.supply_req')}</h2>
                    <p className="text-xs font-bold text-muted-foreground/60 uppercase mt-2 tracking-widest font-mono">{t('rfq.form.layers.operational')}</p>
                </div>
            </div>

            <div className="space-y-8 sm:space-y-10">
                <div className="space-y-6">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.categories.label')}</Label>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {productCategories.map(category => (
                            <label
                                key={category}
                                className={cn(
                                    "flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all cursor-pointer",
                                    selectedCategories.includes(category)
                                        ? "bg-uniteda-emerald border-uniteda-emerald text-white"
                                        : "bg-[#fcfcfc] border-black/5 hover:border-uniteda-emerald/30"
                                )}
                            >
                                <Checkbox
                                    checked={selectedCategories.includes(category)}
                                    onCheckedChange={() => handleCategoryToggle(category)}
                                    className={cn(
                                        "w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg border-2 transition-all",
                                        selectedCategories.includes(category)
                                            ? "bg-white border-white text-uniteda-emerald data-[state=checked]:bg-white data-[state=checked]:text-uniteda-emerald"
                                            : "border-black/10 bg-white"
                                    )}
                                />
                                <span className="font-bold text-base sm:text-lg select-none">{category}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-6 sm:gap-y-8">
                    <div className="space-y-3">
                        <Label htmlFor="volume" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.volume.label')}</Label>
                        <Select value={values.volume} onValueChange={(val) => onChange('volume', val)} required dir={isRTL ? "rtl" : "ltr"}>
                            <SelectTrigger className="h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-[#fcfcfc] border-black/5 px-4 sm:px-6 font-medium text-start">
                                <SelectValue placeholder={t('rfq.form.fields.volume.placeholder')} />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl">
                                {volumeRanges.map(vol => (
                                    <SelectItem key={vol.value} value={vol.value} className="text-start">{vol.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-3">
                        <Label htmlFor="frequency" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.frequency.label')}</Label>
                        <Select value={values.frequency} onValueChange={(val) => onChange('frequency', val)} required dir={isRTL ? "rtl" : "ltr"}>
                            <SelectTrigger className="h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-[#fcfcfc] border-black/5 px-4 sm:px-6 font-medium text-start">
                                <SelectValue placeholder={t('rfq.form.fields.frequency.placeholder')} />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl">
                                {frequencies.map(freq => (
                                    <SelectItem key={freq.value} value={freq.value} className="text-start">{freq.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="space-y-3">
                    <Label htmlFor="requirements" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.requirements.label')}</Label>
                    <Textarea id="requirements" value={values.requirements} onChange={(e) => onChange('requirements', e.target.value)} placeholder={t('rfq.form.fields.requirements.placeholder')} rows={4} className="rounded-2xl sm:rounded-3xl bg-[#fcfcfc] border-black/5 p-4 sm:p-6 font-medium resize-none" />
                </div>
            </div>
        </div>
    );
};
