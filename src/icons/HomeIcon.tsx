import { FC } from "react";
import { IconProps } from "../interfaces";

export const HomeIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none">
      <path
        d="M14 20V17"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.07 4.81997L5.14 10.37C4.36 10.99 3.86 12.3 4.03 13.28L5.36 21.24C5.6 22.66 6.96 23.81 8.4 23.81H19.6C21.03 23.81 22.4 22.65 22.64 21.24L23.97 13.28C24.13 12.3 23.63 10.99 22.86 10.37L15.93 4.82997C14.86 3.96997 13.13 3.96997 12.07 4.81997Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
