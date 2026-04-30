"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Footer } from "./Footer";
import { CTAFloat } from "./cta-float";
import { FilloutModal } from "./fill";
import { OfferModal } from "./offer";
import { usePortfolio } from "@/context/parent";
import { CursorFollower } from "@/components/ui/CursorFollower";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const { navOpen } = usePortfolio();
  return (
    <>
      {children}
      <CursorFollower />
      <Footer />
      {path === "/" && !navOpen && <CTAFloat />}
      <FilloutModal />
      <OfferModal />
    </>
  );
};
