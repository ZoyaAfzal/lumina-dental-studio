import { motion } from "framer-motion";
import { Sparkles, Stethoscope, Activity, Smile, Gem, Brush, Plus } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Dentistry", desc: "Comprehensive oral health care including check-ups, digital X-rays, scale & polish, and fillings. From £65 per exam." },
  { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Teeth whitening from £299, composite bonding from £180 per tooth, and porcelain veneers for a beautiful natural smile." },
  { icon: Sparkles, title: "Orthodontics & Invisalign", desc: "Discreet, comfortable teeth straightening with Invisalign clear aligners and modern fixed appliances." },
  { icon: Gem, title: "Dental Implants", desc: "Single tooth or full-arch implants — permanent, natural-feeling tooth replacement using guided surgery." },
  { icon: Activity, title: "Root Canal Therapy", desc: "Advanced endodontic treatment that saves your natural tooth with virtually painless modern techniques." },
  { icon: Brush, title: "Hygiene & Gum Health", desc: "Deep cleans, periodontal care and personalised home routines for healthy gums and fresh breath." },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-brand-tint/60">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-white/80 text-brand text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2">Our Services</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold text-balance text-primary">Complete Care for Every Smile</h2>
          <p className="mt-4 text-muted-foreground text-lg">From routine cleanings to advanced smile makeovers, we provide personalised dental solutions for patients of all ages — all under one roof in Islington, London.</p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl bg-card p-8 shadow-soft border border-white hover:shadow-elegant transition-all"
            >
              <span className="grid place-items-center size-14 rounded-2xl bg-brand-tint text-brand">
                <s.icon className="size-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-primary">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{s.desc}</p>
              <a href="#appointment" className="mt-6 inline-grid place-items-center size-10 rounded-full bg-brand-tint text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                <Plus className="size-5" />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="#services" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all">View All Services</a>
        </div>
      </div>
    </section>
  );
}
