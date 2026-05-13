import { motion } from "framer-motion";
import { Sparkles, Stethoscope, Activity, Smile, Gem, Brush, Plus, ArrowRight } from "lucide-react";
import { PerspectiveCard } from "../ui/PerspectiveCard";

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    desc: "Comprehensive oral health care including check-ups, digital X-rays, scale & polish, and fillings. From £65 per exam.",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    desc: "Teeth whitening from £299, composite bonding from £180 per tooth, and porcelain veneers for a beautiful natural smile.",
  },
  {
    icon: Smile,
    title: "Invisalign",
    desc: "Discreet, comfortable teeth straightening with Invisalign clear aligners and modern fixed appliances.",
  },
  {
    icon: Gem,
    title: "Dental Implants",
    desc: "Single tooth or full-arch implants — permanent, natural-feeling tooth replacement using guided surgery.",
  },
  {
    icon: Activity,
    title: "Root Canal Therapy",
    desc: "Advanced endodontic treatment that saves your natural tooth with virtually painless modern techniques.",
  },
  {
    icon: Brush,
    title: "Hygiene & Gum Health",
    desc: "Deep cleans, periodontal care and personalised home routines for healthy gums and fresh breath.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-40 bg-brand-tint/40 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-soft/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="container-x relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-white text-brand text-[11px] font-bold tracking-[0.25em] uppercase px-5 py-2.5 shadow-sm border border-slate-100"
          >
            Clinical Excellence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-6xl font-bold text-balance text-primary leading-tight"
          >
            Complete Care for <br /> Every Smile
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            From routine cleanings to advanced smile makeovers, we provide personalised dental
            solutions for patients of all ages — all under one roof in Islington.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((s, i) => (
            <motion.div key={s.title} variants={itemVariants}>
              <PerspectiveCard className="h-full">
                <article className="group relative h-full rounded-[2.5rem] bg-white p-10 shadow-soft border border-slate-100/50 hover:shadow-elegant transition-all duration-500 overflow-hidden flex flex-col">
                  {/* Hover bg effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <span className="inline-grid place-items-center size-16 rounded-2xl bg-brand-tint text-brand group-hover:bg-brand group-hover:text-white group-hover:rotate-[10deg] transition-all duration-500 shadow-sm">
                      <s.icon className="size-8" />
                    </span>
                    <h3 className="mt-8 font-display text-2xl font-bold text-primary group-hover:text-brand transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed text-[16px] font-medium opacity-90">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-auto pt-10 relative z-10 flex items-center justify-between">
                    <a
                      href="#appointment"
                      className="text-sm font-bold text-primary flex items-center gap-2 group/btn"
                    >
                      Learn More
                      <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    <div className="grid place-items-center size-12 rounded-full bg-slate-50 text-slate-400 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                      <Plus className="size-5" />
                    </div>
                  </div>
                </article>
              </PerspectiveCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-3 rounded-full bg-primary text-white px-10 py-5 text-sm font-bold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-500"
          >
            View All Services
            <ArrowRight className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
