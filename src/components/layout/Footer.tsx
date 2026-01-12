import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Fresh Fruits", href: "/products?category=fruits" },
    { name: "Fresh Vegetables", href: "/products?category=vegetables" },
    { name: "Herbs & Greens", href: "/products?category=herbs" },
    { name: "Microgreens", href: "/products?category=microgreens" },
    { name: "Exotic Produce", href: "/products?category=exotic" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Operations", href: "/operations" },
    { name: "Quality Assurance", href: "/quality" },
    { name: "Certifications", href: "/certifications" },
    { name: "Careers", href: "/careers" },
  ],
  resources: [
    { name: "Seasonal Calendar", href: "/seasonal" },
    { name: "Industry Solutions", href: "/solutions" },
    { name: "Supply Programs", href: "/programs" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ],
};

const regions = [
  {
    name: "Egypt Office",
    address: "Cairo, Egypt",
    phone: "+20 2 XXXX XXXX",
    email: "egypt@uniteda.com",
  },
  {
    name: "UAE Office",
    address: "Dubai, UAE",
    phone: "+971 4 XXX XXXX",
    email: "uae@uniteda.com",
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">U</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tight">UNITEDA</span>
                <span className="text-xs text-primary-foreground/70 tracking-widest uppercase">المتحدة</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs mb-6">
              Your trusted partner for premium agricultural supply across Egypt and UAE. 
              Delivering freshness, quality, and reliability to hospitality and food service industries.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Regions</h4>
            <div className="space-y-4">
              {regions.map((region) => (
                <div key={region.name} className="text-sm">
                  <p className="font-medium text-primary-foreground mb-1">{region.name}</p>
                  <div className="space-y-1 text-primary-foreground/70">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5" />
                      {region.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5" />
                      {region.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} UNITEDA Agricultural Supply. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
