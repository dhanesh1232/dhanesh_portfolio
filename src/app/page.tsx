import { About } from "@/components/home/About";
import { CTA } from "@/components/home/cta";
import { Hero } from "@/components/home/hero";
import { Projects } from "@/components/home/Projects";
import Services from "@/components/home/Services";
import { Skills } from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="bg-transparent">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <CTA />
    </div>
  );
}
