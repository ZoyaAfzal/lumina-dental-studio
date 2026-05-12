import { motion } from "framer-motion";
import { Check } from "lucide-react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

const features = [
  "Personalised Treatment Plans",
  "Gentle Care for Children and Adults",
  "State-of-the-Art Digital X-Ray & 3D Scanning",
  "Flexible Appointment Times — Evenings & Saturdays",
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-elegant aspect-[5/4]">
            <img src={about1} alt="Dentist reviewing scans" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-10 right-4 sm:right-12 w-44 sm:w-56 aspect-square rounded-2xl overflow-hidden shadow-elegant border-[6px] border-background">
            <img src={about2} alt="Modern operatory" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full bg-brand-tint text-brand text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2">About Lumina Dental Studio</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-balance text-primary">
            Professionals and Personalised Dental Excellence
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            At Lumina Dental Studio, we're committed to providing high-quality private dental
            care for the whole family. Established in 2009, our Islington practice combines
            state-of-the-art technology with a warm, unhurried approach that puts nervous
            patients at ease.
          </p>

          <ul className="mt-8 space-y-3">
            {features.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <span className="grid place-items-center size-6 rounded-full bg-brand-tint text-brand"><Check className="size-3.5" /></span>
                <span className="text-[15px]">{f}</span>
              </motion.li>
            ))}
          </ul>

          <a href="#appointment" className="mt-10 inline-flex items-center rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all">
            Book Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
