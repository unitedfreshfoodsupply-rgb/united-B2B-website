import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

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
    { name: "Operations Hub", href: "/operations" },
    { name: "Quality & Compliance", href: "/quality" },
    { name: "Supply Network", href: "/network" },
    { name: "Careers", href: "/careers" },
  ],
  resources: [
    { name: "Seasonal Calendar", href: "/seasonal" },
    { name: "Industry Solutions", href: "/solutions" },
    { name: "Delivery Information", href: "/programs" },
    { name: "Partner Portal", href: "/portal" },
    { name: "FAQ", href: "/faq" },
  ],
};

const regions = [
  {
    name: "Egypt Hub",
    address: "New Cairo HQ, Logistics Zone",
    phone: "+20 10 2202 3344",
    email: "egypt@uniteda.com",
    flag: "🇪🇬"
  },
  {
    name: "UAE Hub",
    address: "Business Bay, Dubai",
    phone: "+971 4 454 2200",
    email: "uae@uniteda.com",
    flag: "🇦🇪"
  },
];

export function Footer() {
  return (
    <footer className="bg-muted/30 text-foreground border-t border-border">
      {/* Main Footer */}
      <div className="container-wide py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/10 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-primary-foreground font-black text-2xl">U</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-3xl tracking-tighter leading-none text-foreground">UNITEDA</span>
                <span className="text-xs text-accent font-bold tracking-wider uppercase mt-1">Agricultural Supply</span>
              </div>
            </Link>

            <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-sm">
              Delivering premium fresh produce to hospitality and food service industries across Egypt and UAE with uncompromising quality and reliability.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-2xl bg-muted border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-2 group transition-colors">
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-2 group transition-colors">
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-2 group transition-colors">
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions Hubs */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-6">Regional Offices</h4>
            <div className="space-y-6">
              {regions.map((region) => (
                <div key={region.name} className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold tracking-tight text-foreground">
                    <span>{region.flag}</span>
                    {region.name}
                  </div>
                  <div className="space-y-1 text-xs font-medium text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <MapPin size={12} className="text-primary" />
                      {region.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={12} className="text-primary" />
                      {region.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-border">
        <div className="container-wide py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-medium text-muted-foreground">
            © {new Date().getFullYear()} UNITEDA Agricultural Supply. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
