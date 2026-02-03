import { useState, useMemo, useCallback, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
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
// Using unified workforce image from public assets

const BusinessInfoStep = lazy(() => import("@/components/rfq/BusinessInfoStep").then(m => ({ default: m.BusinessInfoStep })));
const SupplyRequirementsStep = lazy(() => import("@/components/rfq/SupplyRequirementsStep").then(m => ({ default: m.SupplyRequirementsStep })));
const ContactInfoStep = lazy(() => import("@/components/rfq/ContactInfoStep").then(m => ({ default: m.ContactInfoStep })));
import { useResend } from "@/hooks/use-resend";
import { usePageTitle } from "@/hooks/use-page-title";

export default function RFQPage() {
  const { t, i18n, isRTL } = useUnifiedTranslation();
  usePageTitle('meta.rfq.title');
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for forward, -1 for backward

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { sendEmail, isSubmitting, submitted, resetStatus } = useResend();
  const [rfqData, setRfqData] = useState({
    company: '',
    businessType: '',
    country: 'egypt',
    city: '',
    volume: '',
    frequency: '',
    requirements: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    _company_id_verification: '',
  });

  const handleDataChange = (field: string, value: string) => {
    setRfqData(prev => ({ ...prev, [field]: value }));
  };

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

    const success = await sendEmail(
      { endpoint: '/api/rfq' },
      {
        ...rfqData,
        name: rfqData.name || 'Anonymous',
        email: rfqData.email || 'No email provided',
        company: rfqData.company || 'Not provided',
        title: `New Quote Request: ${rfqData.company || 'Unknown'}`, // Added title
        message: rfqData.requirements || 'No specific requirements provided.',
        categories: selectedCategories.join(', '),
        source: 'RFQ Page Form',
      }
    );

    if (success) {
      // Reset form indicating success
      setCurrentStep(0);
      setRfqData({
        company: '',
        businessType: '',
        country: 'egypt',
        city: '',
        volume: '',
        frequency: '',
        requirements: '',
        name: '',
        position: '',
        email: '',
        phone: '',
        _company_id_verification: '',
      });
      setSelectedCategories([]);
      resetStatus();
    }
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
      <section className="relative pt-20 sm:pt-24 lg:pt-32 pb-0 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto w-[1000px] h-[1000px] bg-uniteda-emerald/10 rounded-full blur-[180px] -mr-96 rtl:-ml-96 rtl:-mr-0 -mt-96 pointer-events-none" />

        <div className="container-wide relative z-10 lg:pb-12">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 lg:space-y-10"
            >
              <div className="text-start">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 mb-6 sm:mb-8"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-uniteda-gold/10 border border-uniteda-gold/20 text-uniteda-emerald-dark text-[11px] font-black uppercase tracking-[0.2em]">
                    <ShieldCheck size={14} className="text-uniteda-emerald" />
                    {t('rfq.header.badge')}
                  </span>
                </motion.div>

                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-uniteda-emerald-dark mb-6 sm:mb-8 tracking-tighter leading-[0.9] uppercase">
                  {t('rfq.header.title')}
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground/90 leading-relaxed max-w-xl font-medium">
                  {t('rfq.header.description')}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-12 pt-4">
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-uniteda-emerald-dark tracking-tighter">{t('rfq.header.response_time_value')}</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{t('rfq.header.response_time_label')}</span>
                </div>
                <div className="w-px h-12 bg-black/5 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-uniteda-emerald-dark tracking-tighter">{t('rfq.header.quality_value')}</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{t('rfq.header.quality_label')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full hidden md:block"
            >
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl lg:rounded-[4rem] border-4 sm:border-8 lg:border-[12px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
                <img src="/assets/united-workforce.webp" alt={t('rfq.header.image_alt')} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-uniteda-emerald-dark/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Progressive Form Section */}
      <section className="section-padding bg-[#fafafa] relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
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
                    <Suspense fallback={<div className="h-[400px] animate-pulse bg-white rounded-[3.5rem] border border-black/5" />}>
                      {currentStep === 0 && (
                        <BusinessInfoStep
                          t={t}
                          isRTL={isRTL}
                          businessTypes={businessTypes}
                          values={rfqData}
                          onChange={handleDataChange}
                        />
                      )}

                      {currentStep === 1 && (
                        <SupplyRequirementsStep
                          t={t}
                          isRTL={isRTL}
                          productCategories={productCategories}
                          selectedCategories={selectedCategories}
                          handleCategoryToggle={handleCategoryToggle}
                          volumeRanges={volumeRanges}
                          frequencies={frequencies}
                          values={rfqData}
                          onChange={handleDataChange}
                        />
                      )}

                      {currentStep === 2 && (
                        <ContactInfoStep
                          t={t}
                          values={rfqData}
                          onChange={handleDataChange}
                        />
                      )}
                    </Suspense>
                  </motion.div>
                </AnimatePresence>

                {/* Footer Controls */}
                <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 px-2 sm:px-4">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="h-12 sm:h-14 lg:h-16 px-4 sm:px-6 lg:px-8 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest disabled:opacity-0 transition-opacity order-2 sm:order-1"
                  >
                    <ArrowLeft className="w-5 h-5 me-3 rtl:rotate-180" />
                    {t('rfq.form.back_button')}
                  </Button>

                  <Button
                    type="submit"
                    size="xl"
                    disabled={isSubmitting}
                    className="h-14 sm:h-16 lg:h-18 xl:h-20 px-6 sm:px-8 lg:px-10 xl:px-12 rounded-full bg-uniteda-emerald hover:bg-uniteda-emerald-dark text-white font-black text-base sm:text-lg lg:text-xl shadow-xl shadow-uniteda-emerald/20 transition-all hover:scale-105 active:scale-95 group order-1 sm:order-2"
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
                <h3 className="font-display text-xl sm:text-2xl font-black mb-8 sm:mb-10 text-uniteda-gold tracking-tight">{t('rfq.sidebar.process.title')}</h3>
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

              <div className="p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl sm:rounded-3xl lg:rounded-[3.5rem] bg-white border border-black/5 shadow-2xl shadow-black/[0.02] text-start">
                <h3 className="font-display text-xl sm:text-2xl font-black text-uniteda-emerald-dark mb-4 sm:mb-6">{t('rfq.sidebar.support.title')}</h3>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed mb-6">{t('rfq.sidebar.support.description')}</p>
                <Button variant="outline" className="w-full h-14 sm:h-16 rounded-xl sm:rounded-2xl border-uniteda-emerald/20 text-uniteda-emerald font-black text-xs uppercase tracking-widest hover:bg-uniteda-emerald hover:text-white" asChild>
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
