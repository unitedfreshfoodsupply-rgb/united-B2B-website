import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Plane, ShoppingBag, Utensils, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  { icon: Building2, label: "Hotels" },
  { icon: Utensils, label: "Restaurants" },
  { icon: Plane, label: "Airlines" },
  { icon: ShoppingBag, label: "Retail" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fafafa]">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-uniteda-emerald/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-uniteda-gold/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-uniteda-emerald/5 border border-uniteda-emerald/10 text-uniteda-emerald mb-4"
            >
              <Zap size={14} className="animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase">Next-Gen Supply Intelligence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-7xl xl:text-8xl font-black text-uniteda-emerald-dark leading-[0.95] tracking-tighter"
            >
              The DNA of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-uniteda-emerald to-uniteda-gold">
                Premium Supply
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-lg leading-relaxed font-medium"
            >
              UNITEDA bridges the gap between traditional agriculture and the high-demand requirements of modern hospitality through a data-driven supply infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="xl" className="rounded-full bg-uniteda-emerald hover:bg-uniteda-emerald-dark text-white px-10 py-8 text-lg font-bold shadow-2xl shadow-uniteda-emerald/20 transition-all hover:scale-105">
                <Link to="/rfq" className="flex items-center gap-2">
                  Launch Inquiry Hub
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full border-2 border-uniteda-emerald/20 text-uniteda-emerald hover:bg-uniteda-emerald/5 px-10 py-8 text-lg font-bold transition-all">
                <Link to="/products">Explore Assets</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-8 pt-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-muted flex items-center justify-center text-xs font-bold overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-uniteda-emerald-dark/60 uppercase tracking-widest">
                Trusted by 50+ <br /> Regional Partners
              </p>
            </motion.div>
          </div>

          {/* Right Column: Visual Bento */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="col-span-2 h-[300px] rounded-[2.5rem] bg-uniteda-emerald overflow-hidden relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=1000"
                  alt="Premium Produce"
                  className="w-full h-full object-cover mix-blend-overlay opacity-60 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                    <Shield className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">Certified Excellence</h3>
                  <p className="text-white/80 font-medium">Full traceability for every batch</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-[200px] rounded-[2rem] glass-panel p-8 flex flex-col justify-center gap-2"
              >
                <div className="text-4xl font-black text-uniteda-emerald tracking-tighter">0.05%</div>
                <p className="text-sm font-bold text-uniteda-emerald-dark/60 uppercase tracking-widest">Supply Latency</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-[200px] rounded-[2rem] bg-uniteda-gold p-8 flex flex-col justify-center gap-2 text-white shadow-xl shadow-uniteda-gold/20"
              >
                <Globe className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold tracking-tight">Multi-Hub Logic</div>
                <p className="text-white/80 text-sm font-medium">Egypt & UAE Synced</p>
              </motion.div>
            </div>

            {/* Floating Status Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass-panel rounded-3xl p-6 shadow-2xl border border-white/40 max-w-[240px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-uniteda-emerald-dark/40">Real-time status</span>
              </div>
              <p className="mt-2 text-sm font-bold text-uniteda-emerald-dark">
                Cairo Hub: <span className="text-uniteda-emerald font-black">ACTIVE</span>
              </p>
              <p className="text-sm font-bold text-uniteda-emerald-dark">
                Dubai Hub: <span className="text-uniteda-emerald font-black">ACTIVE</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
