import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              Start Your Partnership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Elevate Your
              <br />
              Supply Chain?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              Submit a structured business request and our team will provide 
              a comprehensive supply proposal tailored to your operational needs.
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-6 mb-10"
          >
            {[
              { icon: FileText, title: "Submit Request", desc: "Complete our structured RFQ form" },
              { icon: Clock, title: "Get Response", desc: "Receive proposal within 24-48 hours" },
              { icon: CheckCircle, title: "Start Supply", desc: "Begin your partnership" },
            ].map((step, index) => (
              <div
                key={step.title}
                className="p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/10"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm text-primary-foreground/70">{step.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button variant="accent" size="xl" asChild>
              <Link to="/rfq">
                Request Quote
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button variant="outline-light" size="xl" asChild>
              <Link to="/contact">Contact Sales Team</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
