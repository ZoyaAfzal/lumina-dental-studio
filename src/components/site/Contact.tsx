import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const cards = [
  { icon: MapPin, title: "Visit Us", lines: ["47 Upper Street", "Islington, London N1 0QH"] },
  { icon: Phone, title: "Call Us", lines: ["+44 (0)20 7946 0312", "Mon–Sat available"] },
  { icon: Mail, title: "Email", lines: ["hello@luminadentalstudio.co.uk", "We reply within hours"] },
  { icon: Clock, title: "Hours", lines: ["Mon–Fri: 08:00–19:00", "Sat: 09:00–14:00"] },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background border-t border-border/40">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-brand-tint text-brand text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2">Get in Touch</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold text-balance text-primary">We'd Love to Hear From You</h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-3xl bg-card p-7 shadow-soft border border-border/60 hover:-translate-y-1 hover:shadow-elegant transition-all"
            >
              <span className="grid place-items-center size-12 rounded-2xl bg-brand-tint text-brand"><c.icon className="size-5" /></span>
              <h3 className="mt-5 font-display font-semibold text-lg text-primary">{c.title}</h3>
              {c.lines.map((l) => (<p key={l} className="text-sm text-muted-foreground mt-1">{l}</p>))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
