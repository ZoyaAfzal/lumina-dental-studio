import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Doctors } from "@/components/site/Doctors";
import { Appointment } from "@/components/site/Appointment";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumina Dental Studio — Premium Private Dentistry in Islington" },
      {
        name: "description",
        content:
          "Award-winning private dental care in the heart of North London. Gentle treatments, expert dentists, modern technology — book your appointment today.",
      },
      { property: "og:title", content: "Lumina Dental Studio — Premium Private Dentistry" },
      {
        property: "og:description",
        content: "Gentle care, beautiful results. Private dentistry in Islington, London.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <WhyChoose />
      <Doctors />
      <Appointment />
      <FAQ />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
