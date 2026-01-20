import { Link } from "react-router-dom";
import { MapPin, Phone, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation('common');

  const footerLinks = {
    products: [
      { id: "fruits", href: "/products?category=fruits" },
      { id: "vegetables", href: "/products?category=vegetables" },
      { id: "herbs", href: "/products?category=herbs" },
      { id: "microgreens", href: "/products?category=microgreens" },
      { id: "exotic", href: "/products?category=exotic" },
    ],
    company: [
      { id: "about", href: "/about" },
      { id: "operations", href: "/operations" },
      { id: "quality", href: "/quality" },
      { id: "network", href: "/network" },
      { id: "careers", href: "/careers" },
    ],
    resources: [
      { id: "seasonal", href: "/seasonal" },
      { id: "solutions", href: "/solutions" },
      { id: "delivery", href: "/programs" },
      { id: "portal", href: "/portal" },
      { id: "faq", href: "/faq" },
    ],
  };

  const regions = [
    {
      id: "egypt",
      phone: "+20 10 2202 3344",
      email: "egypt@uniteda.com",
      flag: "🇪🇬"
    },
    {
      id: "uae",
      phone: "+971 4 454 2200",
      email: "uae@uniteda.com",
      flag: "🇦🇪"
    },
  ];

  return (
    <footer className="bg-muted/30 text-foreground border-t border-border">
      {/* Main Footer */}
      <div className="container-wide py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-xl shadow-primary/10 group-hover:rotate-12 transition-transform duration-500 rtl:group-hover:-rotate-12 overflow-hidden">
                <img src="/logo.png" alt="Uniteda Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-3xl tracking-tighter leading-none text-foreground">{t('brand_short')}</span>
                <span className="text-xs text-accent font-bold tracking-wider uppercase mt-1">{t('footer.brand_slogan')}</span>
              </div>
            </Link>

            <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-sm">
              {t('footer.description')}
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-6">{t('footer.columns.products')}</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.id}>
                  <Link to={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-2 group transition-colors">
                    {t(`footer.links.products.${link.id}`)}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity rtl:rotate-[-90deg]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-6">{t('footer.columns.company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.id}>
                  <Link to={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-2 group transition-colors">
                    {t(`footer.links.company.${link.id}`)}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity rtl:rotate-[-90deg]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-6">{t('footer.columns.resources')}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.id}>
                  <Link to={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-2 group transition-colors">
                    {t(`footer.links.resources.${link.id}`)}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity rtl:rotate-[-90deg]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions Hubs */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-6">{t('footer.columns.resources')}</h4>
            <div className="space-y-6">
              {regions.map((region) => (
                <div key={region.id} className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold tracking-tight text-foreground">
                    <span>{region.flag}</span>
                    {t(`footer.regions.${region.id}.name`)}
                  </div>
                  <div className="space-y-1 text-xs font-medium text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <MapPin size={12} className="text-primary" />
                      {t(`footer.regions.${region.id}.address`)}
                    </p>
                    <p className="flex items-center gap-2" dir="ltr">
                      <Phone size={12} className="text-primary" />
                      <span className="rtl:text-end rtl:w-full">{region.phone}</span>
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
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
