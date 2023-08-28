import { FC } from "react";
import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router";

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <div className="grid grid-cols-[1fr,_4fr] p-5 gap-5 bg-[#F8F7F5] w-full min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
};
