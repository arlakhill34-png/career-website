import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, BriefcaseBusiness } from "lucide-react";

export function CtaCareer() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border-gradient p-10 lg:p-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.18 0.04 27) 0%, oklch(0.13 0.03 265) 50%, oklch(0.18 0.06 260) 100%)",
          }}
        >
          <div className="absolute -top-20 left-1/2 h-80 w-[120%] -translate-x-1/2 rounded-full bg-gradient-brand opacity-20 blur-3xl animate-glow" />
          <motion.div
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "linear-gradient(120deg, transparent, oklch(0.62 0.23 27 / .4), transparent, oklch(0.55 0.22 260 / .4), transparent)",
              backgroundSize: "300% 100%",
            }}
          />

          <div className="relative">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto">
              Start your <span className="text-gradient-brand">professional accounting</span> career
              today
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Join the next batch and learn the way real offices work. Limited seats per shift.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-7 py-4 font-medium text-white shadow-[0_18px_40px_-14px_oklch(0.62_0.23_27/0.7)] hover:translate-y-[-1px] transition"
              >
                Reserve your seat <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:9857079552"
                className="inline-flex items-center gap-2 rounded-2xl glass px-7 py-4 font-medium hover:bg-white/10 transition"
              >
                Talk to a counselor
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-blue" /> Trusted by 1,300+ students
              </span>
              <span className="inline-flex items-center gap-2">
                <Award className="h-4 w-4 text-brand-red" /> Certified curriculum
              </span>
              <span className="inline-flex items-center gap-2">
                <BriefcaseBusiness className="h-4 w-4 text-brand-blue" /> Job placement support
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
