import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-1/2 top-4 z-50 w-[min(1200px,calc(100%-1.5rem))] -translate-x-1/2"
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-brand grid place-items-center font-display font-bold text-white shadow-[0_8px_20px_-6px_oklch(0.62_0.23_27/0.6)]">
              C
              <span className="absolute -inset-px rounded-xl ring-1 ring-white/20" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm font-bold tracking-tight">Career Training</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Institute Pvt. Ltd.</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative px-3.5 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                {l.label}
                <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-brand-red to-brand-blue transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="tel:9857079552"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm hover:bg-white/10 transition"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href="https://wa.me/9779807505386"
              className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-xl bg-gradient-brand px-3.5 py-2 text-sm font-medium text-white shadow-[0_8px_24px_-8px_oklch(0.62_0.23_27/0.7)] hover:shadow-[0_12px_30px_-8px_oklch(0.62_0.23_27/0.9)] transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <button
            className="lg:hidden rounded-xl p-2 hover:bg-white/5"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] glass-strong"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between p-5">
              <span className="font-display font-bold">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-xl p-2 hover:bg-white/5">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 pt-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-3xl font-semibold py-2"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-8 flex gap-3">
                <a href="tel:9857079552" className="flex-1 rounded-xl glass px-4 py-3 text-center">Call Now</a>
                <a href="https://wa.me/9779807505386" className="flex-1 rounded-xl bg-gradient-brand px-4 py-3 text-center text-white">WhatsApp</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
