import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ChevronDown, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t, i18n } = useTranslation('common');
  const isRTL = i18n.dir() === 'rtl';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const { scrollY } = useScroll();
  const headerPadding = useTransform(scrollY, [0, 50], ["1.5rem", "0.75rem"]);
  const headerBg = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]);

  const navigation = [
    { name: t('header.nav.home'), href: "/" },
    {
      name: t('header.nav.products'),
      href: "/products",
      children: [
        { name: t('header.products_dropdown.fruits'), href: "/products?category=fruits" },
        { name: t('header.products_dropdown.vegetables'), href: "/products?category=vegetables" },
        { name: t('header.products_dropdown.herbs'), href: "/products?category=herbs" },
        { name: t('header.products_dropdown.microgreens'), href: "/products?category=microgreens" },
        { name: t('header.products_dropdown.exotic'), href: "/products?category=exotic" },
      ]
    },
    { name: t('header.nav.seasonal'), href: "/seasonal" },
    { name: t('header.nav.operations'), href: "/operations" },
    { name: t('header.nav.inquiry'), href: "/rfq" },
  ];

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", updateHeader);
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        style={{
          marginTop: isScrolled ? "1rem" : "0px",
          width: isScrolled ? "90%" : "100%",
          paddingTop: headerPadding,
          paddingBottom: headerPadding,
        }}
        className={cn(
          "pointer-events-auto transition-all duration-500 ease-in-out",
          isScrolled
            ? "glass-panel rounded-full px-8 max-w-[1280px]"
            : "bg-transparent border-b border-transparent px-6 w-full"
        )}
      >
        <div className="flex items-center justify-between mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-uniteda-emerald/20 overflow-hidden"
            >
              <img src="/logo.png" alt="Uniteda Logo" className="w-full h-full object-cover" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-uniteda-emerald-dark tracking-tight leading-none">{t('brand_short')}</span>
              <span className="text-[9px] text-uniteda-gold font-semibold tracking-[0.2em] uppercase">{t('header.brand.slogan')}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-muted/30 p-1 rounded-full border border-black/5">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                    location.pathname === item.href
                      ? "text-uniteda-emerald-dark"
                      : "text-muted-foreground hover:text-uniteda-emerald"
                  )}
                >
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-sm -z-10"
                    />
                  )}
                  {item.name}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      className="absolute top-full start-0 mt-4 w-64 glass-panel rounded-3xl p-3 border border-white/20 origin-top"
                    >
                      <div className="grid gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="flex items-center px-4 py-3 rounded-2xl text-sm font-medium text-muted-foreground hover:text-uniteda-emerald hover:bg-uniteda-emerald/5 transition-all"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Language Switcher (EN/AR Toggle) */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-black/5">
              <button
                onClick={() => {
                  i18n.changeLanguage('en');
                  document.documentElement.dir = 'ltr';
                  document.documentElement.lang = 'en';
                }}
                className={cn(
                  "px-3 py-1 rounded-full text-[11px] font-bold transition-all",
                  !isRTL ? "bg-uniteda-emerald text-white shadow-sm" : "text-muted-foreground hover:text-uniteda-emerald"
                )}
              >
                EN
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage('ar');
                  document.documentElement.dir = 'rtl';
                  document.documentElement.lang = 'ar';
                }}
                className={cn(
                  "px-3 py-1 rounded-full text-[11px] font-bold transition-all",
                  isRTL ? "bg-uniteda-emerald text-white shadow-sm" : "text-muted-foreground hover:text-uniteda-emerald"
                )}
              >
                AR
              </button>
            </div>

            <Button size="sm" className="hidden lg:flex rounded-full px-6 bg-uniteda-emerald hover:bg-uniteda-emerald-dark shadow-lg shadow-uniteda-emerald/20 transition-all font-bold group">
              <Link to="/contact" className="flex items-center gap-2">
                {t('header.cta.partner')}
                <motion.span
                  animate={{ x: isRTL ? [0, -5, 0] : [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="inline-block"
                >
                  {isRTL ? "←" : "→"}
                </motion.span>
              </Link>
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-muted/50 text-uniteda-emerald transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="lg:hidden absolute top-full left-0 right-0 mt-4 mx-4 glass-panel rounded-[2rem] overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-2xl text-lg font-semibold transition-all",
                      location.pathname === item.href
                        ? "text-uniteda-emerald bg-uniteda-emerald/5"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <Button variant="outline" className="rounded-2xl border-uniteda-emerald text-uniteda-emerald font-bold" asChild>
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>{t('header.cta.sales')}</Link>
                  </Button>
                  <Button className="rounded-2xl bg-uniteda-emerald hover:bg-uniteda-emerald-dark font-bold text-white" asChild>
                    <Link to="/rfq" onClick={() => setMobileMenuOpen(false)}>{t('header.cta.inquiry')}</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header >
  );
}
