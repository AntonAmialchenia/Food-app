import { FC, useEffect, useState } from "react";
import { useDishes } from "../../store";
import { Dish } from "../../components/Dish";
import { Loader } from "../../components/Loader";
import { Sort } from "../../components/Sort";
import { sortItems } from "../../constants";

interface DishesPageProps {}

export const DishesPage: FC<DishesPageProps> = () => {
  const { dishes, isLoading, fetchAllDishes, error } = useDishes(
    (state) => state,
  );
  const [id, setId] = useState(0);
  const sceletons = [...new Array(9)].map((_, index) => (
    <Loader key={index} variant="dish" />
  ));

  useEffect(() => {
    fetchAllDishes();
  }, [fetchAllDishes]);

  return (
    <div className="bg-white rounded-2xl p-4">
      <Sort items={sortItems} id={id} onChange={setId} />
      <div className=" grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] auto-cols-max gap-x-3 gap-y-4 ">
        {error && <h2>{error}</h2>}
        {isLoading && sceletons}
        {dishes.map((item) => (
          <Dish key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
