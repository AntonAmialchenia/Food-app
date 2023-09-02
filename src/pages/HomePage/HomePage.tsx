import { FC, useEffect } from "react";
import { Category } from "../../components/Category";
import { useCategories } from "../../store";
import { Loader } from "../../components/Loader";
import { Link } from "react-router-dom";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  const { categories, isLoading, fetchAllCategories, error } = useCategories(
    (state) => state,
  );
  const sceletons = [...new Array(6)].map((_, index) => (
    <Loader key={index} variant="category" />
  ));
  useEffect(() => {
    fetchAllCategories();
  }, [fetchAllCategories]);

  return (
    <div className="bg-white p-3 rounded-2xl h-full grid grid-cols-2 grid-rows-[repeat(2,_minmax(250px,_1fr))]  gap-4">
      {isLoading && sceletons}
      {error && <h2>{error}</h2>}
      {categories.map((item) => (
        <Link to="dishes" key={item.id}>
          <Category item={item} />
        </Link>
      ))}
      {categories.map((item) => (
        <Link to="/dishes" key={item.id}>
          <Category item={item} />
        </Link>
      ))}
    </div>
  );
};
