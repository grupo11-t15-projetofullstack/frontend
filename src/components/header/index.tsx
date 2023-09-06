import Image from "next/image"
import Logo from "../../assets/Logo.svg"
import { useRouter } from "next/router"
import { useEffect, useState, useContext } from "react"
import { api } from "@/services/api"
import { Publication } from "@/pages"
import { UserContext } from "@/contexts/user"

interface User {
  id: number
  name: string
  email: string
  phone: string
  cpf: string
  avatar: string
  isSeller: boolean
  description: string
  birth: string
  address: string
  publications?: Publication[]
}

const DefaultHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [token, setToken] = useState<string>()
  const [user, setUser] = useState<User>()
  const { userLogout } = useContext(UserContext)
  const router = useRouter()

  const getUser = async () => {
    const userId = localStorage.getItem("@UserID")
    const response = await api.get(`/users/${userId}`)
    setUser(response.data)
  }

  useEffect(() => {
    const getToken = localStorage.getItem("@Token")
    if (getToken) {
      setToken(getToken)
      getUser()
    }
  }, [])

  return (
    <header className="flex justify-between h-17 border-b border-grey-grey6 pr-20">
      <Image
        src={Logo}
        alt="Logo image"
        onClick={() => router.push("/")}
        className="mx-20 my-5 cursor-pointer"
      />

      {user ? (
        <div
          className="cursor-pointer flex flex-row justify-between gap-4 border-l-2 border-grey-grey6 pl-14 h-20 relative"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <div className="rounded-full w-10 h-10 mt-5 bg-brands-brand1 ">
            <p className="text-center mt-2 text-grey-whiteFixed">
              {user.name.charAt(0).toUpperCase()}
            </p>
          </div>
          <p className="pt-7 text-grey-grey2 text-center mb-8">
            {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
          </p>

          {isOpenMenu && (
            <div className="absolute top-20 w-full flex flex-col gap-2 bg-grey-whiteFixed z-50 shadow-2xl rounded-lg py-2">
              <p
                className="p-2 cursor-pointer hover:bg-grey-grey4"
                onClick={() => {
                  router.push(`/${user.id}`)
                  setIsOpenMenu(!isOpenMenu)
                }}
              >
                Perfil
              </p>
              <p
                className="p-2 cursor-pointer hover:bg-grey-grey4 text-feedBack-alert-alert1"
                onClick={userLogout}
              >
                Sair
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-row justify-between gap-10 border-l-2 border-grey-grey6 pl-14 h-20">
          <button
            className="pt-7 text-grey-grey2 text-center mb-8"
            onClick={() => router.push("/login")}
          >
            Fazer Login
          </button>

          <button
            onClick={() => router.push("/register")}
            className="my-auto p-1 border px-6 rounded border-grey-grey4 text-grey-grey0 font-semibold"
          >
            Cadastrar
          </button>
        </div>
      )}
    </header>
  )
}

export default DefaultHeader
