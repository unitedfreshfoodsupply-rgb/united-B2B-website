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
  Award,
  Zap,
  Globe
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
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-[#fafafa]">
        {/* Decorative Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-uniteda-emerald/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-uniteda-gold/5 rounded-full blur-[100px] -ml-48 -mb-48" />

        <div className="container-wide relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-uniteda-emerald/5 border border-uniteda-emerald/10 text-uniteda-emerald mb-4"
              >
                <Shield size={14} className="animate-pulse" />
                <span className="text-xs font-black tracking-widest uppercase">Operations Excellence</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-6xl md:text-7xl xl:text-8xl font-black text-uniteda-emerald-dark leading-[0.95] tracking-tighter"
              >
                World-Class <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-uniteda-emerald to-uniteda-gold">
                  Supply Infra
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-lg leading-relaxed font-medium"
              >
                From farm to client, we maintain complete control and visibility over every step of the supply chain, ensuring uncompromising quality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="xl" className="rounded-full bg-uniteda-emerald hover:bg-uniteda-emerald-dark text-white px-10 py-8 text-lg font-bold shadow-2xl shadow-uniteda-emerald/20 transition-all hover:scale-105" asChild>
                  <Link to="/rfq">
                    Launch Inquiry Hub
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Right Column: Visual Bento */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="col-span-2 h-[400px] rounded-[2.5rem] bg-uniteda-emerald-dark overflow-hidden relative group shadow-2xl"
                >
                  <img
                    src={operationsFacility}
                    alt="Operations Facility"
                    className="w-full h-full object-cover mix-blend-overlay opacity-60 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                      <Factory className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white tracking-tight">Enterprise Infrastructure</h3>
                    <p className="text-white/80 font-medium">15,000+ sqm Controlled Environment</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-[180px] rounded-[2rem] glass-panel p-8 flex flex-col justify-center gap-2 border border-white/40 shadow-xl"
                >
                  <div className="text-4xl font-black text-uniteda-emerald tracking-tighter">24/7</div>
                  <p className="text-sm font-bold text-uniteda-emerald-dark/60 uppercase tracking-widest leading-tight">Proactive <br /> Monitoring</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="h-[180px] rounded-[2rem] bg-uniteda-gold p-8 flex flex-col justify-center gap-2 text-white shadow-xl shadow-uniteda-gold/20"
                >
                  <div className="text-4xl font-black tracking-tighter">99.2%</div>
                  <p className="text-white/80 text-sm font-bold uppercase tracking-widest leading-tight">Delivery <br /> Precision</p>
                </motion.div>
              </div>

              {/* Floating Certification Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 glass-panel rounded-3xl p-6 shadow-2xl border border-white/40 max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-uniteda-emerald/10 flex items-center justify-center">
                    <Award className="text-uniteda-emerald w-5 h-5" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-uniteda-emerald-dark">HACCP <br /> Certified</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Steps */}
      <section className="section-padding relative overflow-hidden bg-white/50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-uniteda-emerald/5 border border-uniteda-emerald/10 text-uniteda-emerald mb-6">
              <Zap size={14} className="animate-pulse" />
              <span className="text-xs font-black tracking-widest uppercase">End-to-End Control</span>
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-uniteda-emerald-dark mb-6 tracking-tighter">
              The UNITEDA <span className="text-transparent bg-clip-text bg-gradient-to-r from-uniteda-emerald to-uniteda-gold">Supply Logic</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Six synchronized stages ensuring total traceability and uncompromising freshness from heritage sources to premium destinations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplySteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-[2.5rem] glass-panel border-white/40 hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col h-full bg-white/60"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-uniteda-emerald to-uniteda-emerald-light flex items-center justify-center shadow-lg shadow-uniteda-emerald/20 group-hover:rotate-6 transition-transform">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-5xl font-black text-uniteda-emerald/10 select-none">0{step.step}</span>
                </div>

                <h3 className="text-2xl font-bold text-uniteda-emerald-dark mb-4 tracking-tight group-hover:text-uniteda-emerald transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-medium mb-8 flex-grow leading-relaxed">
                  {step.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-uniteda-emerald/5">
                  {step.details.map((detail) => (
                    <span key={detail} className="px-3 py-1.5 rounded-xl bg-uniteda-emerald/5 text-xs font-bold text-uniteda-emerald uppercase tracking-wider">
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding relative">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-uniteda-gold/10 border border-uniteda-gold/20 text-uniteda-gold mb-6">
                <Shield size={14} className="animate-spin-slow" />
                <span className="text-xs font-black tracking-widest uppercase">Quality Assurance</span>
              </span>
              <h2 className="text-5xl font-black text-uniteda-emerald-dark mb-8 tracking-tighter">
                Certified for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-uniteda-gold to-orange-500">Global Trust</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium mb-10 leading-relaxed">
                Our operations are governed by world-class safety protocols. We don't just supply produce; we deliver peace of mind through audited excellence.
              </p>

              <div className="grid gap-4">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.name}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-6 rounded-3xl glass-panel border-white/60 bg-white/40 shadow-lg hover:shadow-xl transition-all group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-uniteda-gold/10 flex items-center justify-center group-hover:bg-uniteda-gold/20 transition-colors">
                      <Award className="w-7 h-7 text-uniteda-gold" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-uniteda-emerald-dark tracking-tight">{cert.name}</p>
                      <p className="text-muted-foreground font-medium">{cert.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-uniteda-gold to-uniteda-emerald rounded-[3rem] opacity-20 blur-2xl animate-pulse" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-floating border-8 border-white">
                <img
                  src={microgreens}
                  alt="Quality Produce"
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Refined CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[3.5rem] bg-uniteda-emerald-dark p-12 md:p-24 relative overflow-hidden shadow-2xl"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-uniteda-emerald/20 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-uniteda-gold/10 rounded-full blur-[80px] -ml-24 -mb-24" />

            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-10">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                Experience the <br />
                <span className="text-uniteda-emerald">UNITEDA Difference</span>
              </h2>
              <p className="text-xl text-white/70 font-medium">
                Sync your procurement with our world-class logic. Schedule a session or request immediate access to our hub.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Button size="xl" className="rounded-full bg-uniteda-emerald hover:bg-uniteda-emerald-dark text-white px-12 py-8 text-lg font-bold shadow-2xl shadow-uniteda-emerald/40 transition-all hover:scale-105" asChild>
                  <Link to="/rfq">
                    Start Inquiry Hub
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="rounded-full border-2 border-white/20 text-white hover:bg-white/10 px-12 py-8 text-lg font-bold transition-all" asChild>
                  <Link to="/contact">Book Facility Tour</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
