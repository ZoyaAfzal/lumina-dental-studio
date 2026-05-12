import { motion } from "framer-motion";
import { Calendar, Mail, MessageSquare, Phone, User, Stethoscope, ArrowRight } from "lucide-react";
import appointmentImg from "@/assets/appointment.jpg";
import { useState } from "react";

const services = ["Teeth Whitening","Dental Implants","Root Canal","Orthodontics","Cosmetic Dentistry","Dental Cleaning"];

function Field({ icon: Icon, label, type = "text", as = "input" }: any) {
  const [val, setVal] = useState("");
  const isTextarea = as === "textarea";
  const sharedProps = {
    value: val,
    onChange: (e: any) => setVal(e.target.value),
    placeholder: " ",
    className:
      "peer w-full rounded-2xl border border-border bg-background/80 backdrop-blur px-12 pt-6 pb-2.5 text-sm outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/15 resize-none",
  };
  return (
    <label className="relative block">
      {isTextarea ? (
        <textarea rows={4} {...sharedProps} />
      ) : (
        <input type={type} {...sharedProps} />
      )}
      <span className="pointer-events-none absolute left-12 top-4 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs">{label}</span>
      <Icon className="absolute left-4 top-4 size-5 text-brand" />
    </label>
  );
}

export function Appointment() {
  return (
    <section id="appointment" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="rounded-[2.5rem] overflow-hidden shadow-elegant grid lg:grid-cols-12 bg-card border border-border/60">
          <div className="lg:col-span-5 relative min-h-[300px]">
            <img src={appointmentImg} alt="Modern clinic" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-hero opacity-85" />
            <div className="relative h-full p-10 lg:p-12 text-white flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-white/15 backdrop-blur text-white text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5">Book a visit</span>
                <h2 className="mt-5 text-4xl lg:text-5xl font-semibold leading-tight">Schedule your appointment</h2>
                <p className="mt-4 text-white/80 leading-relaxed">Same-week availability. Tell us about your needs and we'll be in touch within hours.</p>
              </div>
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-sm"><Phone className="size-4" /><span>+44 (0)20 7946 0312</span></div>
                <div className="flex items-center gap-3 text-sm"><Mail className="size-4" /><span>hello@luminadentalstudio.co.uk</span></div>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 sm:p-12 grid sm:grid-cols-2 gap-5"
          >
            <Field icon={User} label="Full name" />
            <Field icon={Mail} label="Email address" type="email" />
            <Field icon={Phone} label="Phone number" type="tel" />
            <Field icon={Calendar} label="Preferred date" type="date" />
            <div className="sm:col-span-2">
              <label className="relative block">
                <select defaultValue="" className="peer w-full rounded-2xl border border-border bg-background/80 px-12 pt-6 pb-2.5 text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 appearance-none">
                  <option value="" disabled>Select a service</option>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
                <span className="pointer-events-none absolute left-12 top-1.5 text-xs text-muted-foreground">Service</span>
                <Stethoscope className="absolute left-4 top-4 size-5 text-brand" />
              </label>
            </div>
            <div className="sm:col-span-2">
              <Field icon={MessageSquare} label="Tell us a bit more (optional)" as="textarea" />
            </div>
            <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta text-white px-7 py-4 text-sm font-medium shadow-elegant hover:-translate-y-0.5 transition-transform">
              Schedule Appointment <ArrowRight className="size-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
