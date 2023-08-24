import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

interface CardProps {
  publication: {
    model: string;
    make: string;
    year: number;
    color: string;
    fuel: string;
    isGoodSale: boolean;
    coverImg: string;
    distance: number;
    price: number;
    description: string;
    userId: number;
    comments: [];
    images: [];
  };
}

const Card: NextPage<CardProps> = ({ publication }) => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col gap-3">
      {/* <Image alt="Cover image" src={publication.coverImg} className="w-full h-32 bg-grey-grey7" width={12} height={10}/> */}
      <p className="absolute font-medium text-sm leading-4 bg-random-random7 text-grey-whiteFixed p-1 top-px right-px rounded-sm">$</p>
      <h1 className="font-semibold text-base leading-5">{publication.make} - {publication.model}</h1>
      <p className="text-sm h-12 font-normal leading-6">{publication.description}</p>
      <div className="flex flex-row self-start gap-4 mt-1">
        <div className="rounded-full w-10 h-10 bg-brands-brand1 ">
          <p className="text-center mt-2 text-grey-whiteFixed">{publication.userId}</p>
        </div>
        <h2 className="my-auto" onClick={() => router.push("/ownProfile")}>
          User Name
        </h2>
      </div>
      <div className="flex flex-row justify-between mt-1">
        <div className="flex flex-row gap-2">
          <p className="bg-brands-brand4 rounded-sm p-1 text-brands-brand1 font-medium text-sm leading-6">
            {publication.distance} KM
          </p>
          <p className="bg-brands-brand4 rounded-sm p-1 text-brands-brand1 font-medium text-sm leading-6 text-">
            {publication.year}
          </p>
        </div>
        <p className="font-medium leading-7 text-base">R$ {publication.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;
