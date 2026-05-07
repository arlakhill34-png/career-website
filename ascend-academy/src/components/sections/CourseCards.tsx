import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import tax from "@/assets/course-tax.jpg";
import tally from "@/assets/course-tally.jpg";
import vat from "@/assets/course-vat.jpg";

const courses = [
  {
    img: tax,
    title: "Practical Accounting Pro",
    price: "Rs 12,000",
    old: "Rs 18,000",
    rating: 4.9,
    students: 480,
    progress: 86,
    tag: "Bestseller",
  },
  {
    img: tally,
    title: "Tally ERP Mastery",
    price: "Rs 8,500",
    old: "Rs 12,000",
    rating: 4.8,
    students: 320,
    progress: 72,
    tag: "Hands-on",
  },
  {
    img: vat,
    title: "VAT, TDS & Taxation",
    price: "Rs 9,500",
    old: "Rs 14,000",
    rating: 4.9,
    students: 410,
    progress: 91,
    tag: "Job-Ready",
  },
];

export function CourseCards() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Programs
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold">
              Pick your <span className="text-gradient-brand">career path</span>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl glass-strong border-gradient overflow-hidden flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-gradient-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {c.tag}
                </span>
              </div>
              <div className="p-5 flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    {c.rating} · {c.students} enrolled
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold leading-tight">{c.title}</h3>
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                    <span>Curriculum progress</span>
                    <span>{c.progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                      className="h-full bg-gradient-to-r from-brand-red to-brand-blue"
                    />
                  </div>
                </div>
                <div className="flex items-end justify-between mt-auto pt-2">
                  <div>
                    <div className="font-display text-xl font-bold text-gradient-brand">
                      {c.price}
                    </div>
                    <div className="text-xs text-muted-foreground line-through">{c.old}</div>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-brand px-3.5 py-2 text-sm font-medium text-white shadow-[0_10px_24px_-10px_oklch(0.62_0.23_27/0.7)]"
                  >
                    Enroll <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
