import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  { name: "Sarah M.", loc: "Verified Patient · Islington", text: "I've been terrified of dentists my whole life but the team at Lumina completely changed that. Dr. Whitfield is incredibly gentle and always explains everything. Best dental experience I've ever had." },
  { name: "Emma L.", loc: "Verified Patient · Finsbury Park", text: "My Invisalign treatment was seamless from start to finish. Dr. Sharma is genuinely talented and the results are better than I ever hoped for. Highly recommend." },
  { name: "Robert C.", loc: "Verified Patient · Angel", text: "The whole family comes here now, including our two young children who actually look forward to their visits. The staff are so patient and warm." },
  { name: "Aisha K.", loc: "Verified Patient · Camden", text: "Modern, calm and beautifully run. I had veneers done — the craftsmanship is stunning and the aftercare is impeccable." },
  { name: "Daniel P.", loc: "Verified Patient · Highbury", text: "Booked an emergency appointment in the morning and was seen the same day. Brilliant care from start to finish." },
];

export function Testimonials() {
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setOffset((p) => (p + 1) % reviews.length), 3500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-brand-tint/60 overflow-hidden">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-white/80 text-brand text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2">Patient Reviews</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold text-balance text-primary">Our Happy Patients</h2>
          <p className="mt-4 text-muted-foreground text-lg">Join thousands of patients across North London who trust Lumina for gentle, expert dental care.</p>
        </div>

        <div
          className="mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            animate={{ x: `calc(-${offset} * (320px + 24px))` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex gap-6"
          >
            {[...reviews, ...reviews].map((r, i) => (
              <article
                key={i}
                className="shrink-0 w-[320px] sm:w-[380px] rounded-2xl bg-card shadow-soft border border-white p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({length:5}).map((_,k) => <Star key={k} className="size-4 fill-current" />)}
                  </div>
                  <Quote className="size-7 text-brand/25" />
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-foreground/90">"{r.text}"</p>
                <hr className="my-5 border-border/70" />
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gradient-cta" />
                  <div>
                    <p className="font-semibold text-primary">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.loc}</p>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
