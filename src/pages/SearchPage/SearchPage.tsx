import { FC, useState } from "react";
import { Container } from "../../components/iU/Container";
import { Input } from "../../components/iU/Input";
import { useDishes } from "../../store";
import { Dish } from "../../components/Dish";
import { Modal } from "../../components/Modal";
import { useSearchAndVisibleModal } from "../../hooks/useSearchAndVisibleModal";
import { ContainerDishes } from "../../components/iU/ContainerDishes";

interface SearchPageProps {}

export const SearchPage: FC<SearchPageProps> = () => {
  const dishes = useDishes((state) => state.dishes);

  const [query, setQuery] = useState("");

  const { setIdDish, visible, setVisible, dishModal, searchDishes } =
    useSearchAndVisibleModal(dishes, query);

  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-5">Поиск блюд</h1>
      <Input
        className="mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Введите название блюда"
      />
      <ContainerDishes>
        {searchDishes &&
          searchDishes.map((item) => (
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
