import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Wallet, Calculator, FileSpreadsheet, BadgeCheck } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-brand-red/30 blur-[140px]" />
      <div className="absolute -bottom-40 -right-32 h-[520px] w-[520px] rounded-full bg-brand-blue/30 blur-[140px]" />

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative">
        {/* LEFT */}
        <div className="lg:col-span-6">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red" />
            </span>
            New Shift Available — 1:00 PM to 5:00 PM
            <ArrowRight className="h-3.5 w-3.5 opacity-60 group-hover:translate-x-0.5 transition" />
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight"
          >
            Master <span className="text-gradient-brand">Practical Accounting</span> & Taxation Skills
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Job-oriented practical based Accounting, VAT, TDS &amp; Taxation training designed for real career growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#courses"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-brand px-6 py-3.5 font-medium text-white shadow-[0_18px_40px_-14px_oklch(0.62_0.23_27/0.7)] transition hover:shadow-[0_24px_50px_-14px_oklch(0.62_0.23_27/0.9)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              Explore Courses <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3.5 font-medium hover:bg-white/10 transition"
            >
              <Sparkles className="h-4 w-4" /> Book New Shift
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-5 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-brand-blue" /> Certified Trainers</div>
            <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-brand-blue" /> Real Office Practice</div>
            <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-brand-blue" /> Job Support</div>
          </div>
        </div>

        {/* RIGHT — Dashboard */}
        <div className="lg:col-span-6 relative h-[520px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="absolute inset-0"
          >
            {/* Main dashboard card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-6 w-[88%] rounded-3xl glass-strong p-5 ring-glow border-gradient overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Monthly VAT Filing</div>
                  <div className="font-display text-2xl font-bold mt-1">Rs 4,82,650</div>
                </div>
                <div className="rounded-xl bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-300 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" /> +18.4%
                </div>
              </div>
              {/* Mini chart */}
              <div className="mt-5 flex items-end gap-1.5 h-24">
                {[40,70,55,82,48,90,65,95,72,88,60,100].map((h,i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.6 }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-brand-blue/70 to-brand-red/70"
                  />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl bg-white/5 p-2.5"><div className="text-muted-foreground">TDS</div><div className="font-semibold mt-0.5">12.4%</div></div>
                <div className="rounded-xl bg-white/5 p-2.5"><div className="text-muted-foreground">Net</div><div className="font-semibold mt-0.5">87.6%</div></div>
                <div className="rounded-xl bg-white/5 p-2.5"><div className="text-muted-foreground">Filed</div><div className="font-semibold mt-0.5">142</div></div>
              </div>
            </motion.div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-32 w-56 rounded-2xl glass-strong p-4 border-gradient"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-red/20 text-brand-red"><Calculator className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Tally ERP</div>
                  <div className="text-sm font-semibold">Live Practical</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute -bottom-2 left-6 w-64 rounded-2xl glass-strong p-4 border-gradient"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-blue/20 text-brand-blue"><FileSpreadsheet className="h-5 w-5" /></div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">VAT Return</div>
                  <div className="text-sm font-semibold">Submitted ✓</div>
                </div>
                <div className="text-xs text-emerald-300">100%</div>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.4, delay: 1 }} className="h-full bg-gradient-to-r from-brand-red to-brand-blue" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute bottom-16 right-2 rounded-2xl glass-strong p-4 border-gradient"
            >
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-brand-red" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Today</div>
                  <div className="text-sm font-semibold">+ Rs 24,800</div>
                </div>
              </div>
            </motion.div>

            {/* Glow blobs */}
            <div className="absolute right-12 top-2 h-40 w-40 rounded-full bg-brand-red/40 blur-3xl -z-10 animate-glow" />
            <div className="absolute left-4 bottom-12 h-48 w-48 rounded-full bg-brand-blue/40 blur-3xl -z-10 animate-glow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
