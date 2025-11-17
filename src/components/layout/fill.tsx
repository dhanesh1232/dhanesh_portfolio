import { usePortfolio } from "@/context/parent";
import { FilloutPopupEmbed } from "@fillout/react";

export const FilloutModal = () => {
  const { showFill, setShowFill } = usePortfolio();
  return (
    <FilloutPopupEmbed
      filloutId="ctANjyyVC1us"
      inheritParameters
      isOpen={showFill}
      onClose={() => setShowFill(false)}
    />
  );
};
