import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Plane, ShoppingBag, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProduce from "@/assets/hero-produce.jpg";

const industries = [
  { icon: Building2, label: "Hotels" },
  { icon: Utensils, label: "Restaurants" },
  { icon: Plane, label: "Airlines" },
  { icon: ShoppingBag, label: "Retail" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroProduce} 
          alt="Fresh produce" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            <span className="text-sm font-medium">Serving Egypt & UAE</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6"
          >
            Premium Agricultural
            <br />
            <span className="text-accent">Supply Partner</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/80 max-w-xl mb-8 leading-relaxed"
          >
            Delivering farm-fresh fruits, vegetables, and specialty produce to 
            hospitality and food service industries with uncompromising quality 
            and reliability.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button variant="accent" size="xl" asChild>
              <Link to="/rfq">
                Request Quote
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button variant="outline-light" size="xl" asChild>
              <Link to="/products">Explore Products</Link>
            </Button>
          </motion.div>

          {/* Industry Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-primary-foreground/60 text-sm mb-4 uppercase tracking-wider">Trusted by</p>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <div
                  key={industry.label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10"
                >
                  <industry.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-primary-foreground">{industry.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 bg-primary-foreground/10 backdrop-blur-lg border-t border-primary-foreground/10"
      >
        <div className="container-wide py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "200+", label: "Product Varieties" },
              { value: "50+", label: "Active Partners" },
              { value: "2", label: "Regional Offices" },
              { value: "24/7", label: "Supply Capability" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-display text-2xl sm:text-3xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
