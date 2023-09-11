import { FC } from "react";

import avatar from "../../assets/avatar.png";

import { Location } from "../Location";
import { LinksList } from "../LinksList";
import { useAuth } from "../../store";

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  const isAuth = useAuth((state) => state.isAuth);
  return (
    <div className="flex flex-col bg-white rounded-2xl h-full p-3">
      <div className="border-b border-[#A5A9B2] pb-3 mb-5">
        {isAuth && <img className="w-16 h-16" src={avatar} alt="" />}
      </div>
      <LinksList />
      {isAuth && <Location />}
    </div>
  );
};
