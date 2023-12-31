import { FC } from "react";
import { IconProps } from "../interfaces";

export const HeartIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M12 7.16221C9.92589 2.45596 2.66663 2.95722 2.66663 8.97235C2.66663 14.9875 12 20 12 20C12 20 21.3333 14.9875 21.3333 8.97235C21.3333 2.95722 14.074 2.45596 12 7.16221Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
