import { useEffect, useState } from "react";
import { IDish } from "../interfaces/index";

import { useDishes } from "../store";

export const useSearchAndVisibleModal = (dishes: IDish[], query?: string) => {
  const fetchAllDishes = useDishes((state) => state.fetchAllDishes);

  const [idDish, setIdDish] = useState(1);
  const [visible, setVisible] = useState(false);

  const dishModal = dishes.find((item) => item.id === idDish);
  let searchDishes;
  if (query) {
    searchDishes = dishes.filter((dish) =>
      dish.name.toLowerCase().includes(query.toLowerCase()),
    );
  }

  useEffect(() => {
    fetchAllDishes();
  }, [fetchAllDishes]);

  return { dishModal, setIdDish, visible, setVisible, searchDishes };
};
