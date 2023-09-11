import { FC, useEffect, useState } from "react";
import { useDishes } from "../../store";
import { Dish } from "../../components/Dish";
import { Loader } from "../../components/Loader";
import { Sort } from "../../components/Sort";
import { sortItems } from "../../constants";
import { Modal } from "../../components/Modal";
import { Container } from "../../components/Container";

interface DishesPageProps {}

export const DishesPage: FC<DishesPageProps> = () => {
  const { dishes, isLoading, fetchAllDishes, error } = useDishes(
    (state) => state,
  );

  const [id, setId] = useState(0);
  const [idDish, setIdDish] = useState(1);
  const [visible, setVisible] = useState(false);

  const filterDishes = dishes.filter((item) =>
    item.tegs.some((el) => el === sortItems[id]),
  );
  const dishModal = dishes.find((item) => item.id === idDish);
  const sceletons = [...new Array(9)].map((_, index) => (
    <Loader key={index} variant="dish" />
  ));

  useEffect(() => {
    fetchAllDishes();
  }, [fetchAllDishes]);

  return (
    <Container>
      <Sort items={sortItems} id={id} onChange={setId} />
      <div className=" grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] auto-cols-max gap-x-3 gap-y-4 ">
        {error && <h2>{error}</h2>}
        {isLoading && sceletons}
        {filterDishes.map((item) => (
          <Dish
            key={item.id}
            item={item}
            setIdDish={setIdDish}
            setVisible={setVisible}
          />
        ))}
      </div>
      <Modal item={dishModal} isVisible={visible} setVisible={setVisible} />
    </Container>
  );
};
