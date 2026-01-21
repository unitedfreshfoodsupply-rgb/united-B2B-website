import React, { useState, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Building2, CheckCircle2, FileText, Clock, Truck, ShieldCheck, Globe2, Leaf, Box } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import rfqHero from "@/assets/rfq-hero.png";

export default function RFQPage() {
  const { t, i18n } = useTranslation('pages');
  const isRTL = i18n.dir() === 'rtl';
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for forward, -1 for backward

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mapped options - Stabilized with useMemo
  const businessTypes = useMemo(() => [
    { value: "hotel", label: t('rfq.form.options.business_types.hotel') },
    { value: "restaurant", label: t('rfq.form.options.business_types.restaurant') },
    { value: "airline", label: t('rfq.form.options.business_types.airline') },
    { value: "supermarket", label: t('rfq.form.options.business_types.supermarket') },
    { value: "distributor", label: t('rfq.form.options.business_types.distributor') },
    { value: "processor", label: t('rfq.form.options.business_types.processor') },
    { value: "other", label: t('rfq.form.options.business_types.other') },
  ], [t]);

  const volumeRanges = useMemo(() => [
    { value: "small", label: t('rfq.form.options.volume_ranges.small') },
    { value: "medium", label: t('rfq.form.options.volume_ranges.medium') },
    { value: "large", label: t('rfq.form.options.volume_ranges.large') },
    { value: "enterprise", label: t('rfq.form.options.volume_ranges.enterprise') },
  ], [t]);

  const frequencies = useMemo(() => [
    { value: "daily", label: t('rfq.form.options.frequencies.daily') },
    { value: "weekly-2", label: t('rfq.form.options.frequencies.weekly_2') },
    { value: "weekly", label: t('rfq.form.options.frequencies.weekly') },
    { value: "biweekly", label: t('rfq.form.options.frequencies.biweekly') },
    { value: "monthly", label: t('rfq.form.options.frequencies.monthly') },
  ], [t]);

  const productCategories = useMemo(() => [
    t('products.catalog.categories.fruits'),
    t('products.catalog.categories.vegetables'),
    t('products.catalog.categories.herbs'),
    t('products.catalog.categories.microgreens'),
    t('products.catalog.categories.exotic'),
    t('products.catalog.categories.specialty'),
  ], [t]);

  const handleCategoryToggle = useCallback((category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  }, []);

  const nextStep = () => {
    setDirection(1);
    setCurrentStep(prev => Math.min(prev + 1, 2));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep(prev => Math.max(prev - 1, 0));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 2) {
      nextStep();
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success(t('rfq.form.success.title'), {
      description: t('rfq.form.success.description'),
    });
    setIsSubmitting(false);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? (isRTL ? -100 : 100) : (isRTL ? 100 : -100),
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? (isRTL ? -100 : 100) : (isRTL ? 100 : -100),
      opacity: 0,
    }),
  };

  return (
    <Layout>
      {/* Premium Hero */}
      <section className="relative pt-32 pb-0 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto w-[1000px] h-[1000px] bg-uniteda-emerald/10 rounded-full blur-[180px] -mr-96 rtl:-ml-96 rtl:-mr-0 -mt-96 pointer-events-none" />

        <div className="container-wide relative z-10 lg:pb-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="text-start">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-uniteda-gold/10 border border-uniteda-gold/20 text-uniteda-emerald-dark text-[11px] font-black uppercase tracking-[0.2em]">
                    <ShieldCheck size={14} className="text-uniteda-emerald" />
                    {t('rfq.header.badge')}
                  </span>
                </motion.div>

                <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-uniteda-emerald-dark mb-8 tracking-tighter leading-[0.9] uppercase">
                  {t('rfq.header.title')}
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground/90 leading-relaxed max-w-xl font-medium">
                  {t('rfq.header.description')}
                </p>
              </div>

              <div className="flex items-center gap-12 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-uniteda-emerald-dark tracking-tighter">{t('rfq.header.response_time_value')}</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{t('rfq.header.response_time_label')}</span>
                </div>
                <div className="w-px h-12 bg-black/5" />
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-uniteda-emerald-dark tracking-tighter">{t('rfq.header.quality_value')}</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{t('rfq.header.quality_label')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full hidden lg:block"
            >
              <div className="relative aspect-[4/3] rounded-[4rem] border-[12px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
                <img src={rfqHero} alt={t('rfq.header.image_alt')} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-uniteda-emerald-dark/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Progressive Form Section */}
      <section className="section-padding bg-[#fafafa] relative overflow-hidden min-h-[900px]">
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              {/* Progress Tracker */}
              <div className="mb-12 space-y-4">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] font-black text-uniteda-emerald uppercase tracking-[0.3em]">
                    {t('rfq.form.step_label', { step: currentStep + 1 })}
                  </span>
                  <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-[0.3em]">
                    {currentStep === 0
                      ? t('rfq.form.steps_names.entity')
                      : currentStep === 1
                        ? t('rfq.form.steps_names.supply')
                        : t('rfq.form.steps_names.verification')}
                  </span>
                </div>
                <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "33.33%" }}
                    animate={{ width: `${(currentStep + 1) * 33.33}%` }}
                    className="h-full bg-uniteda-emerald rounded-full"
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="relative">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="w-full"
                  >
                    {currentStep === 0 && (
                      <div className="p-10 md:p-14 rounded-[3.5rem] bg-white border border-black/5 shadow-2xl shadow-black/[0.02] text-start">
                        <div className="flex items-center gap-4 mb-10">
                          <div className="w-12 h-12 rounded-2xl bg-uniteda-emerald/5 flex items-center justify-center text-uniteda-emerald">
                            <Building2 size={24} />
                          </div>
                          <div>
                            <h2 className="text-2xl font-black text-uniteda-emerald-dark leading-none">{t('rfq.form.sections.business_info')}</h2>
                            <p className="text-xs font-bold text-muted-foreground/60 uppercase mt-2 tracking-widest font-mono">{t('rfq.form.layers.initialization')}</p>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                          <div className="space-y-3">
                            <Label htmlFor="company" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.company.label')}</Label>
                            <Input id="company" placeholder={t('rfq.form.fields.company.placeholder')} className="h-16 rounded-2xl bg-[#fcfcfc] border-black/5 px-6 font-medium" required />
                          </div>
                          <div className="space-y-3">
                            <Label htmlFor="businessType" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.business_type.label')}</Label>
                            <Select required dir={isRTL ? "rtl" : "ltr"}>
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
                            <Label htmlFor="country" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.country.label')}</Label>
                            <Select required dir={isRTL ? "rtl" : "ltr"}>
                              <SelectTrigger className="h-16 rounded-2xl bg-[#fcfcfc] border-black/5 px-6 font-medium text-start">
                                <SelectValue placeholder={t('rfq.form.fields.country.placeholder')} />
                              </SelectTrigger>
                              <SelectContent className="rounded-2xl">
                                <SelectItem value="egypt" className="text-start">{t('products.filters.region.egypt')}</SelectItem>
                                <SelectItem value="uae" className="text-start">{t('products.filters.region.uae')}</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-3">
                            <Label htmlFor="city" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.city.label')}</Label>
                            <Input id="city" placeholder={t('rfq.form.fields.city.placeholder')} className="h-16 rounded-2xl bg-[#fcfcfc] border-black/5 px-6 font-medium" required />
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 1 && (
                      <div className="p-10 md:p-14 rounded-[3.5rem] bg-white border border-black/5 shadow-2xl shadow-black/[0.02] text-start">
                        <div className="flex items-center gap-4 mb-10">
                          <div className="w-12 h-12 rounded-2xl bg-uniteda-emerald/5 flex items-center justify-center text-uniteda-emerald">
                            <Truck size={24} />
                          </div>
                          <div>
                            <h2 className="text-2xl font-black text-uniteda-emerald-dark leading-none">{t('rfq.form.sections.supply_req')}</h2>
                            <p className="text-xs font-bold text-muted-foreground/60 uppercase mt-2 tracking-widest font-mono">{t('rfq.form.layers.operational')}</p>
                          </div>
                        </div>

                        <div className="space-y-10">
                          <div className="space-y-6">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.categories.label')}</Label>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {productCategories.map(category => (
                                <label
                                  key={category}
                                  className={cn(
                                    "flex items-center gap-4 p-5 rounded-2xl border transition-all cursor-pointer",
                                    selectedCategories.includes(category)
                                      ? "bg-uniteda-emerald border-uniteda-emerald text-white"
                                      : "bg-[#fcfcfc] border-black/5 hover:border-uniteda-emerald/30"
                                  )}
                                >
                                  <Checkbox
                                    checked={selectedCategories.includes(category)}
                                    onCheckedChange={() => handleCategoryToggle(category)}
                                    className={cn(
                                      "w-6 h-6 rounded-lg border-2 transition-all",
                                      selectedCategories.includes(category)
                                        ? "bg-white border-white text-uniteda-emerald data-[state=checked]:bg-white data-[state=checked]:text-uniteda-emerald"
                                        : "border-black/10 bg-white"
                                    )}
                                  />
                                  <span className="font-bold text-lg select-none">{category}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                            <div className="space-y-3">
                              <Label htmlFor="volume" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.volume.label')}</Label>
                              <Select required dir={isRTL ? "rtl" : "ltr"}>
                                <SelectTrigger className="h-16 rounded-2xl bg-[#fcfcfc] border-black/5 px-6 font-medium text-start">
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
                              <Select required dir={isRTL ? "rtl" : "ltr"}>
                                <SelectTrigger className="h-16 rounded-2xl bg-[#fcfcfc] border-black/5 px-6 font-medium text-start">
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
                            <Textarea id="requirements" placeholder={t('rfq.form.fields.requirements.placeholder')} rows={4} className="rounded-3xl bg-[#fcfcfc] border-black/5 p-6 font-medium resize-none" />
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="p-10 md:p-14 rounded-[3.5rem] bg-white border border-black/5 shadow-2xl shadow-black/[0.02] text-start">
                        <div className="flex items-center gap-4 mb-10">
                          <div className="w-12 h-12 rounded-2xl bg-uniteda-emerald/5 flex items-center justify-center text-uniteda-emerald">
                            <FileText size={24} />
                          </div>
                          <div>
                            <h2 className="text-2xl font-black text-uniteda-emerald-dark leading-none">{t('rfq.form.sections.contact_info')}</h2>
                            <p className="text-xs font-bold text-muted-foreground/60 uppercase mt-2 tracking-widest font-mono">{t('rfq.form.layers.verification')}</p>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                          <div className="space-y-3">
                            <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.name.label')}</Label>
                            <Input id="name" placeholder={t('rfq.form.fields.name.placeholder')} className="h-16 rounded-2xl bg-[#fcfcfc] border-black/5 px-6 font-medium" required />
                          </div>
                          <div className="space-y-3">
                            <Label htmlFor="position" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.position.label')}</Label>
                            <Input id="position" placeholder={t('rfq.form.fields.position.placeholder')} className="h-16 rounded-2xl bg-[#fcfcfc] border-black/5 px-6 font-medium" />
                          </div>
                          <div className="space-y-3">
                            <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.email.label')}</Label>
                            <Input id="email" type="email" placeholder={t('rfq.form.fields.email.placeholder')} className="h-16 rounded-2xl bg-[#fcfcfc] border-black/5 px-6 font-medium" required />
                          </div>
                          <div className="space-y-3">
                            <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('rfq.form.fields.phone.label')}</Label>
                            <Input id="phone" type="tel" placeholder={t('rfq.form.fields.phone.placeholder')} className="h-16 rounded-2xl bg-[#fcfcfc] border-black/5 px-6 font-medium" required />
                          </div>
                        </div>

                        <div className="mt-12 p-6 rounded-2xl bg-uniteda-emerald/5 border border-uniteda-emerald/10 flex items-start gap-4">
                          <ShieldCheck className="text-uniteda-emerald mt-1 shrink-0" size={20} />
                          <p className="text-xs font-bold text-uniteda-emerald-dark leading-relaxed">{t('rfq.form.authorization_note')}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Footer Controls */}
                <div className="mt-12 flex items-center justify-between gap-6 px-4">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="h-16 px-8 rounded-2xl font-black text-sm uppercase tracking-widest disabled:opacity-0 transition-opacity"
                  >
                    <ArrowLeft className="w-5 h-5 me-3 rtl:rotate-180" />
                    {t('rfq.form.back_button')}
                  </Button>

                  <Button
                    type="submit"
                    size="xl"
                    disabled={isSubmitting}
                    className="h-20 px-12 rounded-full bg-uniteda-emerald hover:bg-uniteda-emerald-dark text-white font-black text-xl shadow-xl shadow-uniteda-emerald/20 transition-all hover:scale-105 active:scale-95 group"
                  >
                    {isSubmitting ? t('rfq.form.submit.submitting') : currentStep === 2 ? t('rfq.form.submit.button') : t('rfq.form.submit.continue')}
                    <ArrowRight className="w-6 h-6 ms-3 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
                  </Button>
                </div>
              </form>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-12 rounded-[3.5rem] bg-uniteda-emerald-dark text-white relative overflow-hidden"
              >
                <h3 className="font-display text-2xl font-black mb-10 text-uniteda-gold tracking-tight">{t('rfq.sidebar.process.title')}</h3>
                <div className="space-y-8">
                  {(t('rfq.sidebar.process.steps', { returnObjects: true }) as string[]).map((stepText, i) => {
                    const icons = [FileText, Clock, CheckCircle2];
                    const Icon = icons[i] || CheckCircle2;
                    return (
                      <div key={i} className="flex items-start gap-6 group">
                        <div className={cn(
                          "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300",
                          currentStep >= i ? "bg-uniteda-gold text-uniteda-emerald-dark" : "bg-white/10 text-white/40"
                        )}>
                          <Icon size={24} />
                        </div>
                        <div className="space-y-1 text-start">
                          <span className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em]">{t('rfq.sidebar.phases.phase_label', { phase: i + 1 })}</span>
                          <p className="text-sm font-medium text-white/80 leading-relaxed">{stepText}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <div className="p-12 rounded-[3.5rem] bg-white border border-black/5 shadow-2xl shadow-black/[0.02] text-start">
                <h3 className="font-display text-2xl font-black text-uniteda-emerald-dark mb-6">{t('rfq.sidebar.support.title')}</h3>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed mb-6">{t('rfq.sidebar.support.description')}</p>
                <Button variant="outline" className="w-full h-16 rounded-2xl border-uniteda-emerald/20 text-uniteda-emerald font-black text-xs uppercase tracking-widest hover:bg-uniteda-emerald hover:text-white" asChild>
                  <a href="mailto:sales@uniteda.com">sales@uniteda.com</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
