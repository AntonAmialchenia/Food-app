import { FC } from "react";
import { NavLink } from "react-router-dom";
import { linkList } from "../../constants";

import avatar from "../../assets/avatar.png";
import { LocationIcon } from "../../icons/LocationIcon";

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl h-full p-3">
      <div className="border-b border-[#A5A9B2] pb-3 mb-5">
        <img className="w-16 h-16" src={avatar} alt="" />
      </div>
      <ul className="flex-auto">
        {linkList.map((item) => (
          <li
            className="p-3 bg-[#F8F7F5] rounded-xl mb-3 transition-colors hover:bg-[#e5e4e2] text-[#A5A9B2] hover:text-[#3364E0]"
            key={item.to}>
            <NavLink className="flex items-center gap-3" to={item.to}>
              {item.element} {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <LocationIcon className="mt-1" />
        <div>
          <h5 className="text-lg">Санкт-Петербург</h5>
          <p className="text-[#A5A9B2] text-xs">12 Августа, 2023</p>
        </div>
      </div>
    </div>
  );
};
