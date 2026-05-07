import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Clock, Mail, Send } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact & Location</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold">Visit us in <span className="text-gradient-brand">Tilottama</span></h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Map + info */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-3xl glass-strong border-gradient overflow-hidden"
            >
              <iframe
                title="Career Training Institute Map"
                src="https://www.google.com/maps?q=Manigram+Tilottama+Nepal&output=embed"
                className="w-full h-[320px] border-0 grayscale-[20%]"
                loading="lazy"
              />
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl glass-strong border-gradient p-5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground"><MapPin className="h-4 w-4" /> Address</div>
                <div className="mt-2 font-display text-lg font-semibold">Tilottama, Manigram Chowk</div>
                <div className="text-sm text-muted-foreground">Rupandehi, Nepal</div>
              </div>
              <div className="rounded-2xl glass-strong border-gradient p-5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground"><Clock className="h-4 w-4" /> Working Hours</div>
                <div className="mt-2 font-display text-lg font-semibold">Sun – Fri · 7 AM – 6 PM</div>
                <div className="text-sm text-muted-foreground">New shift: 1 PM – 5 PM</div>
              </div>
              <a href="tel:9857079552" className="group rounded-2xl glass-strong border-gradient p-5 hover:bg-white/[0.04] transition">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground"><Phone className="h-4 w-4" /> Call</div>
                <div className="mt-2 font-display text-lg font-semibold">9857079552</div>
                <div className="text-sm text-muted-foreground">9807505386</div>
              </a>
              <a href="https://wa.me/9779807505386" className="group rounded-2xl border-gradient p-5 bg-gradient-brand text-white shadow-[0_20px_50px_-20px_oklch(0.62_0.23_27/0.6)]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-90"><MessageCircle className="h-4 w-4" /> WhatsApp</div>
                <div className="mt-2 font-display text-lg font-semibold">Chat instantly</div>
                <div className="text-sm opacity-90">Reply within minutes</div>
              </a>
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="lg:col-span-2 rounded-3xl glass-strong border-gradient p-7 space-y-4 self-start"
          >
            <div>
              <h3 className="font-display text-2xl font-bold">Send an inquiry</h3>
              <p className="text-sm text-muted-foreground mt-1">We respond within working hours.</p>
            </div>
            {[
              { label: "Full Name", type: "text", placeholder: "Your name" },
              { label: "Phone Number", type: "tel", placeholder: "98XXXXXXXX" },
            ].map((f) => (
              <label key={f.label} className="block">
                <span className="text-xs text-muted-foreground">{f.label}</span>
                <input required type={f.type} placeholder={f.placeholder}
                  className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm outline-none focus:border-brand-red/60 focus:ring-2 focus:ring-brand-red/20 transition" />
              </label>
            ))}
            <label className="block">
              <span className="text-xs text-muted-foreground">Interested Course</span>
              <select className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm outline-none focus:border-brand-blue/60 focus:ring-2 focus:ring-brand-blue/20 transition">
                <option className="bg-background">Practical Accounting Pro</option>
                <option className="bg-background">Tally ERP Mastery</option>
                <option className="bg-background">VAT, TDS & Taxation</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs text-muted-foreground">Message</span>
              <textarea rows={3} placeholder="Tell us your goal..."
                className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm outline-none focus:border-brand-red/60 focus:ring-2 focus:ring-brand-red/20 transition" />
            </label>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-3 font-medium text-white shadow-[0_15px_35px_-12px_oklch(0.62_0.23_27/0.7)] hover:translate-y-[-1px] transition">
              {submitted ? "Sent ✓ We'll call you" : (<>Send Inquiry <Send className="h-4 w-4" /></>)}
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a href="tel:9857079552" className="inline-flex items-center justify-center gap-2 rounded-xl glass px-4 py-2.5 text-sm hover:bg-white/10 transition"><Phone className="h-4 w-4" /> Call</a>
              <a href="https://wa.me/9779807505386" className="inline-flex items-center justify-center gap-2 rounded-xl glass px-4 py-2.5 text-sm hover:bg-white/10 transition"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
              <Mail className="h-3.5 w-3.5" /> info@careertraining.np
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
