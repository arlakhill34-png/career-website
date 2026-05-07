import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Users, Briefcase, GraduationCap, Activity } from "lucide-react";

const stats = [
  { icon: Users, end: 1300, suffix: "+", label: "Students Trained", color: "text-brand-red" },
  { icon: Briefcase, end: 95, suffix: "%", label: "Career Support", color: "text-brand-blue" },
  { icon: GraduationCap, end: 10, suffix: "+", label: "Expert Trainers", color: "text-brand-red" },
  { icon: Activity, end: 100, suffix: "%", label: "Practical Sessions", color: "text-brand-blue" },
];

export function Stats() {
  return (
    <section className="relative py-12 -mt-6">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl glass-strong border-gradient p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-4"
            >
              <div
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/5 ${s.color}`}
              >
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-3xl font-bold">
                  <CountUp
                    end={s.end}
                    duration={2.4}
                    enableScrollSpy
                    scrollSpyOnce
                    suffix={s.suffix}
                  />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
