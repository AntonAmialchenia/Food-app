import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={clsx(className, "bg-white rounded-2xl p-4")}>
      {children}
    </div>
  );
};
