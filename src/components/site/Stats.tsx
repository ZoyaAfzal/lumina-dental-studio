import { motion, useInView, useMotionValue, animate, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 3989, suffix: "+", label: "Happy Patients" },
  { value: 2577, suffix: "+", label: "Smiles Transformed" },
  { value: 675, suffix: "+", label: "Implants Placed" },
  { value: 9, suffix: "+", label: "Years of Excellence" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const mv = useMotionValue(0);
  const springValue = useSpring(mv, { stiffness: 60, damping: 20 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 2.5, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, to, mv]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setVal(Math.round(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="font-display text-5xl lg:text-7xl font-bold tracking-tighter">
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-primary text-white py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-y-16 relative z-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="text-center px-4"
          >
            <div className="mb-4 inline-block">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="text-xs lg:text-sm tracking-[0.3em] uppercase text-white/50 font-bold">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
