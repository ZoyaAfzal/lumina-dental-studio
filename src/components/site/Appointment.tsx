import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Mail, MessageSquare, Phone, User, Stethoscope, ArrowRight } from "lucide-react";
import appointmentImg from "@/assets/appointment.jpg";
import { useState, useRef } from "react";
import { Magnetic } from "../ui/Magnetic";

const services = [
  "Teeth Whitening",
  "Dental Implants",
  "Root Canal",
  "Orthodontics",
  "Cosmetic Dentistry",
  "Dental Cleaning",
];

function Field({ icon: Icon, label, type = "text", as = "input" }: any) {
  const [val, setVal] = useState("");
  const isTextarea = as === "textarea";
  const sharedProps = {
    value: val,
    onChange: (e: any) => setVal(e.target.value),
    placeholder: " ",
    className:
      "peer w-full rounded-2xl border border-slate-200 bg-white px-12 pt-6 pb-2.5 text-sm outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/10 resize-none",
  };
  return (
    <label className="relative block">
      {isTextarea ? <textarea rows={4} {...sharedProps} /> : <input type={type} {...sharedProps} />}
      <span className="pointer-events-none absolute left-12 top-4 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs font-medium">
        {label}
      </span>
      <Icon className="absolute left-4 top-4 size-5 text-brand" />
    </label>
  );
}

export function Appointment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      id="appointment"
      ref={containerRef}
      className="py-24 lg:py-40 bg-slate-50 relative overflow-hidden"
    >
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[3rem] overflow-hidden shadow-elegant grid lg:grid-cols-12 bg-white border border-slate-100"
        >
          <div className="lg:col-span-5 relative min-h-[400px]">
            <motion.img
              style={{ y }}
              src={appointmentImg}
              alt="Modern clinic"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover scale-125"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-brand/40 opacity-90" />
            <div className="relative h-full p-10 lg:p-16 text-white flex flex-col justify-between">
              <div>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="inline-block rounded-full bg-white/15 backdrop-blur-md text-white text-[10px] font-bold tracking-[0.3em] uppercase px-5 py-2 border border-white/20"
                >
                  Book a visit
                </motion.span>
                <h2 className="mt-8 text-4xl lg:text-5xl font-bold leading-tight font-display">
                  Your journey to a <br /> perfect smile starts here
                </h2>
                <p className="mt-6 text-white/70 leading-relaxed text-lg max-w-sm">
                  Experience boutique dentistry with our same-week availability. Tell us about your
                  needs.
                </p>
              </div>
              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4 text-sm font-bold bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                  <div className="size-10 rounded-xl bg-brand grid place-items-center">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-[10px] uppercase tracking-widest">
                      Call our clinic
                    </p>
                    <p>+44 (0)20 7946 0312</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm font-bold bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                  <div className="size-10 rounded-xl bg-brand grid place-items-center">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-[10px] uppercase tracking-widest">Email us</p>
                    <p>hello@luminadentalstudio.co.uk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-7 p-10 sm:p-16 grid sm:grid-cols-2 gap-6"
          >
            <Field icon={User} label="Full name" />
            <Field icon={Mail} label="Email address" type="email" />
            <Field icon={Phone} label="Phone number" type="tel" />
            <Field icon={Calendar} label="Preferred date" type="date" />
            <div className="sm:col-span-2">
              <label className="relative block group">
                <select
                  defaultValue=""
                  className="peer w-full rounded-2xl border border-slate-200 bg-white px-12 pt-6 pb-2.5 text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 appearance-none transition-all font-medium"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute left-12 top-1.5 text-xs text-muted-foreground font-medium">
                  Service Type
                </span>
                <Stethoscope className="absolute left-4 top-4 size-5 text-brand" />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-brand transition-colors">
                  <ArrowRight className="size-4 rotate-90" />
                </div>
              </label>
            </div>
            <div className="sm:col-span-2">
              <Field
                icon={MessageSquare}
                label="Tell us a bit more about your needs (optional)"
                as="textarea"
              />
            </div>
            <div className="sm:col-span-2 mt-4 flex flex-col items-center">
              <Magnetic strength={0.1}>
                <button className="inline-flex items-center justify-center gap-3 rounded-full bg-primary text-white px-10 py-5 text-base font-bold shadow-2xl shadow-primary/20 hover:bg-slate-800 transition-all group">
                  Confirm Booking Details{" "}
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Magnetic>
              <p className="mt-4 text-center text-xs text-slate-400 font-medium">
                We typically respond within 2-4 working hours.
              </p>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
