import { FC, FormEvent } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../store";

import avatar from "../../assets/avatar.png";
import { Container } from "../../components/Container";

interface LoginProps {}

export const Login: FC<LoginProps> = () => {
  const login = useAuth((state) => state.login);
  const logout = useAuth((state) => state.logout);
  const isAuth = useAuth((state) => state.isAuth);

  const handlerForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
    localStorage.setItem("auth", "true");
  };

  const handlerLogout = () => {
    logout();
    localStorage.removeItem("auth");
  };

  return (
    <Container className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-8">
        {isAuth ? "Профиль" : "Авторизация"}
      </h1>
      {isAuth ? (
        <div className="flex flex-col">
          <img className="mb-4" src={avatar} alt="" />
          <h3 className="mb-10">Маргарита</h3>
          <Button onClick={handlerLogout} className="py-2">
            Выйти
          </Button>
        </div>
      ) : (
        <form onSubmit={handlerForm} className="flex flex-col gap-4 max-w-lg">
          <Input type="text" placeholder="Введите логин" />
          <Input type="password" placeholder="Введите пароль" />
          <Button className="py-2">Войти</Button>
        </form>
      )}
    </Container>
  );
};
