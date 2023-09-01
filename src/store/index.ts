import { create } from "zustand";
import { fetchCategories } from "../api/fetchCategories";
import { ICategory } from "../interfaces";

interface CategoriesState {
  categories: ICategory[];
  isLoading: boolean;
  error: null | string;
  fetchAllCategories: () => void;
}
export const useCategories = create<CategoriesState>((set) => ({
  categories: [],
  isLoading: false,
  error: null,
  fetchAllCategories: async () => {
    set({ isLoading: true });

    try {
      const data = await fetchCategories();
      if (!data.length) throw new Error("Failed to fetch. Try again.");
      set({ categories: data, error: null });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));
