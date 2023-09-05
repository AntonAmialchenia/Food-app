import { create } from "zustand";
import { IDish } from "../interfaces";

interface BasketState {
  dishesBasket: IDish[];
  totalPrice: number;
  addDishesBasket: (item: IDish) => void;
}

export const useBasket = create<BasketState>((set, get) => ({
  dishesBasket: [],
  totalPrice: 0,

  addDishesBasket: (item: IDish) => {
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
}));
