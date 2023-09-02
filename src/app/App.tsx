import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { HomePage } from "../pages/HomePage";
import { DishesPage } from "../pages/DishesPage";
import { NotFound } from "../pages/NotFound";
import { Basket } from "../pages/Basket";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />}>
          <Route path="dishes" element={<DishesPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="basket" element={<Basket />} />
      </Route>
    </Routes>
  );
};
