import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Shield, Award, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Magnetic } from "../ui/Magnetic";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative pt-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y: y1 }}
          src={heroBg} 
          alt="Lumina Dental Studio" 
          className="w-full h-full object-cover scale-110" 
        />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/80" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 size-96 bg-brand/20 blur-[100px] animate-blob" />
        <div className="absolute bottom-1/4 -right-20 size-96 bg-brand-soft/20 blur-[100px] animate-blob [animation-delay:4s]" />
      </div>

      <div className="relative z-10 container-x pt-24 pb-32 lg:pt-32 lg:pb-48">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-10 shadow-2xl"
          >
            <Sparkles className="size-3.5 fill-brand text-brand" />
            Voted Islington's #1 Private Dental Clinic
          </motion.div>
          
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight text-balance"
            >
              Your Journey to a <br />
              <span className="relative inline-block mt-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-soft to-white">Luminous Smile</span>
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-12 text-xl lg:text-2xl text-slate-200/90 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Boutique private dentistry combining world-class expertise with an obsession for patient comfort. Experience the <span className="text-white">Lumina difference.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Magnetic strength={0.15}>
              <a href="#appointment" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-brand text-white px-12 py-6 text-base font-bold shadow-2xl shadow-brand/40 hover:bg-brand/90 transition-all group">
                Start Your Transformation
                <motion.span 
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >→</motion.span>
              </a>
            </Magnetic>
            <Magnetic strength={0.15}>
              <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-6 text-base font-bold hover:bg-white/20 transition-all" >
                Explore Treatments
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Floating Trust Badges */}
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-12 left-0 right-0 z-10 hidden lg:block"
      >
        <div className="container-x">
          <div className="flex justify-center gap-16 text-white/70 text-xs font-bold tracking-[0.2em] uppercase">
            <motion.div 
              whileHover={{ scale: 1.1, color: "#fff" }}
              className="flex items-center gap-3 cursor-default"
            >
              <Shield className="size-5 text-brand-soft" /> CQC Regulated
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1, color: "#fff" }}
              className="flex items-center gap-3 cursor-default"
            >
              <Award className="size-5 text-brand-soft" /> GDC Registered
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1, color: "#fff" }}
              className="flex items-center gap-3 cursor-default"
            >
              <Star className="size-5 text-brand-soft" /> 5-Star Reviews
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
