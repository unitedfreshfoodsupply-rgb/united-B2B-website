import React from "react";
import { Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface BusinessInfoStepProps {
    t: any;
    isRTL: boolean;
    businessTypes: { value: string; label: string }[];
    values: { company: string; businessType: string; country: string; city: string };
    onChange: (field: string, value: string) => void;
}

export const BusinessInfoStep: React.FC<BusinessInfoStepProps> = ({ t, isRTL, businessTypes, values, onChange }) => {
    return (
        <div className="p-10 md:p-14 rounded-[3.5rem] bg-white border border-black/5 shadow-2xl shadow-black/[0.02] text-start">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-uniteda-emerald/5 flex items-center justify-center text-uniteda-emerald">
                    <Building2 size={24} />
                </div>
                <div>
                    <h2 className="text-xl sm:text-2xl font-black text-uniteda-emerald-dark leading-none">{t('rfq.form.sections.business_info')}</h2>
                    <p className="text-xs font-bold text-muted-foreground/60 uppercase mt-2 tracking-widest font-mono">{t('rfq.form.layers.initialization')}</p>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                <div className="space-y-3">
                    <Label htmlFor="company" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.company.label')}</Label>
                    <Input id="company" value={values.company} onChange={(e) => onChange('company', e.target.value)} placeholder={t('rfq.form.fields.company.placeholder')} className="h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-[#fcfcfc] border-black/5 px-4 sm:px-6 font-medium" required />
                </div>
                <div className="space-y-3">
                    <Label htmlFor="businessType" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.business_type.label')}</Label>
                    <Select value={values.businessType} onValueChange={(val) => onChange('businessType', val)} required dir={isRTL ? "rtl" : "ltr"}>
                        <SelectTrigger className="h-16 rounded-2xl bg-[#fcfcfc] border-black/5 px-6 font-medium text-start">
                            <SelectValue placeholder={t('rfq.form.fields.business_type.placeholder')} />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl">
                            {businessTypes.map(type => (
                                <SelectItem key={type.value} value={type.value} className="text-start">{type.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">Operating Region</Label>
                    <div className="h-16 rounded-2xl bg-uniteda-emerald/5 border border-uniteda-emerald/10 px-6 font-bold text-uniteda-emerald flex items-center gap-2">
                        <span>🇪🇬</span> Egypt
                    </div>
                </div>
                <div className="space-y-3">
                    <Label htmlFor="city" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.city.label')}</Label>
                    <Input id="city" value={values.city} onChange={(e) => onChange('city', e.target.value)} placeholder={t('rfq.form.fields.city.placeholder')} className="h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-[#fcfcfc] border-black/5 px-4 sm:px-6 font-medium" required />
                </div>
            </div>
        </div>
    );
};
