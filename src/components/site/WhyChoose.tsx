import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Wallet } from "lucide-react";
import w1 from "@/assets/why-1.jpg";
import w2 from "@/assets/why-2.jpg";
import w3 from "@/assets/why-3.jpg";
import w4 from "@/assets/about-1.jpg";

const points = [
  { icon: BadgeCheck, title: "GDC-Registered Dentists", desc: "All our dentists hold full GDC registration and carry out regular CPD training." },
  { icon: ShieldCheck, title: "CQC Regulated Practice", desc: "Fully regulated by the Care Quality Commission for your peace of mind." },
  { icon: Wallet, title: "Interest-Free Finance", desc: "Spread the cost of treatment over 12 months at 0% interest, on plans over £500." },
];

export function WhyChoose() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="inline-block rounded-full bg-brand-tint text-brand text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2">Why Choose Lumina Dental Studio</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-balance text-primary">
            Exceptional Private Care, Without the Long Wait
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            With NHS waiting lists stretching months across London, Lumina offers
            same-week appointments, extended hours, and a level of personalised
            attention you simply cannot get elsewhere. We combine the latest clinical
            technology with genuine warmth.
          </p>

          <div className="mt-10 space-y-6">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <span className="grid place-items-center size-12 rounded-2xl bg-brand-tint text-brand shrink-0"><p.icon className="size-5" /></span>
                <div>
                  <h3 className="font-display font-semibold text-xl text-primary">{p.title}</h3>
                  <p className="mt-1 text-muted-foreground text-[15px] leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-4 lg:gap-5"
        >
          {[w1, w2, w3, w4].map((src, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl shadow-card aspect-square ${i === 0 ? "translate-y-6" : i === 3 ? "-translate-y-6" : ""}`}
            >
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
