import {
  ResetPasswordData,
  SendEmailResetPasswordData,
} from "@/schemas/user.schema";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext);

interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  // addressId?: Adresses;
  isSeller: boolean;
  avatar: string;
  description: string;
  cpf: string;
  birth: string;
}

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  UserLogin: (formData: ILogin) => Promise<void>;
  UserRegister: (formData: IRegister) => Promise<void>;
  userLogout: () => void;
  sendEmail: (sendEmailResetPasswordData: SendEmailResetPasswordData) => void;
  resetPassword: (resetPasswordData: ResetPasswordData, token: string) => void;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  cpf: string;
  phone: string;
  birth: string;
  description: string;
  // addressId?: Adresses;
  isSeller: boolean;
}

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  // const Token = localStorage.getItem("@Token")!;
  // const userID = localStorage.getItem("@USERID");
  const router = useRouter();

  const UserLogin = async (formData: ILogin) => {
    try {
      const response = await api.post<any>("/login", formData);
      localStorage.setItem("@Token", response.data.token);
      toast.success("Login Realizado com sucesso!");
      router.push("/");
    } catch (error) {
      toast.error("Email ou senha invalido");
    }
  };

  const sendEmail = (
    sendEmailResetPasswordData: SendEmailResetPasswordData
  ) => {
    api
      .post("users/resetPassword", sendEmailResetPasswordData)
      .then(() => {
        toast.success("E-mail enviado com sucesso!");
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erro ao enviar o e-mail, tente novamente mais tarde");
      });
  };

  const resetPassword = (
    resetPasswordData: ResetPasswordData,
    token: string
  ) => {
    api
      .patch(`users/resetPassword/${token}`, {
        password: resetPasswordData.password,
      })
      .then(() => {
        toast.success("Senha atualizada com sucesso");
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erro ao atualizar a senha");
      });
  };

  const UserRegister = async (formData: IRegister) => {
    try {
      const response = api.post("/users", formData);
      setUser((await response).data.user);
      toast.success("Registro feito com sucesso!");
      router.push("/");
    } catch (error) {
      toast.error("Usúario já cadastrado");
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@Token");
    localStorage.removeItem("@SHELTERID");
    localStorage.removeItem("@USERNAME");
    localStorage.removeItem("@USERID");
    toast.success("Logout Realizado com sucesso!");
    router.push("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        UserLogin,
        UserRegister,
        userLogout,
        resetPassword,
        sendEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
