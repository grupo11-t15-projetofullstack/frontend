import { FieldError, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { Input } from "../input";
import { useNavigate } from "react-router-dom";
import { ILogin, UserContext } from "@/contexts/user";

const schema = yup.object({
  email: yup.string().required("O email é obrigatório"),
  password: yup.string().required("A senha é obrigatória"),
});

export const LoginForm = () => {
  const { UserLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    UserLogin(data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="bg-white p-8 rounded shadow-md w-full sm:w-96"
      >
        <h4 className="text-center text-xl mb-4">Login</h4>
        <Input
          type="email"
          label="Email"
          register={register("email")}
          error={errors.email}
        />
        <Input
          type="password"
          label="Senha"
          register={register("password")}
          error={errors.password}
        />
        <button
          type="submit"
          className="btnEnterLogin w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Entrar
        </button>
        <p className="text-center mt-2">Ainda não possui conta?</p>
        <button
          onClick={() => navigate("/register")}
          className="btnRegisterLogin w-full mt-2 bg-gray-400 text-white py-2 rounded hover:bg-gray-500 transition duration-300"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};
