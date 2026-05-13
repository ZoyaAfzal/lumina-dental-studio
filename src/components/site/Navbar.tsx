import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { ToothIcon } from "./ToothIcon";
import { Magnetic } from "../ui/Magnetic";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Dentists", href: "#doctors" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3 group">
      <div className="relative">
        <span className="grid place-items-center size-11 rounded-xl bg-primary text-white shadow-lg group-hover:rotate-12 transition-transform duration-500">
          <ToothIcon className="size-7" />
        </span>
        <div className="absolute -inset-2 bg-brand/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <span className="text-[1.4rem] font-display font-bold tracking-tight text-primary">
        Lumina<span className="text-brand">Dental</span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      {/* Top Bar */}
      <div
        className={`hidden lg:block transition-all duration-700 border-b ${
          scrolled
            ? "h-0 opacity-0 overflow-hidden border-transparent translate-y-[-100%]"
            : "bg-primary text-white/80 py-2 border-white/10"
        }`}
      >
        <div className="container-x flex items-center justify-between text-xs font-medium uppercase tracking-wider">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="size-3.5 text-brand-soft" />
              Emergency: 020 7946 0312
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="size-3.5 text-brand-soft" />
              Islington, London
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="size-3.5 text-brand-soft" />
              Mon-Sat: 8am - 8pm
            </span>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-700 ${
          scrolled
            ? "py-3 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgb(0,0,0,0.06)] border-b border-slate-200/50"
            : "py-8 bg-transparent"
        }`}
      >
        <nav className="container-x flex items-center justify-between">
          <Logo />

          <ul className="hidden lg:flex items-center gap-10">
            {links.map((l, i) => (
              <motion.li
                key={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <a
                  href={l.href}
                  className={`text-[15px] font-bold transition-all relative group ${
                    scrolled ? "text-slate-700" : "text-white"
                  } hover:text-brand`}
                >
                  {l.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"
                    whileHover={{ width: "100%" }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <Magnetic strength={0.2}>
              <a
                href="#appointment"
                className={`inline-flex items-center rounded-full px-8 py-3.5 text-sm font-bold shadow-xl transition-all duration-500 hover:scale-105 active:scale-95 ${
                  scrolled
                    ? "bg-primary text-white shadow-primary/20 hover:shadow-primary/40"
                    : "bg-white text-primary shadow-white/20 hover:shadow-white/40"
                }`}
              >
                Book Appointment
              </a>
            </Magnetic>
          </div>

          <button
            aria-label="Toggle menu"
            className={`lg:hidden grid place-items-center size-11 rounded-xl border border-border ${scrolled ? "bg-background" : "bg-white/10 backdrop-blur-md border-white/20 text-white"}`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand origin-left"
          style={{ scaleX }}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-t border-border/60 shadow-2xl"
          >
            <div className="container-x py-8 flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 text-slate-800 flex items-center justify-between group"
                >
                  {l.label}
                  <div className="size-8 rounded-full bg-slate-100 grid place-items-center group-hover:bg-brand group-hover:text-white transition-colors">
                    <motion.div initial={{ x: -5 }} animate={{ x: 0 }}>
                      →
                    </motion.div>
                  </div>
                </motion.a>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 p-4 rounded-3xl bg-slate-50 border border-slate-100"
              >
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">
                  Immediate Care
                </p>
                <a
                  href="tel:02079460312"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-200 mb-3"
                >
                  <div className="size-10 rounded-xl bg-brand/10 text-brand grid place-items-center">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">020 7946 0312</p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Click to call emergency
                    </p>
                  </div>
                </a>
                <a
                  href="#appointment"
                  onClick={() => setOpen(false)}
                  className="flex justify-center items-center rounded-2xl bg-primary text-white py-4 text-sm font-bold shadow-lg shadow-primary/20"
                >
                  Book Online Appointment
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
