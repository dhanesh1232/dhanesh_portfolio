"use client";
import { ToastProvider } from "@/components/ui/use-toast";
import { ThemeProvider } from "next-themes";
import * as React from "react";

interface PortfolioContextType {
  showFill: boolean;
  setShowFill: (value: boolean) => void;
  showOffer: boolean;
  setShowOffer: (value: boolean) => void;

  // New
  state?: Record<string, boolean>;
  handleToChangeState: (key: string, value: boolean) => void;
}

const defaultState: Record<string, boolean> = {
  mounted: false,
  fillOut: false,
  offer: false,
};

const PortfolioContext = React.createContext<PortfolioContextType | undefined>(
  undefined
);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [showFill, setShowFill] = React.useState<boolean>(false);
  const [showOffer, setShowOffer] = React.useState<boolean>(false);
  const [state, setState] =
    React.useState<Record<string, boolean>>(defaultState);

  React.useEffect(() => {
    const handlePing = async () => {
      await fetch("https://api.ecodrix.com").then().catch();
    };
    handlePing();
    return () => {};
  }, []);

  const handleToChangeState = (
    key: keyof typeof defaultState,
    value: boolean
  ) => {
    setState(() => ({
      ...defaultState,
      [key]: value,
    }));
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ToastProvider>
        <PortfolioContext.Provider
          value={{
            showFill,
            setShowFill,
            setShowOffer,
            showOffer,
            state,
            handleToChangeState,
          }}
        >
          {children}
        </PortfolioContext.Provider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export const usePortfolio = () => {
  const context = React.useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within PortfolioProvider");
  }
  return context;
};
