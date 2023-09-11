import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { HomePage } from "../pages/HomePage";
import { DishesPage } from "../pages/DishesPage";
import { NotFound } from "../pages/NotFound";
import { Basket } from "../pages/Basket";
import { Login } from "../pages/Login";
import { useAuth } from "../store";

export const AppRouter: FC = () => {
  const isAuth = useAuth((state) => state.isAuth);

  return (
    <Routes>
      <Route path="" element={<Layout />}>
        {isAuth ? (
          <>
            <Route path="/home/" element={<HomePage />}>
              <Route path="dishes" element={<DishesPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="basket" element={<Basket />} />
            <Route path="profile" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="profile" element={<Login />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Route>
    </Routes>
  );
};
