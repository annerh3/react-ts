import { DeliveryParcel } from "@carbon/icons-react";

export const Card = () => {
  return (
    <main className="mt-10">
      <text className="p-10 text-xl rounded-lg carbon-theme">
        Ever gay
        <DeliveryParcel size={32} className="inline-block ml-2 mb-1" />
      </text>
    </main>
  );
};
