import { FC } from "react";
import { IconProps } from "../interfaces";

export const BasketIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none">
      <path
        d="M10.81 4L7.19 7.63"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.19 4L20.81 7.63"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 9.84998C4 7.99998 4.99 7.84998 6.22 7.84998H21.78C23.01 7.84998 24 7.99998 24 9.84998C24 12 23.01 11.85 21.78 11.85H6.22C4.99 11.85 4 12 4 9.84998Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M11.76 16V19.55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.36 16V19.55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5.5 12L6.91 20.64C7.23 22.58 8 24 10.86 24H16.89C20 24 20.46 22.64 20.82 20.76L22.5 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
