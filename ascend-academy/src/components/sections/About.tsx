import { motion } from "framer-motion";
import aboutImg from "@/assets/about-training.jpg";
import galleryImg from "@/assets/gallery-2.jpg";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Real-world office based training",
  "Industry experienced trainers",
  "Job-oriented hands-on practice",
  "Tally ERP, VAT, TDS coverage",
];

export function About() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative h-[520px]">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={aboutImg}
            alt="Career Training Institute classroom"
            loading="lazy"
            className="absolute right-0 top-0 h-[78%] w-[78%] rounded-3xl object-cover ring-1 ring-white/10 shadow-2xl"
          />
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={galleryImg}
            alt="Practical lab"
            loading="lazy"
            className="absolute left-0 bottom-0 h-[55%] w-[58%] rounded-3xl object-cover ring-1 ring-white/10 shadow-2xl"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-6 bottom-10 rounded-2xl glass-strong p-4 border-gradient"
          >
            <div className="text-xs text-muted-foreground">Practical Hours</div>
            <div className="font-display text-2xl font-bold">120+ hrs</div>
          </motion.div>
          <div className="absolute -inset-10 -z-10 bg-gradient-radial opacity-60 blur-2xl" />
        </div>

        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">About Institute</span>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold leading-tight">
              Building <span className="text-gradient-brand">skills</span>, shaping <span className="text-gradient-brand">careers</span>.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Career Training Institute Pvt. Ltd. provides practical-based accounting and taxation training focused on real-world job skills. Students learn accounting, VAT, TDS, taxation, Tally ERP, banking, auditing, compliance, and financial operations through practical hands-on training.
            </p>
            <ul className="mt-7 grid sm:grid-cols-2 gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 rounded-xl glass px-3.5 py-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
