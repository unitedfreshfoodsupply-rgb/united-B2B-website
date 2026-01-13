import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Droplets, Snowflake, Leaf, Info } from "lucide-react";

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const seasonalProducts = [
  {
    name: "Strawberries",
    category: "Fruits",
    egypt: [0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0],
    uae: [1, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1],
  },
  {
    name: "Mangoes",
    category: "Fruits",
    egypt: [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0],
    uae: [0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0],
  },
  {
    name: "Valencia Oranges",
    category: "Fruits",
    egypt: [2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2],
    uae: [2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2],
  },
  {
    name: "Pomegranates",
    category: "Fruits",
    egypt: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0],
    uae: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1],
  },
  {
    name: "Tomatoes",
    category: "Vegetables",
    egypt: [2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2],
    uae: [2, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2],
  },
  {
    name: "Bell Peppers",
    category: "Vegetables",
    egypt: [2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2],
    uae: [2, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2],
  },
  {
    name: "Asparagus",
    category: "Vegetables",
    egypt: [0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0],
    uae: [0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    name: "Fresh Basil",
    category: "Herbs",
    egypt: [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
    uae: [2, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2],
  },
];

const currentMonth = new Date().getMonth();

const getAvailabilityColor = (value: number) => {
  if (value === 2) return "bg-accent";
  if (value === 1) return "bg-accent/40";
  return "bg-muted";
};

const getAvailabilityLabel = (value: number) => {
  if (value === 2) return "Peak";
  if (value === 1) return "Available";
  return "Off-season";
};

const seasons = [
  { name: "Spring", icon: Leaf, months: "Mar - May", color: "text-green-500" },
  { name: "Summer", icon: Sun, months: "Jun - Aug", color: "text-amber-500" },
  { name: "Autumn", icon: Droplets, months: "Sep - Nov", color: "text-orange-500" },
  { name: "Winter", icon: Snowflake, months: "Dec - Feb", color: "text-blue-500" },
];

export default function SeasonalPage() {
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
              Seasonal Intelligence
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Seasonal Availability Calendar
            </h1>
            <p className="text-muted-foreground text-lg">
              Plan your supply needs with our real-time seasonal availability data.
              Know what's in peak, what's available, and plan ahead for optimal sourcing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Season Overview */}
      <section className="py-8 border-b border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {seasons.map((season, i) => (
              <motion.div
                key={season.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <season.icon className={`w-6 h-6 ${season.color}`} />
                <div>
                  <p className="font-semibold text-foreground">{season.name}</p>
                  <p className="text-xs text-muted-foreground">{season.months}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Table */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-accent" />
                <span className="text-sm text-muted-foreground">Peak Season</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-accent/40" />
                <span className="text-sm text-muted-foreground">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-muted" />
                <span className="text-sm text-muted-foreground">Off-season</span>
              </div>
            </div>
          </div>

          {/* Egypt Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span>🇪🇬</span> Egypt Availability
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Product</th>
                    <th className="text-left py-3 px-2 text-muted-foreground text-sm">Category</th>
                    {months.map((month, i) => (
                      <th
                        key={month}
                        className={`py-3 px-2 text-center text-sm ${i === currentMonth ? "text-accent font-bold" : "text-muted-foreground"}`}
                      >
                        {month}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {seasonalProducts.map((product) => (
                    <tr key={product.name} className="border-b border-border/50 hover:bg-muted/30">
                      <td className="py-3 px-4 font-medium text-foreground">{product.name}</td>
                      <td className="py-3 px-2 text-sm text-muted-foreground">{product.category}</td>
                      {product.egypt.map((value, i) => (
                        <td key={i} className="py-3 px-2 text-center">
                          <div
                            className={`w-8 h-8 mx-auto rounded-lg ${getAvailabilityColor(value)} ${i === currentMonth ? "ring-2 ring-accent ring-offset-2" : ""}`}
                            title={getAvailabilityLabel(value)}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* UAE Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span>🇦🇪</span> UAE Availability
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Product</th>
                    <th className="text-left py-3 px-2 text-muted-foreground text-sm">Category</th>
                    {months.map((month, i) => (
                      <th
                        key={month}
                        className={`py-3 px-2 text-center text-sm ${i === currentMonth ? "text-accent font-bold" : "text-muted-foreground"}`}
                      >
                        {month}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {seasonalProducts.map((product) => (
                    <tr key={product.name} className="border-b border-border/50 hover:bg-muted/30">
                      <td className="py-3 px-4 font-medium text-foreground">{product.name}</td>
                      <td className="py-3 px-2 text-sm text-muted-foreground">{product.category}</td>
                      {product.uae.map((value, i) => (
                        <td key={i} className="py-3 px-2 text-center">
                          <div
                            className={`w-8 h-8 mx-auto rounded-lg ${getAvailabilityColor(value)} ${i === currentMonth ? "ring-2 ring-accent ring-offset-2" : ""}`}
                            title={getAvailabilityLabel(value)}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10"
          >
            <div className="flex gap-4">
              <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Planning Your Supply</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Seasonal availability may vary based on weather conditions and farm yields.
                  For off-season items, we can source through our import network.
                  Contact our sales team for custom supply programs and volume commitments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-bold mb-4">
              Need Custom Supply Programs?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              We can design year-round supply programs with import alternatives
              for off-season periods.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/rfq">
                Request Quote
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
