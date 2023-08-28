import { FC } from "react";
import { Outlet } from "react-router";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className="">
      <h1>HomePage component</h1>
      <Outlet />
    </div>
  );
};
