import { FC } from "react";
import { IDish } from "../../interfaces";

interface DishProps {
  item: IDish;
}

export const Dish: FC<DishProps> = ({ item }) => {
  return (
    <div className="cursor-pointer">
      <div className="p-3 rounded-xl bg-[#F8F7F5] mb-4 flex justify-center ">
        <img
          className="max-w-[200px] h-48"
          src={item.image_url}
          alt={item.description}
        />
      </div>
      <h3 className="text-xl font-medium">{item.name}</h3>
    </div>
  );
};
