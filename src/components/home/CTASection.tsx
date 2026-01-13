import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe2, Rocket, BarChart3, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-uniteda-emerald-dark relative overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-uniteda-emerald/20 rounded-full blur-[120px] -mr-96 -mt-96" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-uniteda-gold/10 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="container-wide relative z-10">
        <div className="glass-panel border-white/10 p-12 lg:p-24 rounded-[4rem] bg-white/5 backdrop-blur-3xl overflow-hidden relative">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-uniteda-gold text-uniteda-emerald-dark text-[10px] font-black uppercase tracking-[0.3em]">
                Partner with UNITEDA
              </div>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                Architecting the Future <br />
                <span className="text-uniteda-gold">of Agricultural Supply</span>
              </h2>
              <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
                Unlock 100% supply transparency and regional logistics synchronization for your enterprise.
              </p>
            </motion.div>

            {/* Quick Stats/Features Bento for CTA */}
            <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
              {[
                { icon: Globe2, label: "Multi-Hub Sync", sub: "Egypt & UAE Unified" },
                { icon: BarChart3, label: "Live RFQ Logic", sub: "48h Response SLA" },
                { icon: ShieldCheck, label: "Audit-Ready", sub: "Global Standards" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-uniteda-gold">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-white font-black tracking-tight">{item.label}</p>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 pt-12"
            >
              <Button size="xl" className="rounded-full bg-uniteda-gold hover:bg-uniteda-gold/80 text-uniteda-emerald-dark px-12 py-10 text-xl font-black shadow-2xl shadow-uniteda-gold/20 transition-all hover:scale-105">
                <Link to="/rfq" className="flex items-center gap-3">
                  Launch Inquiry Engine
                  <Rocket size={24} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full border-2 border-white/20 text-white hover:bg-white/5 px-12 py-10 text-xl font-black transition-all">
                <Link to="/contact">Contact Enterprise Sales</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
