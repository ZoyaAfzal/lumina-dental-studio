import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { PerspectiveCard } from "../ui/PerspectiveCard";

const cards = [
  { icon: MapPin, title: "Visit Us", lines: ["47 Upper Street", "Islington, London N1 0QH"] },
  { icon: Phone, title: "Call Us", lines: ["+44 (0)20 7946 0312", "Mon–Sat available"] },
  {
    icon: Mail,
    title: "Email",
    lines: ["hello@luminadentalstudio.co.uk", "We reply within hours"],
  },
  { icon: Clock, title: "Hours", lines: ["Mon–Fri: 08:00–19:00", "Sat: 09:00–14:00"] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-40 bg-white border-t border-slate-100">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-brand-tint text-brand text-[11px] font-bold tracking-[0.25em] uppercase px-5 py-2.5"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-6xl font-bold text-balance text-primary"
          >
            We're Here to Help <br /> You Smile
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cards.map((c, i) => (
            <motion.div key={c.title} variants={itemVariants}>
              <PerspectiveCard>
                <div className="group rounded-[2.5rem] bg-slate-50 p-10 shadow-soft border border-slate-100 hover:border-brand/20 hover:bg-white hover:shadow-elegant transition-all duration-500 h-full flex flex-col items-center text-center">
                  <span className="grid place-items-center size-14 rounded-2xl bg-white text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
                    <c.icon className="size-6" />
                  </span>
                  <h3 className="mt-8 font-display font-bold text-2xl text-primary">{c.title}</h3>
                  <div className="mt-4 flex-grow">
                    {c.lines.map((l) => (
                      <p
                        key={l}
                        className="text-sm font-medium text-muted-foreground mt-1 leading-relaxed"
                      >
                        {l}
                      </p>
                    ))}
                  </div>
                  <motion.div
                    className="mt-8 size-10 rounded-full bg-white border border-slate-200 grid place-items-center text-slate-400 group-hover:text-brand group-hover:border-brand transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowRight className="size-4" />
                  </motion.div>
                </div>
              </PerspectiveCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
