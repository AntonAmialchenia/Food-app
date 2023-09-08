import { FC, ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";
import clsx from "clsx";

interface CustomLinkProps {
  className?: string;
  to: string;
  children: ReactNode;
}

export const CustomLink: FC<CustomLinkProps> = ({
  className,
  to,
  children,
}) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });
  console.log(match?.pathnameBase);

  return (
    <Link to={to} className={clsx(className, match ? "text-[#3364E0]" : "")}>
      {children}
    </Link>
  );
};
