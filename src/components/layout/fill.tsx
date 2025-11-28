import { usePortfolio } from "@/context/parent";
import { FilloutPopupEmbed } from "@fillout/react";

export const FilloutModal = () => {
  const { state, handleToChangeState } = usePortfolio();
  return (
    <FilloutPopupEmbed
      filloutId="ctANjyyVC1us"
      inheritParameters
      isOpen={state?.fillOut ?? false}
      onClose={() => handleToChangeState?.("fillOut", false)}
    />
  );
};
