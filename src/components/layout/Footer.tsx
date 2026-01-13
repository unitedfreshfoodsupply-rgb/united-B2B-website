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
    { name: "Harvest Engine", href: "/seasonal" },
    { name: "Industry Intelligence", href: "/solutions" },
    { name: "Logistics Specs", href: "/programs" },
    { name: "Partner Portal", href: "/portal" },
    { name: "FAQ Infrastructure", href: "/faq" },
  ],
};

const regions = [
  {
    name: "Egypt Hub",
    address: "Cairo, Egypt",
    phone: "+20 2 XXXX XXXX",
    email: "egypt@uniteda.com",
    flag: "🇪🇬"
  },
  {
    name: "UAE Hub",
    address: "Dubai, UAE",
    phone: "+971 4 XXX XXXX",
    email: "uae@uniteda.com",
    flag: "🇦🇪"
  },
];

export function Footer() {
  return (
    <footer className="bg-uniteda-emerald-dark text-white border-t border-white/5">
      {/* Main Footer */}
      <div className="container-wide py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-uniteda-gold flex items-center justify-center shadow-xl shadow-uniteda-gold/10 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-uniteda-emerald-dark font-black text-2xl">U</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-3xl tracking-tighter leading-none">UNITEDA</span>
                <span className="text-[10px] text-uniteda-gold font-black tracking-widest uppercase mt-1">المتحدة للتموين</span>
              </div>
            </Link>

            <p className="text-white/40 text-sm font-medium leading-relaxed max-w-sm">
              Architecting the next generation of agricultural supply. We unify regional production with global hospitality standards through a data-driven logistics engine.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-uniteda-gold hover:text-uniteda-emerald-dark transition-all duration-500"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-uniteda-gold mb-8">Supply Portfolio</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-bold text-white/50 hover:text-white flex items-center gap-2 group transition-colors">
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-uniteda-gold mb-8">Company Engine</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-bold text-white/50 hover:text-white flex items-center gap-2 group transition-colors">
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-uniteda-gold mb-8">Intelligence</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-bold text-white/50 hover:text-white flex items-center gap-2 group transition-colors">
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions Hubs */}
          <div className="col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-uniteda-gold mb-8">Logistics Hubs</h4>
            <div className="space-y-6">
              {regions.map((region) => (
                <div key={region.name} className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-black tracking-tight">
                    <span>{region.flag}</span>
                    {region.name}
                  </div>
                  <div className="space-y-1 text-[11px] font-bold text-white/30 uppercase tracking-widest">
                    <p className="flex items-center gap-2">
                      <MapPin size={10} className="text-uniteda-gold" />
                      {region.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={10} className="text-uniteda-gold" />
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
      <div className="border-t border-white/5">
        <div className="container-wide py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
            © {new Date().getFullYear()} UNITEDA ARCHITECTURE. ASYNC SUPPLY LOGIC.
          </p>
          <div className="flex gap-12">
            <Link to="/privacy" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 hover:text-uniteda-gold transition-colors">
              Privacy Layer
            </Link>
            <Link to="/terms" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 hover:text-uniteda-gold transition-colors">
              Terms of Supply
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
