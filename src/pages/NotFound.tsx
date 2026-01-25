import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft, Home, Sprout } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export default function NotFound() {
  const location = useLocation();
  const { t } = useTranslation('pages');

  useEffect(() => {
    console.error("404 Error: Access violation at pathway:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="pt-16 pb-16 relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Organic Background Visuals */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto w-[800px] h-[800px] bg-uniteda-emerald/5 rounded-full blur-[150px] -mr-96 rtl:-ml-96 rtl:-mr-0 -mt-96 pointer-events-none" />
          <div className="absolute bottom-0 left-0 rtl:right-0 rtl:left-auto w-[600px] h-[600px] bg-uniteda-gold/5 rounded-full blur-[120px] -ml-48 rtl:-mr-48 rtl:-ml-0 -mb-48 pointer-events-none" />

          {/* Decorative leaves */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.03, rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 rtl:right-20 rtl:left-auto"
          >
            <Leaf className="w-32 h-32 text-uniteda-emerald" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.02, rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 rtl:left-20 rtl:right-auto"
          >
            <Sprout className="w-40 h-40 text-uniteda-gold" />
          </motion.div>
        </div>

        <div className="container-wide relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            {/* Fresh Icon */}
            <div className="mb-8 sm:mb-12 relative flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-uniteda-emerald/10 border-2 border-uniteda-emerald/20 flex items-center justify-center text-uniteda-emerald mb-4 sm:mb-6 relative z-10 shadow-lg shadow-uniteda-emerald/10 p-5 sm:p-6 lg:p-7"
              >
                <img src="/logo.webp" alt="Uniteda" className="w-full h-full object-contain" width={80} height={80} />
              </motion.div>
              <h1 className="font-display text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-black text-uniteda-emerald/5 leading-none absolute -top-6 sm:-top-8 lg:-top-10 tracking-widest pointer-events-none">
                404
              </h1>
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-uniteda-emerald/20" />
              <div className="text-[10px] sm:text-xs font-black text-uniteda-emerald uppercase tracking-[0.3em] sm:tracking-[0.5em]">{t('not_found.error_code')}</div>
              <div className="w-8 sm:w-12 h-px bg-uniteda-emerald/20" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-uniteda-emerald-dark mb-6 sm:mb-8 tracking-tighter px-4 sm:px-0 uppercase leading-tight">
              {t('not_found.media_label')} <br className="sm:hidden" />
              <span className="text-uniteda-gold">{t('not_found.media_highlight')}</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-medium mb-8 sm:mb-12 leading-relaxed max-w-xl mx-auto px-4 sm:px-0">
              <Trans
                i18nKey="not_found.description"
                t={t}
                values={{ path: location.pathname }}
                components={{
                  path: <span className="text-uniteda-emerald font-mono text-sm sm:text-base bg-uniteda-emerald/5 px-2 py-0.5 rounded-lg border border-uniteda-emerald/10" />
                }}
              />
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0">
              <Button
                size="xl"
                className="w-full sm:w-auto px-8 sm:px-12 h-14 sm:h-16 rounded-full bg-uniteda-emerald hover:bg-uniteda-emerald-dark text-white font-black text-base sm:text-lg shadow-xl shadow-uniteda-emerald/20 transition-all hover:scale-105 active:scale-95 group"
                asChild
              >
                <Link to="/">
                  <Home className="w-4 h-4 sm:w-5 sm:h-5 me-2 sm:me-3 group-hover:scale-110 transition-transform" />
                  {t('not_found.reset_btn')}
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto px-8 sm:px-12 h-14 sm:h-16 rounded-full border-2 border-uniteda-emerald/20 text-uniteda-emerald-dark font-black text-base sm:text-lg hover:bg-uniteda-emerald/5 transition-all group"
                asChild
              >
                <Link to="/products">
                  <Sprout className="w-4 h-4 sm:w-5 sm:h-5 me-2 sm:me-3 group-hover:rotate-12 transition-transform" />
                  {t('not_found.browse_products')}
                </Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-black/5">
              <p className="text-xs sm:text-sm font-bold text-muted-foreground/60 uppercase tracking-widest mb-4">
                {t('not_found.popular_pages.title')}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {[
                  { to: '/products', label: t('not_found.popular_pages.products') },
                  { to: '/seasonal', label: t('not_found.popular_pages.seasonal') },
                  { to: '/operations', label: t('not_found.popular_pages.operations') },
                  { to: '/rfq', label: t('not_found.popular_pages.rfq') },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-uniteda-emerald/5 border border-uniteda-emerald/10 text-uniteda-emerald-dark text-xs sm:text-sm font-bold hover:bg-uniteda-emerald hover:text-white transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
