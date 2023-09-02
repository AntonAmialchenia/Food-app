import { create } from "zustand";
import { fetchDishes } from "./../api/fetchDishes";
import { IDish } from "../interfaces";

interface DishesState {
  dishes: IDish[];
  isLoading: boolean;
  error: null | string;
  fetchAllDishes: () => void;
}

export const useDishes = create<DishesState>((set) => ({
  dishes: [],
  isLoading: false,
  error: null,
  fetchAllDishes: async () => {
    set({ isLoading: true });

    try {
      const data = await fetchDishes();
      if (!data.length) throw new Error("Failed to fetch. Try again.");
      set({ dishes: data, error: null });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));
