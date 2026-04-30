import { About } from "@/components/home/About";
import { CTA } from "@/components/home/cta";
import { Hero } from "@/components/home/hero";
import { Process } from "@/components/home/Process";
import { Projects } from "@/components/home/Projects";
import Services from "@/components/home/Services";
import { Skills } from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
import { Navbar } from "@/components/layout/header";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Services />
        <Process />
        <CTA />
      </main>
    </>
  );
}
