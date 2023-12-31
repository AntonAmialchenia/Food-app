import { FC } from "react";
import { IconProps } from "../interfaces";

export const ProfileIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none">
      <path
        d="M14.12 14.78C14.05 14.77 13.96 14.77 13.88 14.78C12.12 14.72 10.72 13.28 10.72 11.51C10.72 9.69998 12.18 8.22998 14 8.22998C15.81 8.22998 17.28 9.69998 17.28 11.51C17.27 13.28 15.88 14.72 14.12 14.78Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.74 21.38C18.96 23.01 16.6 24 14 24C11.4 24 9.04001 23.01 7.26001 21.38C7.36001 20.44 7.96001 19.52 9.03001 18.8C11.77 16.98 16.25 16.98 18.97 18.8C20.04 19.52 20.64 20.44 20.74 21.38Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
