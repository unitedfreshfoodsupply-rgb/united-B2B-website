import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Droplets, Snowflake, Leaf } from "lucide-react";

const seasons = [
  { 
    id: "spring", 
    name: "Spring", 
    icon: Leaf, 
    months: "Mar - May",
    color: "bg-green-500",
    featured: ["Strawberries", "Asparagus", "Artichokes", "Peas"],
  },
  { 
    id: "summer", 
    name: "Summer", 
    icon: Sun, 
    months: "Jun - Aug",
    color: "bg-amber-500",
    featured: ["Mangoes", "Watermelon", "Tomatoes", "Peppers"],
  },
  { 
    id: "autumn", 
    name: "Autumn", 
    icon: Droplets, 
    months: "Sep - Nov",
    color: "bg-orange-500",
    featured: ["Pomegranates", "Figs", "Squash", "Apples"],
  },
  { 
    id: "winter", 
    name: "Winter", 
    icon: Snowflake, 
    months: "Dec - Feb",
    color: "bg-blue-500",
    featured: ["Citrus", "Dates", "Cabbage", "Root Vegetables"],
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
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Seasonal Intelligence
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Seasonal Availability
              <br />
              <span className="text-accent">Calendar</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Our dynamic seasonal system provides real-time availability data 
              across Egypt and UAE regions. Know exactly what's in peak, 
              what's starting, and plan your supply accordingly.
            </p>
            
            {/* Season Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {seasons.map((season) => (
                <div
                  key={season.id}
                  className={`p-4 rounded-xl border transition-all ${
                    season.id === currentSeason
                      ? "bg-accent/20 border-accent/30"
                      : "bg-primary-foreground/5 border-primary-foreground/10"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-lg ${season.color} flex items-center justify-center`}>
                      <season.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{season.name}</p>
                      <p className="text-xs text-primary-foreground/60">{season.months}</p>
                    </div>
                  </div>
                  {season.id === currentSeason && (
                    <span className="inline-block px-2 py-0.5 rounded text-xs bg-accent text-accent-foreground font-medium mt-1">
                      Current Season
                    </span>
                  )}
                </div>
              ))}
            </div>

            <Link
              to="/seasonal"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              View Full Calendar
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Right - Featured Products */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-primary-foreground/5 rounded-3xl border border-primary-foreground/10 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-primary-foreground/60 text-sm mb-1">What's In Peak</p>
                  <h3 className="font-display text-2xl font-bold text-accent">
                    {seasons.find(s => s.id === currentSeason)?.name} Harvest
                  </h3>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
                  {(() => {
                    const Season = seasons.find(s => s.id === currentSeason)?.icon || Sun;
                    return <Season className="w-8 h-8 text-accent" />;
                  })()}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {seasons.find(s => s.id === currentSeason)?.featured.map((product, i) => (
                  <motion.div
                    key={product}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                    className="px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/5"
                  >
                    <p className="font-medium">{product}</p>
                    <p className="text-xs text-primary-foreground/60">Peak availability</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-primary-foreground/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-primary-foreground/60 mb-1">Available in</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 rounded bg-primary-foreground/10 text-xs font-medium">🇪🇬 Egypt</span>
                      <span className="px-2 py-1 rounded bg-primary-foreground/10 text-xs font-medium">🇦🇪 UAE</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-primary-foreground/60 mb-1">Next season starts</p>
                    <p className="text-sm font-medium text-accent">
                      {seasons[(seasons.findIndex(s => s.id === currentSeason) + 1) % 4].name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
