import { FC } from "react";

import { linkList } from "../../constants";
import { CustomLink } from "../iU/CustomLink";

interface LinksListProps {}

export const LinksList: FC<LinksListProps> = () => {
  return (
    <ul className="flex-auto">
      {linkList.map((item) => (
        <li
          className="p-3 bg-[#F8F7F5] rounded-xl mb-3 transition-colors hover:bg-[#e5e4e2] text-[#A5A9B2] hover:text-[#3364E0]"
          key={item.to}>
          <CustomLink className="flex items-center gap-3" to={item.to}>
            {item.element} {item.text}
          </CustomLink>
        </li>
      ))}
    </ul>
  );
};
