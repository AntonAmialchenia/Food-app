import { FC } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

interface LoginProps {}

export const Login: FC<LoginProps> = () => {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-8">Авторизация</h1>
      <form className="flex flex-col gap-4 max-w-lg">
        <Input type="text" placeholder="Введите логин" />
        <Input type="password" placeholder="Введите пароль" />
        <Button className="py-2">Войти</Button>
      </form>
    </div>
  );
};
