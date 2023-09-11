import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        "bg-[#3364E0] transition-colors hover:bg-[#486ac0] text-white rounded-[0.625rem]",
      )}>
      {children}
    </button>
  );
};
