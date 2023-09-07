import { Dispatch, FC, SetStateAction } from "react";
import { IDish } from "../../interfaces";

interface DishProps {
  item: IDish;
  setIdDish: Dispatch<SetStateAction<number>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export const Dish: FC<DishProps> = ({ item, setIdDish, setVisible }) => {
  const handlerClick = (id: number) => {
    setIdDish(id);
    setVisible(true);
  };
  return (
    <div onClick={() => handlerClick(item.id)} className="cursor-pointer">
      <div className="p-3 rounded-xl bg-[#F8F7F5] mb-4 flex justify-center transition-colors hover:bg-[#e5e4e2]">
        <img
          className="max-w-[12.5rem] h-48"
          src={item.image_url}
          alt={item.description}
        />
      </div>
      <h3 className="text-xl font-medium">{item.name}</h3>
    </div>
  );
};
