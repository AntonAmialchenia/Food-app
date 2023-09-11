import { FC, useState } from "react";
import { Container } from "../../components/iU/Container";
import { Input } from "../../components/iU/Input";
import { useDishes } from "../../store";
import { Dish } from "../../components/Dish";
import { Modal } from "../../components/Modal";

interface SearchPageProps {}

export const SearchPage: FC<SearchPageProps> = () => {
  const [query, setQuery] = useState("");
  const [idDish, setIdDish] = useState(1);
  const [visible, setVisible] = useState(false);

  const dishes = useDishes((state) => state.dishes);

  const dishModal = dishes.find((item) => item.id === idDish);
  const searchDiches = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(query.toLowerCase()),
  );
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
      <div className=" grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] auto-cols-max gap-x-3 gap-y-4 ">
        {!!query &&
          searchDiches.map((item) => (
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
