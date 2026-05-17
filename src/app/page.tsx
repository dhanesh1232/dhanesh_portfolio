import { About } from "@/components/home/About";
import { ClientWall } from "@/components/home/ClientWall";
import { CTA } from "@/components/home/cta";
import { FAQ } from "@/components/home/FAQ";
import { Hero } from "@/components/home/hero";
import { MidCTA } from "@/components/home/MidCTA";
import { Positioning } from "@/components/home/Positioning";
import { Process } from "@/components/home/Process";
import { Projects } from "@/components/home/Projects";
import Services from "@/components/home/Services";
import { Skills } from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
import { TrustBar } from "@/components/home/TrustBar";
import { Navbar } from "@/components/layout/header";
import Script from "next/script";

const PERSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dhanesh Mekalthuru",
  alternateName: "Dhanesh M.",
  url: "https://portfolio.ecodrix.com",
  image: "https://portfolio.ecodrix.com/og-card.png",
  jobTitle: "Full-Stack Developer & SaaS Builder",
  description:
    "Full-stack engineer building SaaS platforms, AI automations, and growth systems for clients across India, UAE, US, UK and EU.",
  email: "mailto:dhaneshreddy980@gmail.com",
  telephone: "+91-81439-63821",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/dhanesh1232",
    "https://www.linkedin.com/in/dhanesh-ecodrix/",
    "https://www.instagram.com/erix.dhanesh/",
    "https://ecodrix.com",
  ],
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "SaaS Architecture",
    "AI Automation",
    "n8n",
    "Stripe",
    "WhatsApp API",
    "SEO",
    "Lead Generation",
    "Web Scrapping"
  ],
};

const SERVICE_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Dhanesh M. — Full-Stack Engineering",
  description:
    "Full-stack web development, SaaS MVP, AI automation, and growth systems engineering.",
  url: "https://portfolio.ecodrix.com",
  image: "https://portfolio.ecodrix.com/og-card.png",
  provider: { "@type": "Person", name: "Dhanesh Mekalthuru" },
  areaServed: ["IN", "US", "AE", "GB", "EU"],
  priceRange: "$1,200 – $50,000+",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engineering services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full-Stack Web Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "SaaS MVP Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AI & Workflow Automation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "SEO, Ads & Growth Systems" },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="ld-person"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(PERSON_LD)}
      </Script>
      <Script
        id="ld-service"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(SERVICE_LD)}
      </Script>

      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Skills />
        <Projects />
        <MidCTA />
        <ClientWall />
        <Testimonials />
        <Services />
        <Process />
        <Positioning />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
