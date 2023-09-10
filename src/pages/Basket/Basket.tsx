import { FC } from "react";
import { useBasket } from "../../store/useBasket";
import { BasketItem } from "../../components/BasketItem";
import { Button } from "../../components/Button";

interface BasketProps {}

export const Basket: FC<BasketProps> = () => {
  const { dishesBasket, totalPrice } = useBasket();
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-3">
      {dishesBasket.length ? (
        ""
      ) : (
        <div className="flex-[1_0_auto] flex items-center justify-center">
          <h2 className="font-semibold text-3xl">Товаров в корзине пока нет</h2>
        </div>
      )}
      {dishesBasket.map((item) => (
        <BasketItem key={item.id} item={item} />
      ))}
      <Button className="flex-[0_0_auto] py-[0.94rem]">
        Оплатить {totalPrice} ₽
      </Button>
    </div>
  );
};
