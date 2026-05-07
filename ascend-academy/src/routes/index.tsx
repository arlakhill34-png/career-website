import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { FeaturedCourse } from "@/components/sections/FeaturedCourse";
import { Modules } from "@/components/sections/Modules";
import { CourseCards } from "@/components/sections/CourseCards";
import { WhyUs } from "@/components/sections/WhyUs";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaCareer } from "@/components/sections/CtaCareer";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Career Training Institute — Practical Accounting & Taxation" },
      {
        name: "description",
        content:
          "Job-oriented practical training in Accounting, VAT, TDS, Tally ERP and Taxation. Tilottama, Manigram. Building Skills, Shaping Careers.",
      },
      {
        property: "og:title",
        content: "Career Training Institute — Practical Accounting & Taxation",
      },
      {
        property: "og:description",
        content: "Job-oriented practical training in Accounting, VAT, TDS, Tally ERP and Taxation.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <FeaturedCourse />
        <Modules />
        <CourseCards />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <CtaCareer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
