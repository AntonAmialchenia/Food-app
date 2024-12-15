import { FC, useState } from 'react';
import { useDishes } from '../../store';
import { Dish } from '../../components/Dish';
import { Loader } from '../../components/iU/Loader';
import { Sort } from '../../components/Sort';
import { sortItems } from '../../constants';
import { Modal } from '../../components/Modal';
import { Container } from '../../components/iU/Container';
import { useSearchAndVisibleModal } from './../../hooks/useSearchAndVisibleModal';
import { ContainerDishes } from '../../components/iU/ContainerDishes';

interface DishesPageProps {}

export const DishesPage: FC<DishesPageProps> = () => {
  const { dishes, isLoading, error } = useDishes((state) => state);

  const { setIdDish, visible, setVisible, dishModal } =
    useSearchAndVisibleModal(dishes);

  const [id, setId] = useState(0);

  const filterDishes = dishes.filter((item) =>
    item.tegs.some((el) => el === sortItems[id]),
  );

  const sceletons = [...new Array(9)].map((_, index) => (
    <Loader key={index} variant="dish" />
  ));

  return (
    <Container>
      <Sort items={sortItems} id={id} onChange={setId} />
      <ContainerDishes>
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
      </ContainerDishes>
      <Modal item={dishModal} isVisible={visible} setVisible={setVisible} />
    </Container>
  );
};
