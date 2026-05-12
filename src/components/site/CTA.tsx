import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="bg-gradient-cta text-white">
      <div className="container-x py-16 lg:py-20 grid lg:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">Ready to Book Your Dental Appointment?</h2>
          <p className="mt-3 text-white/85">Same-week appointments available. Call us or book online.</p>
        </motion.div>
        <div className="flex flex-wrap items-center gap-5 lg:justify-end">
          <a href="#appointment" className="inline-flex items-center rounded-full border border-white/70 px-8 py-4 text-sm font-semibold hover:bg-white hover:text-primary transition-colors">Book Online</a>
          <p className="text-white/85 text-sm">or call <a href="tel:+442079460312" className="font-semibold underline-offset-4 hover:underline">+44 (0)20 7946 0312</a></p>
        </div>
      </div>
    </section>
  );
}
