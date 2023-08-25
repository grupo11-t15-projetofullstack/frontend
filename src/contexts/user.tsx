import {
  ResetPasswordData,
  SendEmailResetPasswordData,
} from "@/schemas/user.schema";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
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
export interface IUserOwnPublish {
  id: number;
  model: string;
  make: string;
  year: number;
  color: string;
  fuel: string;
  isGoodSale: boolean;
  coverImg: string;
  distance: number;
  price: number;
  createdAt: string;
  description: string;
  comments: Comment[];
  images: string[];
  _count: {
    comments: number;
    images: number;
  };
}

interface Comment {
  userId: number
}

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  UserLogin: (formData: ILogin) => Promise<void>;
  UserRegister: (formData: IRegister) => Promise<void>;
  userLogout: () => void;
  sendEmail: (sendEmailResetPasswordData: SendEmailResetPasswordData) => void;
  resetPassword: (resetPasswordData: ResetPasswordData, token: string) => void;
  UserUpdate: (formData: IUpdateProfile) => Promise<void>,
  UserPublication: (publications: IUserOwnPublish[]) => void;
  getOneUser: (userId: number) => Promise<void>;
  userPublications: IUserOwnPublish[];
  setUserPublications: Dispatch<SetStateAction<IUserOwnPublish[]>>;
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

export interface IUpdateProfile {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  cpf: string;
  phone: string;
  birth: string;
  description: string;
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
      // localStorage.setItem("@USERID", response.data.user.id);
      // localStorage.setItem("@USERNAME", response.data.user.name);
      // setUser(response.data.user);
      toast.success("Login Realizado com sucesso!");
      router.push("/dashboard");
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

  const UserUpdate = async (formData: IUpdateProfile) => {
    try {
      const response = api.patch("/users", formData);
      setUser((await response).data.user)
    } catch (error) {
      console.log(error)
    }
  }

  const getOneUser = async (userId: number) => {
    try {
      const response = await api.get(`/users/${userId}`);
      const userData = response.data;
      setUserPublications(userData.publications);
    } catch (error) {
      console.error(error);
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
        UserUpdate,
        getOneUser,
        setUserPublications,
        userPublications
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
