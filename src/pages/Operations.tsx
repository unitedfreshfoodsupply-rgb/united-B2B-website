import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Factory, 
  Truck, 
  Thermometer, 
  Package, 
  Shield, 
  CheckCircle2,
  Users,
  Leaf,
  Award
} from "lucide-react";
import operationsFacility from "@/assets/operations-facility.jpg";
import microgreens from "@/assets/microgreens.jpg";

const supplySteps = [
  {
    step: 1,
    title: "Sourcing & Farm Partnerships",
    description: "Direct relationships with certified farms across Egypt and strategic import channels for exotic produce. We maintain year-round quality through diversified sourcing.",
    icon: Leaf,
    details: ["Certified farm network", "Import partnerships", "Seasonal planning"],
  },
  {
    step: 2,
    title: "Receiving & Inspection",
    description: "Every batch undergoes rigorous quality inspection upon arrival. Our QA team verifies grade, freshness, and compliance with specifications.",
    icon: CheckCircle2,
    details: ["Batch inspection", "Quality grading", "Documentation"],
  },
  {
    step: 3,
    title: "Sorting & Processing",
    description: "Advanced sorting lines separate products by size, grade, and quality. Processing includes cleaning, trimming, and preparation for packaging.",
    icon: Factory,
    details: ["Automated sorting", "Quality grading", "Preparation"],
  },
  {
    step: 4,
    title: "Cold Storage",
    description: "State-of-the-art refrigeration systems maintain optimal temperatures for each product category. Real-time monitoring ensures chain integrity.",
    icon: Thermometer,
    details: ["Multi-zone cooling", "24/7 monitoring", "Chain integrity"],
  },
  {
    step: 5,
    title: "Packing & Labeling",
    description: "Custom packing solutions meeting hospitality and retail specifications. Full traceability labeling and compliance documentation.",
    icon: Package,
    details: ["Custom packaging", "Traceability", "Compliance labels"],
  },
  {
    step: 6,
    title: "Distribution & Delivery",
    description: "Temperature-controlled fleet ensures farm-to-client freshness. Optimized routes and real-time tracking for reliable delivery.",
    icon: Truck,
    details: ["Controlled fleet", "Route optimization", "Live tracking"],
  },
];

const certifications = [
  { name: "HACCP", description: "Hazard Analysis Critical Control Points" },
  { name: "ISO 22000", description: "Food Safety Management" },
  { name: "GlobalGAP", description: "Good Agricultural Practice" },
];

const stats = [
  { value: "15,000+", label: "sqm Facility Space" },
  { value: "99.2%", label: "On-Time Delivery" },
  { value: "200+", label: "Product Varieties" },
  { value: "24/7", label: "Cold Chain Monitoring" },
];

export default function OperationsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={operationsFacility} 
            alt="UNITEDA Operations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        <div className="container-wide relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Operations Excellence
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              World-Class
              <br />
              <span className="text-accent">Supply Infrastructure</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl">
              From farm to client, we maintain complete control and visibility 
              over every step of the supply chain, ensuring uncompromising quality 
              and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-b border-border">
        <div className="container-wide py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Steps */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              End-to-End Control
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Supply Chain
            </h2>
            <p className="text-muted-foreground text-lg">
              Six integrated stages ensuring quality, traceability, 
              and reliability from source to delivery.
            </p>
          </motion.div>

          <div className="space-y-6">
            {supplySteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-6 items-center"
              >
                <div className={`p-8 rounded-3xl bg-card border border-border ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Step {step.step}</span>
                      <h3 className="font-display text-xl font-bold text-foreground">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail) => (
                      <span key={detail} className="px-3 py-1 rounded-lg bg-muted text-sm text-muted-foreground">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`hidden md:block ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="h-2 bg-gradient-to-r from-primary/20 via-accent to-primary/20 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Quality Assurance
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Certified for Excellence
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our operations are backed by internationally recognized certifications, 
                ensuring the highest standards of food safety and quality management.
              </p>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-floating">
                <img 
                  src={microgreens} 
                  alt="Quality produce" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              See Our Operations in Action
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Schedule a facility tour or request a detailed operations overview 
              for your procurement team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="xl" asChild>
                <Link to="/rfq">
                  Request Quote
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="outline-light" size="xl" asChild>
                <Link to="/contact">Schedule a Tour</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
