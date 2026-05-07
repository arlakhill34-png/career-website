import { motion } from "framer-motion";
import { Award, Clock, Briefcase, Sparkles, ArrowRight, Star } from "lucide-react";
import courseImg from "@/assets/course-tax.jpg";

export function FeaturedCourse() {
  return (
    <section id="courses" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">Featured Course</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold leading-tight">
            The <span className="text-gradient-brand">flagship program</span> built for real careers
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl glass-strong border-gradient overflow-hidden"
        >
          <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-brand-red/30 blur-3xl animate-glow" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl animate-glow" />

          <div className="grid lg:grid-cols-2 gap-0 relative">
            <div className="p-8 lg:p-12">
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Sparkles, label: "Practical" },
                  { icon: Award, label: "Certificate" },
                  { icon: Briefcase, label: "Job-Oriented" },
                ].map((b) => (
                  <span key={b.label} className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs">
                    <b.icon className="h-3.5 w-3.5 text-brand-red" /> {b.label}
                  </span>
                ))}
              </div>

              <h3 className="mt-6 font-display text-3xl sm:text-4xl font-bold leading-tight">
                Practical Accounting, VAT, TDS &amp; Taxation Training
              </h3>
              <p className="mt-4 text-muted-foreground">
                The complete career-focused syllabus covering manual accounting, Tally ERP, VAT/TDS, banking and year-end compliance — taught the way an actual office runs.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl glass p-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground"><Clock className="h-4 w-4" /> Duration</div>
                  <div className="mt-1 font-display text-lg font-semibold">3 Months</div>
                </div>
                <div className="rounded-2xl glass p-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground"><Sparkles className="h-4 w-4" /> New Shift</div>
                  <div className="mt-1 font-display text-lg font-semibold">1 PM – 5 PM</div>
                </div>
              </div>

              <div className="mt-7 flex items-end gap-3">
                <div className="font-display text-4xl font-bold text-gradient-brand">Rs 12,000</div>
                <div className="text-lg text-muted-foreground line-through pb-1">Rs 18,000</div>
                <div className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-300 mb-1">33% off</div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3.5 font-medium text-white shadow-[0_18px_40px_-14px_oklch(0.62_0.23_27/0.7)] transition hover:translate-y-[-1px]">
                  Enroll Now <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                </a>
                <a href="#modules" className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3.5 font-medium hover:bg-white/10 transition">
                  View Syllabus
                </a>
              </div>
            </div>

            <div className="relative min-h-[360px] lg:min-h-full">
              <img src={courseImg} alt="Practical taxation training" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/30 to-background" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="rounded-2xl glass-strong px-4 py-3">
                  <div className="text-xs text-muted-foreground">Rated</div>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[...Array(5)].map((_,i)=>(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}
                    <span className="ml-2 text-sm font-semibold">4.9</span>
                  </div>
                </div>
                <div className="rounded-2xl glass-strong px-4 py-3 text-right">
                  <div className="text-xs text-muted-foreground">Enrolled</div>
                  <div className="font-display text-lg font-bold">240+ this batch</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
