import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 3989, suffix: "+", label: "Happy Patients" },
  { value: 2577, suffix: "+", label: "Smiles Transformed" },
  { value: 675, suffix: "+", label: "Implants Placed" },
  { value: 9, suffix: "+", label: "Years of Excellence" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.8, ease: "easeOut", onUpdate: (v) => setVal(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to, mv]);
  return (
    <span ref={ref} className="font-display text-5xl lg:text-6xl font-semibold tracking-tight">
      {val.toLocaleString()}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-primary text-white py-16 lg:py-20">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-y-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center lg:border-r last:border-r-0 border-white/10"
          >
            <Counter to={s.value} suffix={s.suffix} />
            <p className="mt-3 text-xs lg:text-sm tracking-[0.22em] uppercase text-white/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
