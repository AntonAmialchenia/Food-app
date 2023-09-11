import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

interface ContainerDishesProps extends HTMLAttributes<HTMLDivElement> {}

export const ContainerDishes: FC<ContainerDishesProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(
        className,
        " grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] auto-cols-max gap-x-3 gap-y-4 ",
      )}>
      {children}
    </div>
  );
};
