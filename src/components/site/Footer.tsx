import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { ToothIcon } from "./ToothIcon";

const company = [
  "Home",
  "Our Services",
  "Meet the Team",
  "Patient Information",
  "Blog & Dental Advice",
  "Contact Us",
];
const treatments = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Orthodontics & Invisalign",
  "Dental Implants",
  "Hygiene & Gum Health",
  "Nervous Patient Care",
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3 group">
      <div className="relative">
        <span className="grid place-items-center size-11 rounded-xl bg-white/10 text-white shadow-lg transition-transform duration-300">
          <ToothIcon className="size-7" />
        </span>
      </div>
      <span className="text-xl font-display font-bold tracking-tight text-white">
        Lumina<span className="text-brand-soft">Dental</span>
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-x py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 text-white/70 max-w-sm leading-relaxed">
              Premium private dentistry in the heart of Islington — gentle care, beautiful results.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid place-items-center size-10 rounded-full bg-white/10 hover:bg-white hover:text-primary transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-lg">Company</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {company.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-lg">Our Treatments</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {treatments.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-lg">Find Us</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="size-4 mt-0.5 shrink-0" />
                <span>
                  <span className="text-white font-semibold block">Lumina Dental Studio</span>47
                  Upper Street
                  <br />
                  Islington, London N1 0QH
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 mt-0.5 shrink-0" />
                <span>+44 (0)20 7946 0312</span>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 mt-0.5 shrink-0" />
                <span>hello@luminadentalstudio.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Lumina Dental Studio. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://axistechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-soft transition-colors font-medium"
            >
              AxisTechGroup
            </a>
          </p>
          <p>Mon–Fri: 08:00–19:00 · Sat: 09:00–14:00</p>
        </div>
      </div>
    </footer>
  );
}
