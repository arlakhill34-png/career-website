import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/about-training.jpg";
import g6 from "@/assets/course-tally.jpg";

const imgs = [
  { src: g1, h: "h-72", caption: "Certificate Day" },
  { src: g2, h: "h-56", caption: "Computer Lab" },
  { src: g3, h: "h-80", caption: "Tax Workshop" },
  { src: g4, h: "h-64", caption: "Career Seminar" },
  { src: g5, h: "h-72", caption: "Mentor Session" },
  { src: g6, h: "h-56", caption: "Tally Practice" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">Gallery</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">Inside the <span className="text-gradient-brand">institute</span></h2>
          </div>
        </div>

        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {imgs.map((im, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className={`group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/10`}
            >
              <img src={im.src} alt={im.caption} loading="lazy" className={`w-full ${im.h} object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-0`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-90" />
              <figcaption className="absolute left-4 bottom-3 text-sm font-medium">{im.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
