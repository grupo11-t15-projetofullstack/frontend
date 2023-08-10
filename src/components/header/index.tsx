import { NextPage } from 'next';
import Image from 'next/image';
import Logo from '../../assets/Logo.svg';
import Link from 'next/link';

const DefaultHeader: NextPage = () => {
  return (
    <header className="flex justify-between h-20 border-b border-grey-grey6 pr-20">
      <Image src={Logo} alt="Logo image" className="mx-20 my-5" />

      <div className="flex flex-row justify-between gap-10 border-l-2 border-grey-grey6 pl-14 h-20">
        <Link href="/login" className="pt-7 text-grey-grey2 text-center">
          Fazer Login
        </Link>
        <Link
          href="/register"
          className="my-auto p-1 border px-6 rounded border-grey-grey4 text-grey-grey0 font-semibold"
        >
          Cadastrar
        </Link>
      </div>
    </header>
  );
};

export default DefaultHeader;
