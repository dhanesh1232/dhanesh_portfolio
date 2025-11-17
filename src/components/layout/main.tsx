"use client";

import { usePortfolio } from "@/context/parent";
import { Navbar } from "./header";
import { Footer } from "./Footer";
import { CTAFloat } from "./cta-float";
import { FilloutModal } from "./fill";
import { OfferModal } from "./offer";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <CTAFloat />
      <FilloutModal />
      <OfferModal />
    </>
  );
};
