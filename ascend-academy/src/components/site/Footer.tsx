import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/5">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="h-10 w-10 rounded-xl bg-gradient-brand grid place-items-center font-display font-bold text-white">
                C
              </div>
              <div>
                <div className="font-display font-bold">Career Training Institute</div>
                <div className="text-xs text-muted-foreground">
                  Building Skills, Shaping Careers
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              Practical accounting and taxation training designed to make you job-ready — taught the
              way real offices operate.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex max-w-md gap-2">
              <input
                placeholder="Your email for updates"
                className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm outline-none focus:border-brand-blue/60"
              />
              <button className="rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-medium text-white">
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex gap-2">
              {[Facebook, Instagram, Youtube].map((Ic, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-xl glass hover:bg-white/10 transition"
                >
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Home", "Courses", "Why Us", "Gallery", "Testimonials", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(" ", "")}`}
                    className="hover:text-foreground transition"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Reach Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-red" /> Tilottama, Manigram
                Chowk
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-blue" /> 9857079552 · 9807505386
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-brand-blue" /> WhatsApp 9807505386
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-red" /> info@careertraining.np
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Career Training Institute Pvt. Ltd.</div>
          <div>Crafted with care · Building Skills, Shaping Careers</div>
        </div>
      </div>
    </footer>
  );
}
