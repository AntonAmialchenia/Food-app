import { FC, useEffect } from "react";
import { useDishes } from "../../store";
import { Dish } from "../../components/Dish";
import { Loader } from "../../components/Loader";

interface DishesPageProps {}

export const DishesPage: FC<DishesPageProps> = () => {
  const { dishes, isLoading, fetchAllDishes, error } = useDishes(
    (state) => state,
  );

  const sceletons = [...new Array(9)].map((_, index) => (
    <Loader key={index} variant="dish" />
  ));

  useEffect(() => {
    fetchAllDishes();
  }, [fetchAllDishes]);

  return (
    <div className="bg-white rounded-2xl grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] auto-cols-max gap-x-3 gap-y-4 p-4">
      {error && <h2>{error}</h2>}
      {isLoading && sceletons}
      {dishes.map((item) => (
        <Dish key={item.id} item={item} />
      ))}
    </div>
  );
};
