import { Link } from "react-router-dom";
import { MapPin, Phone, Linkedin, Instagram, ArrowUpRight, Mail, Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { useUnifiedTranslation } from "@/hooks/use-unified-translation";

export function Footer() {
  const { t, i18n, isRTL } = useUnifiedTranslation();

  const footerLinks = {
    products: [
      { id: "fruits", href: "/products?category=fruits" },
      { id: "vegetables", href: "/products?category=vegetables" },
      { id: "herbs", href: "/products?category=herbs" },
      { id: "microgreens", href: "/products?category=microgreens" },
      { id: "exotic", href: "/products?category=exotic" },
    ],
    company: [
      { id: "about", href: "/about" },
      { id: "operations", href: "/operations" },
      { id: "quality", href: "/quality" },
      { id: "network", href: "/network" },
    ],
    resources: [
      { id: "seasonal", href: "/seasonal" },
      { id: "delivery", href: "/programs" },
    ],
  };

  const regions = [
    {
      id: "egypt",
      phone: "+20 100 889 6683",
      email: "support@united-ffv.com",
      flag: "🇪🇬"
    },
  ];

  return (
    <footer className="relative bg-white text-foreground border-t border-black/5 overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-uniteda-emerald/5 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-uniteda-gold/5 rounded-full blur-[100px] -ml-24 -mb-24" />
      </div>

      {/* Pre-Footer: CTA Section */}
      <div className="relative z-10 border-b border-black/5">
        <div className="container-wide py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 bg-uniteda-emerald-dark rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-uniteda-emerald/20">
            {/* Background pattern */}
            <div className="absolute inset-0 neural-grid opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-2xl text-center lg:text-start">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Leaf className="w-5 h-5 text-uniteda-gold animate-bounce" />
                <span className="text-xs font-black text-uniteda-gold uppercase tracking-[0.3em]">{t('footer.pre_footer.label')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-tight mb-4">
                {t('footer.pre_footer.title')}
              </h2>
              <p className="text-white/60 text-base sm:text-lg font-medium leading-relaxed">
                {t('footer.pre_footer.description')}
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Button
                size="xl"
                className="h-16 sm:h-20 px-10 sm:px-14 rounded-2xl sm:rounded-full bg-uniteda-gold hover:bg-uniteda-gold-dark text-white font-black text-lg sm:text-xl shadow-2xl shadow-uniteda-gold/40 transition-all hover:scale-105 active:scale-95 group"
                asChild
              >
                <Link to="/contact">
                  {t('footer.pre_footer.cta')}
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ms-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="relative z-10 container-wide py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-xl shadow-uniteda-emerald/10 group-hover:rotate-6 transition-transform duration-500 rtl:group-hover:-rotate-6 overflow-hidden border border-black/5">
                <img src="/logo.webp" alt="Uniteda Logo" className="w-full h-full object-contain p-2" width={48} height={48} />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-3xl tracking-tighter leading-none text-uniteda-emerald-dark uppercase">{t('brand_short')}</span>
                <span className="text-[10px] text-uniteda-gold font-black tracking-widest uppercase mt-1">{t('footer.brand_slogan')}</span>
              </div>
            </Link>

            <p className="text-muted-foreground text-base font-medium leading-relaxed max-w-sm">
              {t('footer.description')}
            </p>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#", name: "LinkedIn" },
                { icon: Instagram, href: "#", name: "Instagram" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-2xl bg-[#fafafa] border border-black/5 flex items-center justify-center text-uniteda-emerald hover:bg-uniteda-emerald hover:text-white shadow-sm transition-all duration-500 hover:scale-110 active:scale-90"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-uniteda-gold mb-6 sm:mb-8">{t('footer.columns.products')}</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.id}>
                  <Link to={link.href} className="text-sm sm:text-base font-bold text-muted-foreground hover:text-uniteda-emerald flex items-center gap-2 group transition-colors">
                    {t(`footer.links.products.${link.id}`)}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 translate-x-[-4px] rtl:rotate-[-90deg]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-uniteda-gold mb-6 sm:mb-8">{t('footer.columns.company')}</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.id}>
                  <Link to={link.href} className="text-sm sm:text-base font-bold text-muted-foreground hover:text-uniteda-emerald flex items-center gap-2 group transition-colors">
                    {t(`footer.links.company.${link.id}`)}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 translate-x-[-4px] rtl:rotate-[-90deg]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions Display */}
          <div className="lg:col-span-4 lg:ps-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-uniteda-gold mb-6 sm:mb-8">{t('footer.columns.resources')}</h4>
            <div className="grid grid-cols-1 gap-8 sm:gap-10">
              {regions.map((region) => (
                <div key={region.id} className="relative group p-4 -m-4 rounded-3xl hover:bg-uniteda-emerald/[0.02] transition-colors">
                  <div className="flex items-center gap-3 text-lg font-black tracking-tight text-uniteda-emerald-dark mb-3">
                    <span className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-500 scale-110">{region.flag}</span>
                    <span className="uppercase">{t(`footer.regions.${region.id}.name`)}</span>
                  </div>
                  <div className="space-y-3 text-sm font-bold text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-uniteda-emerald/5 flex items-center justify-center shrink-0">
                        <MapPin size={12} className="text-uniteda-emerald" />
                      </div>
                      <span className="leading-snug">{t(`footer.regions.${region.id}.address`)}</span>
                    </div>
                    <div className="flex items-center gap-3" dir="ltr">
                      <div className="w-6 h-6 rounded-lg bg-uniteda-emerald/5 flex items-center justify-center shrink-0">
                        <Phone size={12} className="text-uniteda-emerald" />
                      </div>
                      <span className="rtl:text-end rtl:w-full tracking-wider">{region.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-lg bg-uniteda-emerald/5 flex items-center justify-center shrink-0">
                        <Mail size={12} className="text-uniteda-emerald" />
                      </div>
                      <span className="lowercase">{region.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="relative z-10 border-t border-black/5 bg-[#fafafa]">
        <div className="container-wide py-10 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8 text-center md:text-start">
            <p className="text-sm font-bold text-muted-foreground/60">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-xs font-black uppercase tracking-widest text-muted-foreground/40 hover:text-uniteda-emerald transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="text-xs font-black uppercase tracking-widest text-muted-foreground/40 hover:text-uniteda-emerald transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-black/5 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-uniteda-emerald animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-uniteda-emerald-dark">Operations Active Egypt</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
