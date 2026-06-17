import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import { PortfolioProvider } from "@/context/parent";
import { MainLayout } from "@/components/layout/main";
import { Toaster } from "sonner";
import Script from "next/script";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const OG_IMAGE = "https://portfolio.ecodrix.com/og-card.png";

export const metadata: Metadata = {
  title: {
    default: "Dhanesh Mekalthuru — Full-Stack Developer & Founder of ECODrIx",
    template: "%s | Dhanesh M.",
  },
  description:
    "Dhanesh Mekalthuru (Erix) — full-stack developer, SaaS builder, and founder of ECODrIx. Architect of the ERIX-CRM, ERIX-FLOW, ERIX-LAIE, and ErixStore product suite. Building AI automation, n8n workflows, and web infrastructure end-to-end.",
  metadataBase: new URL("https://portfolio.ecodrix.com"),
  keywords: [
    "Dhanesh Mekalthuru",
    "Dhanesh M.",
    "Dhanesh M Reddy",
    "who is Dhanesh Mekalthuru",
    "Erix",
    "erix.dhanesh",
    "ECODrIx founder",
    "ECODrIx CEO",
    "ECODrix",
    "ERIX CRM",
    "ERIX-FLOW",
    "ERIX-LAIE",
    "ErixStore",
    "Relay Fabric",
    "full stack developer India",
    "full stack developer Andhra Pradesh",
    "SaaS architect India",
    "SaaS founder India",
    "AI automation engineer",
    "n8n workflows",
    "WhatsApp API integration",
    "Andhra Pradesh software engineer",
    "next.js developer India",
    "node.js engineer India",
    "freelance full stack developer",
  ],
  authors: [
    { name: "Dhanesh Mekalthuru", url: "https://portfolio.ecodrix.com" },
  ],
  creator: "Dhanesh Mekalthuru",
  publisher: "Dhanesh Mekalthuru",
  alternates: {
    canonical: "https://portfolio.ecodrix.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Dhanesh Mekalthuru — Full-Stack Developer & Founder of ECODrIx",
    description:
      "Building scalable SaaS platforms, AI automations, and the ERIX product suite. Founder of ECODrIx.",
    url: "https://portfolio.ecodrix.com",
    siteName: "Dhanesh Mekalthuru — Portfolio",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Dhanesh Mekalthuru — Full-Stack Developer & ECODrIx Founder",
      },
    ],
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanesh Mekalthuru — Full-Stack Developer & Founder of ECODrIx",
    description:
      "Full-stack engineer behind ECODrIx and the ERIX product suite. Building AI automation and SaaS infrastructure end-to-end.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/og-card.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="jl1vkjxmuowl2xl4ame6u3fdbltm1j"
        />

        {/* WebSite + Organization JSON-LD — anchors the portfolio in the
            same identity graph as ecodrix.com. Person schema lives in
            page.tsx so it loads on the homepage. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://portfolio.ecodrix.com/#website",
              url: "https://portfolio.ecodrix.com",
              name: "Dhanesh Mekalthuru — Portfolio",
              description:
                "Personal portfolio of Dhanesh Mekalthuru (Erix) — founder of ECODrIx and architect of the ERIX product suite.",
              inLanguage: "en",
              publisher: { "@id": "https://portfolio.ecodrix.com/#dhanesh" },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://portfolio.ecodrix.com/?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <Script id="fb-pixel" strategy="afterInteractive">
          {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1134219955577693');
    fbq('track', 'PageView');
  `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1134219955577693&ev=PageView&noscript=1"
          />
        </noscript>
      </head>

      <body
        className={`${syne.variable} ${geist.variable} ${geistMono.variable} antialiased`}
      >
        <PortfolioProvider>
          <Toaster
            theme="dark"
            toastOptions={{
              style: {
                background: "var(--p-elevated)",
                border: "1px solid var(--p-border-mid)",
                color: "var(--p-text)",
              },
            }}
          />
          <MainLayout>{children}</MainLayout>
        </PortfolioProvider>
      </body>
    </html>
  );
}
