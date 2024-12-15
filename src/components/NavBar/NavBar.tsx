import { FC } from "react";

import avatar from "../../assets/avatar.png";

import { Location } from "../Location";
import { LinksList } from "../LinksList";
import { useAuth, useBasket } from "../../store";
import { Container } from "../iU/Container";
import { BasketIcon } from "../../icons/BasketIcon";

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  const isAuth = useAuth((state) => state.isAuth);
  const countDishes = useBasket((state) => state.totalCount);

  return (
    <Container className="flex flex-col h-full">
      <div className="flex items-center justify-between border-b border-[#A5A9B2] pb-3 mb-5">
        {isAuth && <img className="w-16 h-16" src={avatar} alt="" />}
        <div className="relative">
          <BasketIcon className="w-5 h-5 text-[#3364E0] z-[1]" />
          <span className="absolute  -top-2 -right-2 text-xs font-semibold px-1 bg-[#F8F7F5] rounded-full">
            {countDishes}
          </span>
        </div>
      </div>
      <LinksList />
      {isAuth && <Location />}
    </Container>
  );
};
