import { create } from "zustand";
import { IDish } from "../interfaces";
import { devtools } from "zustand/middleware";

interface BasketState {
  dishesBasket: IDish[];
  totalPrice: number;
  addDishesBasket: (item: IDish) => void;
  removeDish: (id: number) => void;
}

export const useBasket = create<BasketState>()(
  devtools((set, get) => ({
    dishesBasket: [],
    totalPrice: 0,

    addDishesBasket: (item) => {
      const findItem = get().dishesBasket.find((el) => el.id === item.id);

      if (findItem) {
        findItem.count!++;
      } else {
        set((state) => ({
          dishesBasket: [...state.dishesBasket, { ...item, count: 1 }],
        }));
      }

      const sumPrice = get().dishesBasket.reduce((sum, el) => {
        return sum + el.price * el.count!;
      }, 0);

      set({ totalPrice: sumPrice });
    },
    removeDish: (id) => {
      const findItem = get().dishesBasket.find((el) => el.id === id);
      if (findItem) {
        findItem.count!--;
        set((state) => ({
          totalPrice: state.totalPrice - findItem.price,
        }));
      }
      if (findItem && findItem.count! < 1) {
        set((state) => ({
          dishesBasket: state.dishesBasket.filter((el) => el.id !== id),
        }));
      }
    },
  })),
);
