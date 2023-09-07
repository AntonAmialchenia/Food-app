import { FC } from "react";
import { IDish } from "../../interfaces";
import { MinusIcon } from "../../icons/MinusIcon";
import { PlusIcon } from "../../icons/PlusIcon";
import { useBasket } from "../../store/useBasket";

interface BasketItemProps {
  item: IDish;
}

export const BasketItem: FC<BasketItemProps> = ({ item }) => {
  const addDishesBasket = useBasket((state) => state.addDishesBasket);
  const removeDish = useBasket((state) => state.removeDish);
  return (
    <div className="flex flex-col flex-[1_0_auto]">
      <div className=" flex items-center justify-between">
        <div className="flex items-center">
          <div className="p-2 bg-[#F8F7F5] rounded-2xl">
            <img
              className="w-20 "
              src={item.image_url}
              alt={item.description}
            />
          </div>
          <div>
            <h3 className="font-semibold text-xl leading-[1.05rem] mb-2">
              {item.name}
            </h3>
            <p className="text-sm leading-[0.963rem] mb-2">
              <span className="font-semibold">{item?.price} ₽</span> .
              <span className="text-[rgba(0,0,0,0.4)]"> {item?.weight}г</span>
            </p>
          </div>
        </div>
        <div className="font-bolt text-3xl flex items-center gap-3 py-1 px-2 bg-[#F8F7F5] rounded-[0.625rem]">
          <MinusIcon
            onClick={() => removeDish(item.id)}
            className="cursor-pointer hover:bg-[#e9e8e6] transition-colors rounded"
          />
          <span>{item.count}</span>
          <PlusIcon
            onClick={() => addDishesBasket(item)}
            className="cursor-pointer hover:bg-[#e9e8e6] transition-colors rounded"
          />
        </div>
      </div>
    </div>
  );
};
