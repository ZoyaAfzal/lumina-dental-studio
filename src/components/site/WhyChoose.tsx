import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, BadgeCheck, Wallet, ArrowRight } from "lucide-react";
import w1 from "@/assets/doctor-1.jpg";
import w2 from "@/assets/why-2.jpg";
import w3 from "@/assets/why-3.jpg";
import w4 from "@/assets/doctor-2.jpg";

const points = [
  {
    icon: BadgeCheck,
    title: "GDC-Registered Dentists",
    desc: "All our dentists hold full GDC registration and carry out regular CPD training.",
  },
  {
    icon: ShieldCheck,
    title: "CQC Regulated Practice",
    desc: "Fully regulated by the Care Quality Commission for your peace of mind.",
  },
  {
    icon: Wallet,
    title: "Interest-Free Finance",
    desc: "Spread the cost of treatment over 12 months at 0% interest, on plans over £500.",
  },
];

export function WhyChoose() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
      <div className="container-x grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block rounded-full bg-brand-tint text-brand text-[11px] font-bold tracking-[0.25em] uppercase px-5 py-2.5">
            The Lumina Difference
          </span>
          <h2 className="mt-8 font-display text-5xl sm:text-6xl font-bold leading-[1.1] text-balance text-primary">
            Exceptional Private Care, <br /> Without the Long Wait
          </h2>
          <p className="mt-8 text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-xl">
            With NHS waiting lists stretching months across London, Lumina offers same-week
            appointments, extended hours, and a level of personalised attention you simply cannot
            get elsewhere.
          </p>

          <div className="mt-12 space-y-8">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-6 group cursor-default"
              >
                <span className="grid place-items-center size-14 rounded-2xl bg-brand-tint text-brand shrink-0 group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
                  <p.icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-2xl text-primary group-hover:text-brand transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-[16px] leading-relaxed max-w-md">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <a href="#about" className="inline-flex items-center gap-2 text-brand font-bold group">
              Learn more about our practice
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-6"
        >
          {[w1, w2, w3, w4].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
              className={`overflow-hidden rounded-[2rem] shadow-card aspect-square relative group ${
                i === 0 ? "mt-12" : i === 3 ? "-mt-12" : ""
              }`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
