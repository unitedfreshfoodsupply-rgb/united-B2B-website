import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Droplets, Snowflake, Leaf, Calendar, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const seasons = [
  {
    id: "spring",
    name: "Spring",
    icon: Leaf,
    months: "Mar - May",
    color: "bg-emerald-500",
    featured: ["Strawberries", "Asparagus", "Micro-greens", "Peas"],
  },
  {
    id: "summer",
    name: "Summer",
    icon: Sun,
    months: "Jun - Aug",
    color: "bg-amber-500",
    featured: ["Premium Mangoes", "Watermelon", "Vine Tomatoes", "Bell Peppers"],
  },
  {
    id: "autumn",
    name: "Autumn",
    icon: Droplets,
    months: "Sep - Nov",
    color: "bg-orange-600",
    featured: ["Pomegranates", "Figs", "Hard Squash", "Organic Apples"],
  },
  {
    id: "winter",
    name: "Winter",
    icon: Snowflake,
    months: "Dec - Feb",
    color: "bg-blue-400",
    featured: ["Export Citrus", "Medjool Dates", "Red Cabbage", "Root Assets"],
  },
];

const currentMonth = new Date().getMonth();
const getCurrentSeason = () => {
  if (currentMonth >= 2 && currentMonth <= 4) return "spring";
  if (currentMonth >= 5 && currentMonth <= 7) return "summer";
  if (currentMonth >= 8 && currentMonth <= 10) return "autumn";
  return "winter";
};

export function SeasonalSection() {
  const currentSeason = getCurrentSeason();

  return (
    <section className="section-padding bg-uniteda-emerald-dark text-white overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-uniteda-emerald/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-uniteda-gold/10 text-uniteda-gold text-[10px] font-black uppercase tracking-widest mb-6 border border-uniteda-gold/20">
              <Calendar size={12} />
              Availability Engine v2.0
            </div>

            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
              Regional Seasonal <br />
              <span className="text-uniteda-gold">Heatmap</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg font-medium">
              We provide granular availability data synced between Egypt and UAE production cycles, allowing procurement teams to lock-in supply for high-end menus months in advance.
            </p>

            {/* Season Selectors */}
            <div className="space-y-3">
              {seasons.map((season) => (
                <motion.div
                  key={season.id}
                  whileHover={{ x: 10 }}
                  className={`group flex items-center justify-between p-5 rounded-3xl border transition-all duration-500 cursor-pointer ${season.id === currentSeason
                    ? "bg-uniteda-emerald border-white/20 shadow-2xl shadow-uniteda-emerald/40"
                    : "bg-white/5 border-transparent hover:border-white/10"
                    }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-2xl ${season.color} flex items-center justify-center shadow-lg`}>
                      <season.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-lg tracking-tight">{season.name}</p>
                      <p className="text-sm font-bold text-white/40">{season.months}</p>
                    </div>
                  </div>
                  {season.id === currentSeason ? (
                    <div className="px-4 py-1.5 rounded-full bg-white text-uniteda-emerald-dark text-[10px] font-black uppercase tracking-widest">
                      Live Peak
                    </div>
                  ) : (
                    <ArrowRight className="text-white/20 group-hover:text-white transition-colors" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Harvest Intelligence Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-panel border-white/10 p-12 rounded-[3.5rem] relative overflow-hidden group">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-uniteda-gold/10 rounded-full blur-3xl -mr-32 -mt-32 transition-colors group-hover:bg-uniteda-gold/20" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <span className="text-uniteda-gold text-xs font-black uppercase tracking-[0.2em]">Live Harvest Intel</span>
                    <h3 className="text-4xl font-black tracking-tight mt-2 italic">
                      {seasons.find(s => s.id === currentSeason)?.name} Peak
                    </h3>
                  </div>
                  <div className="w-20 h-20 rounded-[2rem] bg-white/10 flex items-center justify-center border border-white/10 group-hover:rotate-12 transition-transform duration-700">
                    <Info className="text-uniteda-gold w-8 h-8" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {seasons.find(s => s.id === currentSeason)?.featured.map((product, i) => (
                    <motion.div
                      key={product}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-crosshair group/item"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-black text-lg tracking-tight">{product}</p>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      </div>
                      <p className="text-xs font-bold text-white/40 uppercase tracking-widest">In-Stock Grade AA</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 p-8 rounded-[2.5rem] bg-uniteda-emerald-dark/50 border border-white/5 flex items-center justify-between">
                  <div className="space-y-4">
                    <p className="text-xs font-black uppercase tracking-widest text-white/40">Regional Availability</p>
                    <div className="flex gap-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 font-bold text-xs uppercase">
                        <span>🇪🇬</span> Cairo
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 font-bold text-xs uppercase">
                        <span>🇦🇪</span> Dubai
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" className="text-uniteda-gold hover:text-white transition-colors group/btn">
                    <Link to="/seasonal" className="flex items-center gap-2 font-black text-xs uppercase tracking-widest">
                      Full Calendar
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
