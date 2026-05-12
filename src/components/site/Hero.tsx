import { motion } from "framer-motion";
import { Calendar, Clock, Mail, Phone, Star, Shield, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Lumina Dental Studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/80" />
      </div>

      <div className="relative z-10 container-x pt-24 pb-32 lg:pt-32 lg:pb-48">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-8"
          >
            <Star className="size-3 fill-brand text-brand" />
            Voted Islington's #1 Private Dental Clinic
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight text-balance"
          >
            Your Journey to a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-soft to-white">Luminous Smile</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed"
          >
            Boutique private dentistry combining world-class expertise with a obsession for patient comfort. Experience the Lumina difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a href="#appointment" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-brand text-white px-10 py-5 text-sm font-bold shadow-2xl shadow-brand/30 hover:bg-brand/90 hover:-translate-y-1 transition-all">
              Start Your Transformation
            </a>
            <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 text-sm font-bold hover:bg-white/20 transition-all">
              Explore Treatments
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Trust Badges */}
      <div className="absolute bottom-10 left-0 right-0 z-10 hidden lg:block">
        <div className="container-x">
          <div className="flex justify-center gap-12 text-white/60 text-sm font-semibold tracking-wide uppercase">
            <div className="flex items-center gap-3"><Shield className="size-5" /> CQC Regulated</div>
            <div className="flex items-center gap-3"><Award className="size-5" /> GDC Registered</div>
            <div className="flex items-center gap-3"><Star className="size-5" /> 5-Star Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
