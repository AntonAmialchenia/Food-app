import { FC, useEffect } from "react";
import { Category } from "../../components/Category";
import { useCategories } from "../../store";
import { LoaderCategories } from "../../components/LoaderCategories";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  const { categories, isLoading, fetchAllCategories, error } = useCategories(
    (state) => state,
  );
  const sceletons = [...new Array(6)].map((_, index) => (
    <LoaderCategories key={index} />
  ));
  useEffect(() => {
    fetchAllCategories();
  }, [fetchAllCategories]);

  return (
    <div className="bg-white p-3 rounded-2xl h-full grid grid-cols-2 grid-rows-[repeat(2, minmax(0, 400px))]  gap-4">
      {isLoading && sceletons}
      {error && <h2>{error}</h2>}
      {categories.map((item) => (
        <Category item={item} />
      ))}
      {categories.map((item) => (
        <Category item={item} />
      ))}
    </div>
  );
};
