import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Cpu, ArrowLeft, Terminal } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export default function NotFound() {
  const location = useLocation();
  const { t } = useTranslation('pages');

  useEffect(() => {
    console.error("404 Error: Access violation at pathway:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-uniteda-emerald-dark">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 neural-grid opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-uniteda-emerald-dark via-transparent to-uniteda-emerald-dark" />
          <div className="scanline opacity-20" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="container-wide relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            {/* Error HUD */}
            <div className="mb-12 relative flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                className="w-32 h-32 rounded-3xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-6 relative z-10"
              >
                <ShieldAlert className="w-16 h-16" />
              </motion.div>
              <h1 className="font-display text-[120px] md:text-[180px] font-black text-white/5 leading-none absolute -top-10 tracking-widest pointer-events-none">
                404
              </h1>
            </div>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-red-500/20" />
              <div className="text-infra text-red-500 tracking-[0.5em]">{t('not_found.error_code')}</div>
              <div className="w-12 h-px bg-red-500/20" />
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
              {t('not_found.media_label')} <span className="text-white/30">{t('not_found.media_highlight')}</span>
            </h2>

            <p className="text-white/40 text-xl font-light mb-12 leading-relaxed max-w-xl mx-auto">
              <Trans
                i18nKey="not_found.description"
                t={t}
                values={{ path: location.pathname }}
                components={{
                  path: <span className="text-red-400/60 font-mono text-base bg-red-500/5 px-2 py-0.5 rounded border border-red-500/10" />
                }}
              />
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="accent" size="xl" className="w-full sm:w-auto px-12 h-16 rounded-2xl group" asChild>
                <Link to="/">
                  <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform" />
                  {t('not_found.reset_btn')}
                </Link>
              </Button>
              <div className="flex items-center gap-4 px-6 h-16 rounded-2xl border border-white/5 bg-white/[0.02] text-white/40 font-mono text-sm">
                <Terminal className="w-4 h-4 text-accent" />
                <span>{t('not_found.syslog')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
