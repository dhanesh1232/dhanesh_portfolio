import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PortfolioProvider } from "@/context/parent";
import { MainLayout } from "@/components/layout/main";
import { Toaster } from "sonner";
import MetaPixel from "@/components/tracking/MetaPixel";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhanesh - Full-Stack Developer & SaaS Builder",
  description:
    "Portfolio of Dhanesh - Building scalable SaaS platforms and open-source tools",
  icons: {
    icon: "https://res.cloudinary.com/dhzw6k0vc/image/upload/v1763133090/DN_u5rrpd.png",
    apple:
      "https://res.cloudinary.com/dhzw6k0vc/image/upload/v1763133090/DN_u5rrpd.png",
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
        <link
          rel="icon"
          href="https://res.cloudinary.com/dhzw6k0vc/image/upload/v1763133090/DN_u5rrpd.png"
          type="image/png"
        />
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100`}
      >
        <PortfolioProvider>
          {/* <MetaPixel /> */}
          <Toaster />
          <MainLayout>{children}</MainLayout>
        </PortfolioProvider>
      </body>
    </html>
  );
}
