import { BasketIcon } from "../icons/BasketIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { ProfileIcon } from "../icons/ProfileIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { Basket } from "../pages/Basket";
import { DishesPage } from "../pages/DishesPage";
import { HomePage } from "../pages/HomePage";
import { NotFound } from "../pages/NotFound";

export const appRoutes = [
  { path: "*", element: <NotFound /> },
  { path: "", element: <HomePage /> },
  { path: "dishes", element: <DishesPage /> },
  { path: "basket", element: <Basket /> },
];

export const linkList = [
  { to: "/", text: "Главная", element: <HomeIcon /> },
  { to: "/search", text: "Поиск", element: <SearchIcon /> },
  { to: "/basket", text: "Корзина", element: <BasketIcon /> },
  { to: "/profile", text: "Аккаунт", element: <ProfileIcon /> },
];
