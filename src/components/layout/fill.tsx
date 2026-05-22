import { usePortfolio } from "@/context/parent";
import { FilloutPopupEmbed } from "@fillout/react";

export const FilloutModal = () => {
  const { state, handleToChangeState } = usePortfolio();

  if (!state?.fillOut) return null;

  return (
    <FilloutPopupEmbed
      filloutId="ctANjyyVC1us"
      inheritParameters
      isOpen={true}
      onClose={() => handleToChangeState?.("fillOut", false)}
    />
  );
};
