import { NextPage } from "next"
import Image from "next/image"
import Logo from "../../assets/Logo.svg"
import Link from "next/link"
import { useRouter } from "next/router"

const DefaultHeader: NextPage = () => {
  const router = useRouter()
  return (
    <header className="flex justify-between h-17 border-b border-grey-grey6 pr-20">
      <Image
        src={Logo}
        alt="Logo image"
        onClick={() => router.push("/")}
        className="mx-20 my-5 cursor-pointer"
      />

      <div className="flex flex-row justify-between gap-10 border-l-2 border-grey-grey6 pl-14 h-20">
        <button className="pt-7 text-grey-grey2 text-center"
          onClick={() => router.push("/login")}>
          Fazer Login
        </button>

        <button
          onClick={() => router.push("/register")}
          className="my-auto p-1 border px-6 rounded border-grey-grey4 text-grey-grey0 font-semibold"
        >
          Cadastrar
        </button>
      </div>
    </header>
  );
};

export default DefaultHeader;
