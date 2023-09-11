import { FC, useEffect } from "react";

import { useAuth } from "../store";
import { AppRouter } from "../router";

export const App: FC = () => {
  const login = useAuth((state) => state.login);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      login();
    }
  }, [login]);

  return <AppRouter />;
};
