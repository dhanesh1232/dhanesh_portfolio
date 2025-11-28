"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";
import { CTAFloat } from "./cta-float";
import { FilloutModal } from "./fill";
import { OfferModal } from "./offer";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  return (
    <>
      {children}
      <Footer />
      {path === "/" && <CTAFloat />}
      <FilloutModal />
      <OfferModal />
    </>
  );
};
