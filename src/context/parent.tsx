"use client";
import * as React from "react";

interface PortfolioContextType {
  showFill: boolean;
  setShowFill: (value: boolean) => void;
  showOffer: boolean;
  setShowOffer: (value: boolean) => void;
}

const PortfolioContext = React.createContext<PortfolioContextType | undefined>(
  undefined
);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [showFill, setShowFill] = React.useState<boolean>(false);
  const [showOffer, setShowOffer] = React.useState<boolean>(false);

  return (
    <PortfolioContext.Provider
      value={{ showFill, setShowFill, setShowOffer, showOffer }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export const usePortfolio = () => {
  const context = React.useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within PortfolioProvider");
  }
  return context;
};
