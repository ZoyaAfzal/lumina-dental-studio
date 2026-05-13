import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, ExternalLink } from "lucide-react";
import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";
import d3 from "@/assets/doctor-3.jpg";
import { PerspectiveCard } from "../ui/PerspectiveCard";

const docs = [
  {
    img: d1,
    name: "Dr. Sarah Whitfield",
    role: "Lead Dentist & Principal",
    credentials: "BDS, GDC: 234561",
  },
  {
    img: d2,
    name: "Dr. James Okafor",
    role: "Cosmetic & Restorative Dentist",
    credentials: "BDS, MSc",
  },
  {
    img: d3,
    name: "Dr. Priya Sharma",
    role: "Orthodontist · Invisalign Provider",
    credentials: "BDS, MOrth",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Doctors() {
  return (
    <section id="doctors" className="py-24 lg:py-40 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] border border-slate-100 rounded-full pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] border border-slate-100 rounded-full pointer-events-none opacity-50" />

      <div className="container-x relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-brand-tint text-brand text-[11px] font-bold tracking-[0.25em] uppercase px-5 py-2.5"
          >
            Our Dental Experts
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-6xl font-bold text-balance text-primary"
          >
            Meet the Masters of <br /> Your Smile
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-muted-foreground text-lg lg:text-xl leading-relaxed"
          >
            Our experienced team combines clinical excellence with a compassionate approach,
            ensuring every visit is as comfortable as it is effective.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {docs.map((d, i) => (
            <motion.div key={d.name} variants={itemVariants}>
              <PerspectiveCard>
                <div className="group rounded-[2.5rem] overflow-hidden bg-white shadow-soft hover:shadow-elegant transition-all duration-700 border border-slate-100/50">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />

                    <div className="absolute inset-0 flex items-center justify-center translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex gap-3">
                        {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                          <motion.a
                            key={idx}
                            href="#"
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="grid place-items-center size-11 rounded-full bg-white text-primary hover:bg-brand hover:text-white transition-colors shadow-lg"
                          >
                            <Icon className="size-4" />
                          </motion.a>
                        ))}
                      </div>
                    </div>

                    <div className="absolute top-6 right-6">
                      <div className="size-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 grid place-items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="size-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-10 text-center">
                    <h3 className="font-display text-2xl font-bold text-primary group-hover:text-brand transition-colors duration-300">
                      {d.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="h-px w-4 bg-brand-soft" />
                      <p className="text-sm font-bold text-brand uppercase tracking-widest">
                        {d.role}
                      </p>
                      <span className="h-px w-4 bg-brand-soft" />
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground mt-3 tracking-wider">
                      {d.credentials}
                    </p>
                  </div>
                </div>
              </PerspectiveCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
