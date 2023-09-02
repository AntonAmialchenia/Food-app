import { BasketIcon } from "../icons/BasketIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { ProfileIcon } from "../icons/ProfileIcon";
import { SearchIcon } from "../icons/SearchIcon";

export const sortItems = ["Все меню", "С рисом", "Салаты", "С рыбой"];

export const linkList = [
  { to: "/", text: "Главная", element: <HomeIcon /> },
  { to: "/search", text: "Поиск", element: <SearchIcon /> },
  { to: "/basket", text: "Корзина", element: <BasketIcon /> },
  { to: "/profile", text: "Аккаунт", element: <ProfileIcon /> },
];
