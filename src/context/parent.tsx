"use client";
import { ToastProvider } from "@/components/ui/use-toast";
import { defaultForm } from "@/lib/data";
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
  slotsLeft?: number;
  form: Record<string, string>;
  setForm: (value: Record<string, string>) => void;
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
  const [slotsLeft, setSlotsLeft] = React.useState<number>(85);
  const [state, setState] =
    React.useState<Record<string, boolean>>(defaultState);
  const [form, setForm] = React.useState<Record<string, string>>(defaultForm);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlotsLeft((prev) => (prev > 82 ? prev - 1 : prev));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Facebook pixels tracking
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(
        "fbq in client:",
        (window as unknown as { fbq?: unknown }).fbq
      );
    }
  }, []);

  React.useEffect(() => {
    const handlePing = async () => {
      try {
        await fetch("https://api.ecodrix.com");
      } catch (error) {
        // Silently ignore network errors to prevent runtime crashes
      }
    };
    handlePing();
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
            slotsLeft,
            form,
            setForm,
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
