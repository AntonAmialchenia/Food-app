import { FC } from "react";
import { IconProps } from "../interfaces";

export const MinusIcon: FC<IconProps> = ({ className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path d="M7 12H17" stroke="black" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
