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
  "@id": "https://portfolio.ecodrix.com/#dhanesh",
  name: "Dhanesh Mekalthuru",
  alternateName: ["Dhanesh M.", "Erix", "erix.dhanesh", "Dhanesh Reddy"],
  url: "https://portfolio.ecodrix.com",
  mainEntityOfPage: "https://portfolio.ecodrix.com",
  image: "https://portfolio.ecodrix.com/og-card.png",
  jobTitle: "Full-Stack Developer, SaaS Builder & Founder",
  description:
    "Founder of ECODrIx, creator of the ERIX product suite (ERIX-CRM, ERIX-FLOW, ERIX-LAIE) and the ErixStore in-memory database. Full-stack engineer architecting AI automation systems and SaaS platforms.",
  email: "mailto:dhaneshreddy980@gmail.com",
  telephone: "+91-81439-63821",
  nationality: { "@type": "Country", name: "India" },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://ecodrix.com",
    "https://ecodrix.com/founder",
    "https://github.com/dhanesh1232",
    "https://www.linkedin.com/in/dhanesh-ecodrix/",
    "https://www.linkedin.com/in/dhanesh-mekalthuru-5baa9323b",
    "https://www.instagram.com/erix.dhanesh/",
  ],
  founderOf: {
    "@type": "Organization",
    "@id": "https://ecodrix.com/#organization",
    name: "ECODrIx",
    url: "https://ecodrix.com",
    logo: "https://ecodrix.com/logo.png",
    description:
      "Unified business infrastructure platform combining CRM, AI automation, WhatsApp messaging, email marketing, and cloud storage.",
  },
  brand: [
    {
      "@type": "Brand",
      name: "ERIX-CRM",
      description:
        "Sales pipelines, lead scoring, and client portal communication infrastructure.",
    },
    {
      "@type": "Brand",
      name: "ERIX-FLOW",
      description:
        "Drag-and-drop workflow visualizer and automation execution engine.",
    },
    {
      "@type": "Brand",
      name: "ERIX-LAIE",
      description:
        "Distributed scraping, B2B lead generation, and enrichment platform.",
    },
    {
      "@type": "Brand",
      name: "ErixStore",
      description:
        "Proprietary high-performance in-memory database and caching server.",
    },
    {
      "@type": "Brand",
      name: "Relay Fabric",
      description:
        "Distributed worker engine executing AI research and scraper campaigns across regions.",
    },
  ],
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Drizzle ORM",
    "SaaS Architecture",
    "Multi-tenant Systems",
    "AI Automation",
    "n8n Workflows",
    "Stripe",
    "WhatsApp Cloud API",
    "Meta Business API",
    "AWS SES",
    "Cloudflare R2",
    "SEO Engineering",
    "Lead Generation",
    "Web Scraping",
    "ErixStore Database",
    "Relay Fabric",
    "Distributed Workers",
    "Claude API",
    "Gemini API",
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
