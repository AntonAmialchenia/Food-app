import { FC } from "react";

import avatar from "../../assets/avatar.png";

import { Location } from "../Location";
import { LinksList } from "../LinksList";
import { useAuth } from "../../store";
import { Container } from "../iU/Container";

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  const isAuth = useAuth((state) => state.isAuth);
  return (
    <Container className="flex flex-col h-full">
      <div className="border-b border-[#A5A9B2] pb-3 mb-5">
        {isAuth && <img className="w-16 h-16" src={avatar} alt="" />}
      </div>
      <LinksList />
      {isAuth && <Location />}
    </Container>
  );
};
