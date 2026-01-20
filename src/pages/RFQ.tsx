import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
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
import { ArrowRight, Building2, CheckCircle2, FileText, Clock, Truck } from "lucide-react";
import { toast } from "sonner";



export default function RFQPage() {
  const { t } = useTranslation('pages');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mapped options
  const businessTypes = [
    { value: "hotel", label: t('rfq.form.options.business_types.hotel') },
    { value: "restaurant", label: t('rfq.form.options.business_types.restaurant') },
    { value: "airline", label: t('rfq.form.options.business_types.airline') },
    { value: "supermarket", label: t('rfq.form.options.business_types.supermarket') },
    { value: "distributor", label: t('rfq.form.options.business_types.distributor') },
    { value: "processor", label: t('rfq.form.options.business_types.processor') },
    { value: "other", label: t('rfq.form.options.business_types.other') },
  ];

  const volumeRanges = [
    { value: "small", label: t('rfq.form.options.volume_ranges.small') },
    { value: "medium", label: t('rfq.form.options.volume_ranges.medium') },
    { value: "large", label: t('rfq.form.options.volume_ranges.large') },
    { value: "enterprise", label: t('rfq.form.options.volume_ranges.enterprise') },
  ];

  const frequencies = [
    { value: "daily", label: t('rfq.form.options.frequencies.daily') },
    { value: "weekly-2", label: t('rfq.form.options.frequencies.weekly_2') },
    { value: "weekly", label: t('rfq.form.options.frequencies.weekly') },
    { value: "biweekly", label: t('rfq.form.options.frequencies.biweekly') },
    { value: "monthly", label: t('rfq.form.options.frequencies.monthly') },
  ];

  const productCategories = [
    t('products.catalog.categories.fruits'),
    t('products.catalog.categories.vegetables'),
    t('products.catalog.categories.herbs'),
    t('products.catalog.categories.microgreens'),
    t('products.catalog.categories.exotic'),
    t('products.catalog.categories.specialty'),
  ];

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success(t('rfq.form.success.title'), {
      description: t('rfq.form.success.description'),
    });

    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-12 pb-8 bg-gradient-subtle">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t('rfq.header.badge')}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('rfq.header.title')}
            </h1>
            <p className="text-muted-foreground text-lg">
              {t('rfq.header.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding pt-12">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Business Information */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    {t('rfq.form.sections.business_info')}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">{t('rfq.form.fields.company.label')}</Label>
                      <Input id="company" placeholder={t('rfq.form.fields.company.placeholder')} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessType">{t('rfq.form.fields.business_type.label')}</Label>
                      <Select required>
                        <SelectTrigger className="text-start">
                          <SelectValue placeholder={t('rfq.form.fields.business_type.placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypes.map(type => (
                            <SelectItem
                              key={type.value}
                              value={type.value}
                              className="text-start rtl:pr-8 rtl:pl-2 rtl:[&>span]:right-2 rtl:[&>span]:left-auto"
                            >
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">{t('rfq.form.fields.country.label')}</Label>
                      <Select required>
                        <SelectTrigger className="text-start">
                          <SelectValue placeholder={t('rfq.form.fields.country.placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem
                            value="egypt"
                            className="text-start rtl:pr-8 rtl:pl-2 rtl:[&>span]:right-2 rtl:[&>span]:left-auto"
                          >
                            {t('products.filters.region.egypt')}
                          </SelectItem>
                          <SelectItem
                            value="uae"
                            className="text-start rtl:pr-8 rtl:pl-2 rtl:[&>span]:right-2 rtl:[&>span]:left-auto"
                          >
                            {t('products.filters.region.uae')}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">{t('rfq.form.fields.city.label')}</Label>
                      <Input id="city" placeholder={t('rfq.form.fields.city.placeholder')} required />
                    </div>
                  </div>
                </div>

                {/* Supply Requirements */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    {t('rfq.form.sections.supply_req')}
                  </h2>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label>{t('rfq.form.fields.categories.label')}</Label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {productCategories.map(category => (
                          <div
                            key={category}
                            className="flex items-center gap-3"
                          >
                            <Checkbox
                              id={category}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => handleCategoryToggle(category)}
                            />
                            <Label htmlFor={category} className="font-normal cursor-pointer">
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="volume">{t('rfq.form.fields.volume.label')}</Label>
                        <Select required>
                          <SelectTrigger className="text-start">
                            <SelectValue placeholder={t('rfq.form.fields.volume.placeholder')} />
                          </SelectTrigger>
                          <SelectContent>
                            {volumeRanges.map(vol => (
                              <SelectItem
                                key={vol.value}
                                value={vol.value}
                                className="text-start rtl:pr-8 rtl:pl-2 rtl:[&>span]:right-2 rtl:[&>span]:left-auto"
                              >
                                {vol.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="frequency">{t('rfq.form.fields.frequency.label')}</Label>
                        <Select required>
                          <SelectTrigger className="text-start">
                            <SelectValue placeholder={t('rfq.form.fields.frequency.placeholder')} />
                          </SelectTrigger>
                          <SelectContent>
                            {frequencies.map(freq => (
                              <SelectItem
                                key={freq.value}
                                value={freq.value}
                                className="text-start rtl:pr-8 rtl:pl-2 rtl:[&>span]:right-2 rtl:[&>span]:left-auto"
                              >
                                {freq.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="requirements">{t('rfq.form.fields.requirements.label')}</Label>
                      <Textarea
                        id="requirements"
                        placeholder={t('rfq.form.fields.requirements.placeholder')}
                        rows={4}
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    {t('rfq.form.sections.contact_info')}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('rfq.form.fields.name.label')}</Label>
                      <Input id="name" placeholder={t('rfq.form.fields.name.placeholder')} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">{t('rfq.form.fields.position.label')}</Label>
                      <Input id="position" placeholder={t('rfq.form.fields.position.placeholder')} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('rfq.form.fields.email.label')}</Label>
                      <Input id="email" type="email" placeholder={t('rfq.form.fields.email.placeholder')} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('rfq.form.fields.phone.label')}</Label>
                      <Input id="phone" type="tel" placeholder={t('rfq.form.fields.phone.placeholder')} required />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex items-center gap-4">
                  <Button type="submit" variant="hero" size="xl" disabled={isSubmitting}>
                    {isSubmitting ? t('rfq.form.submit.submitting') : t('rfq.form.submit.button')}
                    <ArrowRight className="w-5 h-5 ms-1 rtl:rotate-180" />
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    {t('rfq.form.submit.note')}
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Process */}
              <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                <h3 className="font-display text-lg font-semibold mb-4">{t('rfq.sidebar.process.title')}</h3>
                <div className="space-y-4">
                  {(t('rfq.sidebar.process.steps', { returnObjects: true }) as string[]).map((stepText, i) => {
                    const icons = [FileText, Clock, CheckCircle2];
                    const Icon = icons[i] || CheckCircle2;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-accent" />
                        </div>
                        <p className="text-sm text-primary-foreground/90 pt-1">{stepText}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  {t('rfq.sidebar.contact.title')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('rfq.sidebar.contact.description')}
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center px-4 py-2 rounded-lg bg-muted/50">
                    <span className="font-medium">{t('products.filters.region.egypt')}</span>
                    <span dir="ltr" className="font-mono text-muted-foreground">+20 10 2202 3344</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-2 rounded-lg bg-muted/50">
                    <span className="font-medium">{t('products.filters.region.uae')}</span>
                    <span dir="ltr" className="font-mono text-muted-foreground">+971 4 454 2200</span>
                  </div>
                  <div className="text-center pt-2">
                    <a href="mailto:sales@uniteda.com" className="text-primary hover:underline">sales@uniteda.com</a>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                <h3 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  {t('rfq.sidebar.certifications')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["HACCP", "ISO 22000", "GlobalGAP"].map(cert => (
                    <span key={cert} className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
