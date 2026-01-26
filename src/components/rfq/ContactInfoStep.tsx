import React from "react";
import { FileText, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

interface ContactInfoStepProps {
    t: any;
    values: { name: string; position: string; email: string; phone: string };
    onChange: (field: string, value: string) => void;
}

export const ContactInfoStep: React.FC<ContactInfoStepProps> = ({ t, values, onChange }) => {
    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14 rounded-2xl sm:rounded-3xl lg:rounded-[3.5rem] bg-white border border-black/5 shadow-2xl shadow-black/[0.02] text-start">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-uniteda-emerald/5 flex items-center justify-center text-uniteda-emerald">
                    <FileText size={24} />
                </div>
                <div>
                    <h2 className="text-xl sm:text-2xl font-black text-uniteda-emerald-dark leading-none">{t('rfq.form.sections.contact_info')}</h2>
                    <p className="text-xs font-bold text-muted-foreground/60 uppercase mt-2 tracking-widest font-mono">{t('rfq.form.layers.verification')}</p>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                <div className="space-y-3">
                    <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.name.label')}</Label>
                    <Input id="name" value={values.name} onChange={(e) => onChange('name', e.target.value)} placeholder={t('rfq.form.fields.name.placeholder')} className="h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-[#fcfcfc] border-black/5 px-4 sm:px-6 font-medium" required />
                </div>
                <div className="space-y-3">
                    <Label htmlFor="position" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.position.label')}</Label>
                    <Input id="position" value={values.position} onChange={(e) => onChange('position', e.target.value)} placeholder={t('rfq.form.fields.position.placeholder')} className="h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-[#fcfcfc] border-black/5 px-4 sm:px-6 font-medium" />
                </div>
                <div className="space-y-3">
                    <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.email.label')}</Label>
                    <Input id="email" type="email" value={values.email} onChange={(e) => onChange('email', e.target.value)} placeholder={t('rfq.form.fields.email.placeholder')} className="h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-[#fcfcfc] border-black/5 px-4 sm:px-6 font-medium" required />
                </div>
                <div className="space-y-3">
                    <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.phone.label')}</Label>
                    <Input id="phone" type="tel" value={values.phone} onChange={(e) => onChange('phone', e.target.value)} placeholder={t('rfq.form.fields.phone.placeholder')} className="h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-[#fcfcfc] border-black/5 px-4 sm:px-6 font-medium" required />
                </div>
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-12 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-uniteda-emerald/5 border border-uniteda-emerald/10 flex items-start gap-3 sm:gap-4">
                <ShieldCheck className="text-uniteda-emerald mt-1 shrink-0" size={20} />
                <div className="space-y-2">
                    <p className="text-xs font-bold text-uniteda-emerald-dark leading-relaxed">{t('rfq.form.authorization_note')}</p>
                    <p className="text-[10px] text-muted-foreground/60 font-medium">
                        View our <Link to="/terms" className="text-uniteda-emerald underline underline-offset-2">Terms of Service</Link> and <Link to="/privacy" className="text-uniteda-emerald underline underline-offset-2">Privacy Protocol</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
};
