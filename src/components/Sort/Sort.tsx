import clsx from "clsx";
import { Dispatch, FC, SetStateAction } from "react";

interface SortProps {
  items: string[];
  id: number;
  onChange: Dispatch<SetStateAction<number>>;
}

export const Sort: FC<SortProps> = ({ items, id, onChange }) => {
  return (
    <ul className="flex gap-3 mb-10">
      {items.map((item, i) => (
        <li
          key={i}
          onClick={() => onChange(i)}
          className={clsx(
            id === i ? "bg-[#3364E0] text-white" : "bg-[#F8F7F5]",
            "rounded-xl  text-xl px-4 py-2.5 cursor-pointer hover:bg-[#3364E0] hover:text-white transition-colors",
          )}>
          {item}
        </li>
      ))}
    </ul>
  );
};
