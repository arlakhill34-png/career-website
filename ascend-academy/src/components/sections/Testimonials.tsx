import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Star, Quote } from "lucide-react";

const items = [
  {
    name: "Sushmita Acharya",
    role: "Junior Accountant, Butwal",
    text: "The practical training made me confident from day one in my office. VAT and TDS filing felt easy after the live sessions on the IRD portal.",
  },
  {
    name: "Rajan Pandey",
    role: "Account Officer",
    text: "I joined without any background. After 3 months I was working full Tally entries and bank reconciliations on real data.",
  },
  {
    name: "Anjali Gautam",
    role: "Tax Assistant",
    text: "Trainers are super patient. The office-style classroom made the switch to my actual job seamless.",
  },
  {
    name: "Bibek Sharma",
    role: "Internship at CA firm",
    text: "What I liked most: every concept was tied to a real document. By the end I could prepare a year-end set of accounts.",
  },
  {
    name: "Pratiksha Thapa",
    role: "Accounts Executive",
    text: "Highly recommended for anyone who wants a job, not just a certificate.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-radial opacity-50" />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Testimonials
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold">
            Stories from our <span className="text-gradient-brand">graduates</span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
        >
          {items.map((t, i) => (
            <SwiperSlide key={i}>
              <article className="h-full rounded-3xl glass-strong border-gradient p-7 relative overflow-hidden">
                <Quote className="absolute -top-2 -right-2 h-24 w-24 text-white/5" />
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand font-semibold text-white">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
