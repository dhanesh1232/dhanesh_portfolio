import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/header";
import { Footer } from "@/components/layout/Footer";
import { CTAFloat } from "@/components/layout/cta-float";
import { PortfolioProvider } from "@/context/parent";
import { MainLayout } from "@/components/layout/main";

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
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100`}
      >
        <PortfolioProvider>
          <MainLayout>{children}</MainLayout>
        </PortfolioProvider>
      </body>
    </html>
  );
}
