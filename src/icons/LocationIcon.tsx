import { FC } from "react";
import { IconProps } from "../interfaces";

export const LocationIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 8.50051C11.5 7.11924 10.3808 6 9.00051 6C7.61924 6 6.5 7.11924 6.5 8.50051C6.5 9.88076 7.61924 11 9.00051 11C10.3808 11 11.5 9.88076 11.5 8.50051Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99951 19C7.80104 19 1.5 13.8984 1.5 8.56329C1.5 4.38664 4.8571 1 8.99951 1C13.1419 1 16.5 4.38664 16.5 8.56329C16.5 13.8984 10.198 19 8.99951 19Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
