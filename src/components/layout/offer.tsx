"use client";
import { usePortfolio } from "@/context/parent";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

export const OfferModal = () => {
  const { showOffer, setShowOffer } = usePortfolio();
  return (
    <Dialog open={showOffer} onOpenChange={setShowOffer}>
      <DialogContent className="w-screen h-[75vh] bg-foreground p-0 pt-12 overflow-hidden gap-0 space-y-0">
        <DialogTitle className="hidden">Special Offers</DialogTitle>
        <iframe
          src="https://frequent-playground-8c6.notion.site/ebd/234bac2403aa80688e9ef71436fd7d0a"
          frameBorder="0"
          className="w-full h-full border-0 bg-transparent max-w-full"
          width="100%"
          height="100%"
          allowFullScreen
          aria-hidden="true"
          title="Offer Letter"
          scrolling="no"
        />
      </DialogContent>
    </Dialog>
  );
};
