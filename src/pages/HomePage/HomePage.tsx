import { FC, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Category } from "../../components/Category";
import { useCategories } from "../../store";
import { Loader } from "../../components/iU/Loader";
import { Container } from "../../components/iU/Container";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  const { categories, isLoading, fetchAllCategories, error } = useCategories(
    (state) => state,
  );

  const { pathname } = useLocation();
  const sceletons = [...new Array(6)].map((_, index) => (
    <Loader key={index} variant="category" />
  ));
  useEffect(() => {
    fetchAllCategories();
  }, [fetchAllCategories]);

  return (
    <>
      {pathname === "/home/dishes" ? (
        <Outlet />
      ) : (
        <Container className=" h-full grid grid-cols-2 grid-rows-[repeat(2,_minmax(250px,_1fr))]  gap-4">
          {isLoading && sceletons}
          {error && <h2>{error}</h2>}
          {categories.map((item) => (
            <Link to="dishes" key={item.id}>
              <Category item={item} />
            </Link>
          ))}
          {categories.map((item) => (
            <Link to="dishes" key={item.id}>
              <Category item={item} />
            </Link>
          ))}
        </Container>
      )}
    </>
  );
};
