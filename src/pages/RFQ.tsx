import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowRight, Building2, CheckCircle2, FileText, Clock, Truck } from "lucide-react";
import { toast } from "sonner";

const businessTypes = [
  { value: "hotel", label: "Hotel / Resort" },
  { value: "restaurant", label: "Restaurant / Catering" },
  { value: "airline", label: "Airline Catering" },
  { value: "supermarket", label: "Supermarket / Retail" },
  { value: "distributor", label: "Food Distributor" },
  { value: "processor", label: "Food Processor" },
  { value: "other", label: "Other" },
];

const volumeRanges = [
  { value: "small", label: "< 500 kg/month" },
  { value: "medium", label: "500 - 2,000 kg/month" },
  { value: "large", label: "2,000 - 10,000 kg/month" },
  { value: "enterprise", label: "10,000+ kg/month" },
];

const frequencies = [
  { value: "daily", label: "Daily" },
  { value: "weekly-2", label: "2-3 times/week" },
  { value: "weekly", label: "Weekly" },
  { value: "biweekly", label: "Bi-weekly" },
  { value: "monthly", label: "Monthly" },
];

const productCategories = [
  "Fresh Fruits",
  "Fresh Vegetables",
  "Herbs & Greens",
  "Microgreens",
  "Exotic Produce",
  "Specialty Items",
];

export default function RFQPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("Request submitted successfully!", {
      description: "Our team will review your request and respond within 24-48 hours.",
    });

    setIsSubmitting(false);
  };

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
              Business Request
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Request a Quote
            </h1>
            <p className="text-muted-foreground text-lg">
              Complete the form below to submit a structured business request.
              Our sales team will prepare a comprehensive proposal tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding pt-12">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Business Information */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    Business Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" placeholder="Your company name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypes.map(type => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="egypt">Egypt</SelectItem>
                          <SelectItem value="uae">United Arab Emirates</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" placeholder="Your city" required />
                    </div>
                  </div>
                </div>

                {/* Supply Requirements */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    Supply Requirements
                  </h2>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label>Product Categories of Interest *</Label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {productCategories.map(category => (
                          <div
                            key={category}
                            className="flex items-center space-x-3"
                          >
                            <Checkbox
                              id={category}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => handleCategoryToggle(category)}
                            />
                            <Label htmlFor={category} className="font-normal cursor-pointer">
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="volume">Estimated Monthly Volume *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select volume range" />
                          </SelectTrigger>
                          <SelectContent>
                            {volumeRanges.map(vol => (
                              <SelectItem key={vol.value} value={vol.value}>
                                {vol.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="frequency">Delivery Frequency *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            {frequencies.map(freq => (
                              <SelectItem key={freq.value} value={freq.value}>
                                {freq.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="requirements">Specific Requirements</Label>
                      <Textarea
                        id="requirements"
                        placeholder="Describe any specific product requirements, quality grades, packing specifications, or compliance needs..."
                        rows={4}
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Contact Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Contact Name *</Label>
                      <Input id="name" placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position / Title</Label>
                      <Input id="position" placeholder="Your position" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+20 XXX XXX XXXX" required />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex items-center gap-4">
                  <Button type="submit" variant="hero" size="xl" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    We'll respond within 24-48 business hours
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Process */}
              <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                <h3 className="font-display text-lg font-semibold mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  {[
                    { icon: FileText, text: "Our team reviews your request" },
                    { icon: Clock, text: "We prepare a tailored proposal" },
                    { icon: CheckCircle2, text: "Connect with your account manager" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                        <step.icon className="w-4 h-4 text-accent" />
                      </div>
                      <p className="text-sm text-primary-foreground/90 pt-1">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent inquiries, reach our sales team directly:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">Egypt: +20 10 2202 3344</p>
                  <p className="font-medium">UAE: +971 4 454 2200</p>
                  <p className="text-muted-foreground">sales@uniteda.com</p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                <h3 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["HACCP", "ISO 22000", "GlobalGAP"].map(cert => (
                    <span key={cert} className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
