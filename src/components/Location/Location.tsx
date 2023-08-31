import { FC } from "react";
import { LocationIcon } from "../../icons/LocationIcon";

interface LocationProps {}

export const Location: FC<LocationProps> = () => {
  return (
    <div className="flex gap-2">
      <LocationIcon className="mt-1" />
      <div>
        <h5 className="text-lg">Санкт-Петербург</h5>
        <p className="text-[#A5A9B2] text-xs">12 Августа, 2023</p>
      </div>
    </div>
  );
};
