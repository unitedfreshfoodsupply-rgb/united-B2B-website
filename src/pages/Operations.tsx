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
      {/* Phase 1: System Awakening (Hero) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-uniteda-emerald-dark">
        {/* Background Systems */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 neural-grid opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-uniteda-emerald-dark/50 to-uniteda-emerald-dark" />
          <div className="scanline" />

          {/* Animated Glows */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] glow-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px] glow-pulse" />
        </div>

        <div className="container-wide relative z-10 py-12">
          <div className="max-w-5xl mx-auto">
            {/* System Status Indicators */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-infra text-accent">System Status: Active</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="text-infra text-primary-foreground/40">Terminal Node: MENA_HUB_01</span>
              </div>
            </motion.div>

            {/* Main Interface HUD */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="hud-border p-8 sm:p-12 md:p-16 rounded-[2rem] bg-white/[0.02] backdrop-blur-3xl overflow-hidden shadow-2xl"
              >
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="text-infra text-accent/60 mb-4 block">Infrastructure Overview</span>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-bold text-primary-foreground leading-[0.85] tracking-tighter mb-8">
                      OPERATIONAL<br />
                      <span className="text-accent">PRECISION</span>
                    </h1>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-10"
                  >
                    <p className="text-lg md:text-xl text-primary-foreground/60 max-w-xl font-light leading-relaxed">
                      Deploying high-precision cold chain infrastructure and automated sorting systems across Egypt's strategic agricultural nodes. Engineering the future of enterprise supply chains.
                    </p>

                    <div className="flex items-center gap-4 group">
                      <div className="h-px w-12 bg-white/20 hidden lg:block group-hover:w-20 transition-all duration-500" />
                      <Button variant="accent" size="xl" className="font-bold tracking-tight px-10" asChild>
                        <Link to="/rfq">
                          INITIALIZE INQUIRY
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>

                {/* Technical Decorations */}
                <div className="absolute top-0 right-0 p-6 opacity-20 hidden lg:block">
                  <div className="text-[10px] font-mono leading-loose text-white text-right">
                    DECRYPT: OPS_SEC_01_PROD<br />
                    LAT: 30.0444° N / LON: 31.2357° E<br />
                    STABILITY: 99.98% / FLOW: NOMINAL
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1.5: Live KPI Layer */}
      <section className="bg-uniteda-emerald-dark border-y border-white/5 py-8 relative overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-10" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="text-infra text-accent/40 mb-2 flex items-center gap-2">
                  <div className="w-1 h-1 bg-accent/40 rounded-full" />
                  KPI_0{i + 1}
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tighter group-hover:text-accent transition-colors duration-500">
                    {stat.value}
                  </span>
                  <span className="text-sm text-primary-foreground/40 font-mono uppercase tracking-[0.2em] mt-1">
                    {stat.label}
                  </span>
                </div>

                {/* Tech Deco */}
                <div className="absolute -bottom-4 left-0 w-8 h-px bg-accent/20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 2: System Anatomy (Subsystems) */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative Grid background for Phase 2 */}
        <div className="absolute inset-0 neural-grid opacity-[0.03] pointer-events-none" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 max-w-3xl"
          >
            <div className="text-infra text-accent mb-4">Phase_02 // System Anatomy</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground tracking-tighter mb-6">
              OPERATIONAL <span className="text-primary/30 text-infra font-display">SUBSYSTEMS</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our infrastructure is partitioned into four core architectural layers, each engineered for maximum throughput and uncompromising quality control.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Subsystem 01: Procurement & Backbone */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hud-border p-8 rounded-[2.5rem] bg-muted/20 group hover:bg-muted/40 transition-colors duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Leaf className="w-8 h-8" />
                </div>
                <div className="text-infra text-primary/40">LAYER_01 // BACKBONE</div>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Procurement & Backbone</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                Direct farm-gate access and strategic sourcing channels managing 15,000+ sqm of active agricultural integration.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Certified Network", "Direct Sourcing", "Scale Management"].map(item => (
                  <div key={item} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/50 border border-black/5 text-xs font-mono uppercase tracking-wider">
                    <div className="w-1 h-1 bg-accent rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Subsystem 02: Thermal Integrity */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="hud-border p-8 rounded-[2.5rem] bg-uniteda-emerald-dark text-white group"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-uniteda-emerald-dark transition-all duration-500">
                  <Thermometer className="w-8 h-8" />
                </div>
                <div className="text-infra text-white/20">LAYER_02 // THERMAL</div>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Thermal Integrity</h3>
              <p className="text-white/60 mb-8 text-sm leading-relaxed">
                Multi-zone cryogenic and cold storage environments with 24/7 automated telemetry and chain-of-custody tracking.
              </p>
              <div className="space-y-3">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-accent"
                  />
                </div>
                <div className="flex justify-between text-infra text-accent">
                  <span>Monitoring Active</span>
                  <span>Flow: NOMINAL</span>
                </div>
              </div>
            </motion.div>

            {/* Subsystem 03: Precision Processing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hud-border p-8 rounded-[2.5rem] bg-muted/20 group hover:bg-muted/40 transition-colors duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Factory className="w-8 h-8" />
                </div>
                <div className="text-infra text-primary/40">LAYER_03 // PRECISION</div>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Precision Processing</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                Automated grading systems and custom preparation lines engineered for hospitality-grade specifications.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Laser Grading", "Custom Trimming", "Traceable Packaging"].map(item => (
                  <span key={item} className="px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-[10px] font-bold text-accent tracking-tighter uppercase">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Subsystem 04: Intelligent Logistics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hud-border p-8 rounded-[2.5rem] bg-muted/20 group hover:bg-muted/40 transition-colors duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Truck className="w-8 h-8" />
                </div>
                <div className="text-infra text-primary/40">LAYER_04 // LOGISTICS</div>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Intelligent Logistics</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                Smart-routed distribution fleet with integrated IoT tracking, ensuring farm-to-table integrity in every mile.
              </p>
              <div className="flex items-center gap-4 text-infra text-primary/60">
                <div className="flex-1 h-[1px] bg-primary/10" />
                <ArrowRight className="w-4 h-4 animate-pulse" />
                <div className="flex-1 h-[1px] bg-primary/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phase 3: Proof & Authority (Compliance Infrastructure) */}
      <section className="py-20 bg-muted/20 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-infra text-accent mb-4">Phase_03 // Proof & Authority</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tighter mb-8 leading-tight">
                COMPLIANCE <span className="text-primary/40">INFRASTRUCTURE</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Our operational integrity is verified through a multi-layered compliance framework. We don't just meet standards; we engineer them into our core subsystems.
              </p>
              <div className="grid gap-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 rounded-2xl bg-white border border-black/5 shadow-sm group hover:border-accent/40 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <Award className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-[10px] font-mono text-accent/60 uppercase tracking-widest">Reg_Verified</span>
                          <span className="h-px w-8 bg-black/5" />
                        </div>
                        <h4 className="font-display font-bold text-foreground text-lg">{cert.name}</h4>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{cert.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Architectural Visual Container */}
              <div className="rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl relative aspect-[4/5]">
                <img
                  src={microgreens}
                  alt="Quality produce"
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-uniteda-emerald-dark/80 via-transparent to-transparent" />

                {/* HUD Overlay on Image */}
                <div className="absolute bottom-10 left-10 right-10 p-8 hud-border bg-white/[0.05] backdrop-blur-md rounded-3xl">
                  <div className="text-infra text-accent mb-2">Subject: Integrated_Bio_Systems</div>
                  <div className="text-white text-sm font-light leading-relaxed">
                    Zero-contamination processing environments maintained at ISO Class 7 equivalent standards.
                  </div>
                </div>
              </div>

              {/* Floating Deco */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phase 4: Strategic Partnership Layer */}
      <section className="py-24 bg-uniteda-emerald-dark relative overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-[0.05]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="container-wide relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-infra text-accent mb-6 tracking-[0.5em]">Phase_04 // Partnership_Gateway</div>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              ACCESS THE <span className="text-accent underline decoration-white/10 underline-offset-[12px]">INFRASTRUCTURE</span>
            </h2>
            <p className="text-white/40 text-xl font-light max-w-2xl mx-auto mb-16 leading-relaxed">
              We provide institutional access to Egypt's most advanced agricultural supply network. Contact our strategic partnership team to initialize integration.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Button variant="accent" size="xl" className="font-infra px-12 h-16 rounded-2xl text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(217,119,6,0.2)]" asChild>
                <Link to="/rfq">
                  REQUEST ACCESS
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
              </Button>
              <Button variant="outline-light" size="xl" className="font-infra px-12 h-16 rounded-2xl text-lg border-white/10 hover:bg-white/5" asChild>
                <Link to="/contact">SYSTEM OVERVIEW</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Technical Footer Deco */}
        <div className="absolute bottom-10 left-10 right-10 flex justify-between text-infra text-white/10 pointer-events-none">
          <span>UNITEDA_INTEL_SYSTEM_v3.4</span>
          <span>EST_ACCESS: MENA_REGION</span>
        </div>
      </section>
    </Layout>
  );
}
