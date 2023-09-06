import { api } from "@/services/api"
import { useRouter } from "next/router"
import React, { Dispatch, SetStateAction, createContext, useState } from "react"
import {
  ResetPasswordData,
  SendEmailResetPasswordData,
} from "@/schemas/user.schema"
import { toast } from "react-toastify"

export const UserContext = createContext({} as IUserContext)

interface IDefaultProviderProps {
  children: React.ReactNode
}

export interface Addresses {
  id: number
  cep: string
  state: string
  city: string
  number: number
  complement: string
  userId: number
}

export interface IUser {
  id: number
  name: string
  email: string
  phone: string
  addressId?: Addresses
  isSeller: boolean
  avatar: string
  description: string
  cpf: string
  birth: string
}

export interface IUserOwnPublish {
  id: number
  model: string
  make: string
  year: number
  color: string
  fuel: string
  isGoodSale: boolean
  coverImg: string
  distance: number
  price: number
  createdAt: string
  description: string
  comments: Comment[]
  images: string[]
  _count: {
    comments: number
    images: number
  }
}

interface Comment {
  userId: number
}

interface IUserContext {
  user: IUser | null
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
  UserLogin: (formData: ILogin) => Promise<void>
  UserRegister: (formData: IRegister) => Promise<void>
  userLogout: () => void
  UserUpdateProfile: (formData: IUpdateProfile, user: { id: number }) => void
  sendEmail: (sendEmailResetPasswordData: SendEmailResetPasswordData) => void
  resetPassword: (resetPasswordData: ResetPasswordData, token: string) => void
  getOneUser: (userId: number) => Promise<void>
  userPublications: IUserOwnPublish[]
  setUserPublications: Dispatch<SetStateAction<IUserOwnPublish[]>>
}

export interface ILogin {
  email: string
  password: string
}

export interface IRegister {
  email: string
  password: string
  name: string
  confirmPassword: string
  cpf: string
  phone: string
  birth: string
  description: string
  addressId?: Addresses
  isSeller: boolean
}

export interface IUpdateProfile {
  id: number
  email: string
  name: string
  cpf: string
  phone: string
  birth: string
  description: string
}

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [userPublications, setUserPublications] = useState<IUserOwnPublish[]>(
    []
  )
  // const Token = localStorage.getItem("@Token")!;
  // const userID = localStorage.getItem("@USERID");
  const router = useRouter()

  const UserLogin = async (formData: ILogin) => {
    try {
      const response = await api.post<any>("/login", formData)
      localStorage.setItem("@Token", response.data.token)
      localStorage.setItem("@UserID", response.data.id)
      toast.success("Login Realizado com sucesso!")
      router.push("/")
    } catch (error) {
      toast.error("Email ou senha invalido")
    }
  }

  const sendEmail = (
    sendEmailResetPasswordData: SendEmailResetPasswordData
  ) => {
    api
      .post("users/resetPassword", sendEmailResetPasswordData)
      .then(() => {
        toast.success("E-mail enviado com sucesso!")
        router.push("/")
      })
      .catch((error) => {
        console.log(error)
        toast.error("Erro ao enviar o e-mail, tente novamente mais tarde")
      })
  }

  const resetPassword = (
    resetPasswordData: ResetPasswordData,
    token: string
  ) => {
    api
      .patch(`users/resetPassword/${token}`, {
        password: resetPasswordData.password,
      })
      .then(() => {
        toast.success("Senha atualizada com sucesso")
        router.push("/login")
      })
      .catch((error) => {
        console.log(error)
        toast.error("Erro ao atualizar a senha")
      })
  }

  const UserRegister = async (formData: IRegister) => {
    try {
      const response = api.post("/users", formData)
      setUser((await response).data.user)
      toast.success("Registro feito com sucesso!")
      router.push("/")
    } catch (error) {
      toast.error("Usúario já cadastrado")
    }
  }

  const UserUpdateProfile = async (
    formData: IUpdateProfile,
    user: { id: number }
  ) => {
    try {
      console.log(api)
      const endpoint = `/users/${user.id}`
      console.log("Endpoint:", endpoint)

      const response = await api.patch(endpoint, formData)
      console.log(response.data)
      setUser(response.data.user)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  const getOneUser = async (id: number) => {
    try {
      const response = await api.get(`/users/${id}`)
      const userData = response.data
      setUserPublications(userData.publications)
    } catch (error) {
      console.error(error)
    }
  }

  const userLogout = () => {
    setUser(null)
    localStorage.removeItem("@Token")
    localStorage.removeItem("@UserID")
    toast.success("Logout realizado com sucesso!")
    const isHome = router.asPath === "/"
    if (isHome) {
      location.reload()
    }

    router.push("/")
  }

  const dummy = 0

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        UserLogin,
        UserRegister,
        userLogout,
        UserUpdateProfile,
        resetPassword,
        sendEmail,
        getOneUser,
        setUserPublications,
        userPublications,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
