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
  title: "Dhanesh M. — Full-Stack Developer & SaaS Builder",
  description:
    "I build fast, scalable web products, SaaS platforms, and AI-powered systems. Andhra Pradesh-based full-stack engineer & entrepreneur.",
  metadataBase: new URL("https://portfolio.ecodrix.com"),
  openGraph: {
    title: "Dhanesh M. — Full-Stack Developer & SaaS Builder",
    description:
      "Building scalable SaaS platforms, AI automations, and growth systems.",
    url: "https://portfolio.ecodrix.com",
    siteName: "Dhanesh M.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Dhanesh M. — Full-Stack Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanesh M. — Full-Stack Developer & SaaS Builder",
    description:
      "Building scalable SaaS platforms, AI automations, and growth systems.",
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
