import { motion } from "framer-motion";
import {
  Hand,
  Users,
  Building2,
  Briefcase,
  Receipt,
  GraduationCap,
  Award,
  HeartHandshake,
} from "lucide-react";

const items = [
  {
    icon: Hand,
    title: "100% Practical Learning",
    desc: "Every concept reinforced with real entries.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  { icon: Users, title: "Industry Trainers", desc: "Working professionals as mentors." },
  { icon: Building2, title: "Real Office Setup", desc: "Trained in an actual office workflow." },
  { icon: Briefcase, title: "Job-Oriented", desc: "Built around what employers ask for." },
  {
    icon: Receipt,
    title: "VAT & TDS Practice",
    desc: "Live IRD portal exercises.",
    span: "lg:col-span-2",
  },
  { icon: GraduationCap, title: "Internship Guidance", desc: "Placement-ready support." },
  { icon: Award, title: "Certification", desc: "Recognized completion certificate." },
  { icon: HeartHandshake, title: "Career Support", desc: "Resume, interview & placement help." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Why Choose Us
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold">
            Built like a <span className="text-gradient-brand">real workplace</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative rounded-3xl glass-strong border-gradient overflow-hidden p-5 hover:shadow-[0_20px_60px_-20px_oklch(0.55_0.22_260/0.4)] transition ${it.span ?? ""}`}
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-brand-red group-hover:text-brand-blue transition">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
