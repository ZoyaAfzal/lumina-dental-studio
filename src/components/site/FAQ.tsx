import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How quickly can I get an appointment?",
    a: "We typically offer new patient appointments within 48–72 hours. For dental emergencies, we aim to see you the same day. Call us on +44 (0)20 7946 0312.",
  },
  {
    q: "Are you accepting new NHS patients?",
    a: "We are a fully private practice and do not currently accept NHS patients, however we offer transparent self-pay pricing and flexible interest-free finance plans.",
  },
  {
    q: "Do you offer treatment for nervous patients?",
    a: "Absolutely. Our team is trained in gentle dentistry, with calm sedation options and unhurried appointments designed to put anxious patients completely at ease.",
  },
  {
    q: "What teeth whitening options do you offer?",
    a: "We offer in-clinic professional whitening as well as custom take-home kits, with results that last and are clinically supervised throughout.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-14">
        <div>
          <span className="inline-block rounded-full bg-brand-tint text-brand text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2">
            Everything You Need to Know
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-balance text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-muted-foreground">
            Can't find your answer? Call us on{" "}
            <a className="text-brand font-semibold" href="tel:+442079460312">
              +44 (0)20 7946 0312
            </a>{" "}
            or email{" "}
            <a className="text-brand font-semibold" href="mailto:hello@luminadentalstudio.co.uk">
              hello@luminadentalstudio.co.uk
            </a>
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl border bg-card transition-colors ${isOpen ? "border-brand shadow-card" : "border-border/70"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="font-display font-semibold text-lg text-primary">{f.q}</span>
                  <span
                    className={`grid place-items-center size-9 rounded-full transition-all shrink-0 ${isOpen ? "bg-brand text-white rotate-180" : "bg-secondary text-foreground"}`}
                  >
                    <ChevronDown className="size-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
