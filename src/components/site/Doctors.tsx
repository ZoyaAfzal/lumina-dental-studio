import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";
import d3 from "@/assets/doctor-3.jpg";

const docs = [
  { img: d1, name: "Dr. Sarah Whitfield", role: "Lead Dentist & Principal", credentials: "BDS, GDC: 234561" },
  { img: d2, name: "Dr. James Okafor", role: "Cosmetic & Restorative Dentist", credentials: "BDS, MSc" },
  { img: d3, name: "Dr. Priya Sharma", role: "Orthodontist · Invisalign Provider", credentials: "BDS, MOrth" },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-24 lg:py-32 bg-brand-tint/60">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-white/80 text-brand text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2">Meet Our Dental Team</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold text-balance text-primary">Committed to Your Smile</h2>
          <p className="mt-4 text-muted-foreground text-lg">Our experienced team is here to make every visit positive and personalised — with gentle hands and caring hearts.</p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {docs.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-elegant transition-all"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-primary/80 to-transparent translate-y-6 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center gap-2.5">
                    {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                      <a key={idx} href="#" aria-label="social" className="grid place-items-center size-9 rounded-full bg-white/15 backdrop-blur text-white hover:bg-white hover:text-primary transition-colors">
                        <Icon className="size-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-primary">{d.name}</h3>
                <p className="text-sm text-brand mt-1">{d.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{d.credentials}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
