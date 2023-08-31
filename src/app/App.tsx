import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { appRoutes } from "../constants";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {appRoutes.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </Route>
    </Routes>
  );
};
