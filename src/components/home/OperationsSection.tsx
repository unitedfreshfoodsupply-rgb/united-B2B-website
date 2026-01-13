import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Thermometer, CheckCircle2, Package, Factory, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const operations = [
  {
    icon: Factory,
    title: "Eco-System Sourcing",
    description: "Direct farm-to-hub infrastructure with zero mid-layer friction.",
  },
  {
    icon: CheckCircle2,
    title: "Precision Grading",
    description: "Multi-parameter quality checks for size, Brix, and visual consistency.",
  },
  {
    icon: Thermometer,
    title: "Active Cold-Chain",
    description: "Real-time temperature monitoring from harvest to final delivery.",
  },
  {
    icon: Shield,
    title: "Compliance Core",
    description: "Global standard food safety audits (HACCP / ISO 22000).",
  },
];

export function OperationsSection() {
  return (
    <section className="section-padding bg-[#fafafa]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Visual Bento */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-2 h-[440px] rounded-[3rem] overflow-hidden relative shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000"
                  alt="Operations Hub"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-uniteda-emerald-dark to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-uniteda-gold/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Truck className="text-uniteda-gold" />
                    </div>
                    <span className="text-white font-black text-xs uppercase tracking-[0.2em]">Logistics Intelligence</span>
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tighter">Cairo & Dubai Hubs Sync</h3>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-[2rem] glass-panel bg-white flex flex-col justify-center gap-2"
              >
                <BarChart3 className="text-uniteda-gold w-8 h-8" />
                <div className="text-3xl font-black text-uniteda-emerald-dark tracking-tighter">99.8%</div>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">Supply Precision</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-8 rounded-[2rem] bg-uniteda-emerald flex flex-col justify-center gap-2 text-white"
              >
                <Thermometer className="w-8 h-8 text-white/40" />
                <div className="text-3xl font-black tracking-tighter">4°C - 8°C</div>
                <p className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none">Target Temp Range</p>
              </motion.div>
            </div>

            {/* Floating Asset Card */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 hidden xl:flex glass-panel p-6 rounded-3xl shadow-2xl border border-white/40 max-w-[200px] flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-uniteda-emerald/10 flex items-center justify-center">
                <Package size={20} className="text-uniteda-emerald" />
              </div>
              <p className="text-xs font-black text-uniteda-emerald-dark uppercase tracking-widest">Cold-Chain Asset</p>
              <div className="space-y-1">
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[80%] bg-uniteda-emerald" />
                </div>
                <span className="text-[9px] font-bold text-muted-foreground">Traceability Locked</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 order-1 lg:order-2"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-uniteda-emerald/5 text-uniteda-emerald text-[10px] font-black uppercase tracking-widest mb-6 border border-uniteda-emerald/10">
                Supply Chain Architecture
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-uniteda-emerald-dark tracking-tighter leading-[0.9]">
                Operations as <br />
                <span className="text-uniteda-gold">Infrastructure</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium mt-8 leading-relaxed max-w-lg">
                We don't just deliver products; we manage a sophisticated logistics engine designed to ensure 100% freshness from the moment of harvest.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {operations.map((op, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3 p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-black/5 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-uniteda-emerald/5 flex items-center justify-center text-uniteda-emerald group-hover:bg-uniteda-emerald group-hover:text-white transition-all duration-500">
                    <op.icon size={24} />
                  </div>
                  <h4 className="font-black text-uniteda-emerald-dark text-lg tracking-tight group-hover:text-uniteda-emerald transition-colors">{op.title}</h4>
                  <p className="text-sm text-muted-foreground font-medium leading-snug">{op.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Button className="rounded-full bg-uniteda-emerald-dark hover:bg-uniteda-emerald px-8 py-7 font-black text-xs uppercase tracking-[0.2em] shadow-xl group">
                <Link to="/operations" className="flex items-center gap-2">
                  Technical Architecture
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
