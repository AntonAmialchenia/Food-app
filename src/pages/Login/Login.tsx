import { FC, FormEvent } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../store";

interface LoginProps {}

export const Login: FC<LoginProps> = () => {
  const login = useAuth((state) => state.login);

  const handlerForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-8">Авторизация</h1>
      <form onSubmit={handlerForm} className="flex flex-col gap-4 max-w-lg">
        <Input type="text" placeholder="Введите логин" />
        <Input type="password" placeholder="Введите пароль" />
        <Button className="py-2">Войти</Button>
      </form>
    </div>
  );
};
