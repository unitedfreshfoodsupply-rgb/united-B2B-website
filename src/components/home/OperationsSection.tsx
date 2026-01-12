import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Thermometer, CheckCircle2, Package, Factory, Shield } from "lucide-react";
import operationsFacility from "@/assets/operations-facility.jpg";

const operations = [
  {
    icon: Factory,
    title: "Sourcing & Farms",
    description: "Direct partnerships with certified farms across Egypt and import channels for exotic produce.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Control",
    description: "Multi-stage inspection process with documented grading and compliance verification.",
  },
  {
    icon: Thermometer,
    title: "Cold Storage",
    description: "State-of-the-art refrigeration maintaining optimal temperatures for each product type.",
  },
  {
    icon: Package,
    title: "Packing & Processing",
    description: "Customized packing solutions meeting hospitality and retail specifications.",
  },
  {
    icon: Truck,
    title: "Distribution",
    description: "Temperature-controlled fleet ensuring farm-to-client freshness across Egypt and UAE.",
  },
  {
    icon: Shield,
    title: "Compliance",
    description: "HACCP, ISO 22000, and regional food safety certifications maintained across operations.",
  },
];

export function OperationsSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-floating">
              <img 
                src={operationsFacility} 
                alt="UNITEDA Operations Facility" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-primary-foreground/80 text-sm mb-2">Our Facilities</p>
                <h3 className="font-display text-2xl font-bold text-primary-foreground">
                  World-Class Operations Infrastructure
                </h3>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-elevated border border-border p-6"
            >
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-display text-3xl font-bold text-primary">15K+</p>
                  <p className="text-sm text-muted-foreground">sqm Facility</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-accent">99.2%</p>
                  <p className="text-sm text-muted-foreground">On-Time Delivery</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Operations Excellence
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              End-to-End Supply
              <br />
              <span className="text-primary">Chain Control</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From farm partnerships to final delivery, we maintain complete visibility 
              and control over every step of the supply chain, ensuring consistent quality 
              and reliability.
            </p>

            {/* Operations Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {operations.map((op, index) => (
                <motion.div
                  key={op.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <op.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{op.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{op.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/operations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Explore Our Operations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
