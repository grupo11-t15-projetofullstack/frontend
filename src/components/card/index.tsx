import { NextPage } from "next"
import { redirect } from "next/navigation"
import Image from "next/image"

const Card: NextPage = () => {
  return (
    <div className="relative flex flex-col gap-3">
      <Image
        alt="Cover image"
        src={""}
        className="w-full h-32 bg-grey-grey7 "
      />
      <p className="absolute font-medium text-sm leading-4 bg-random-random7 text-grey-whiteFixed p-1 top-px right-px rounded-sm">
        $
      </p>
      <h1 className="font-semibold text-base leading-5">CAR MAKER - MODEL</h1>
      <p className=" text-sm h-12 font-normal leading-6">Car description</p>
      <div className="flex flex-row self-start gap-4 mt-1">
        <div className="rounded-full w-10 h-10 bg-brands-brand1 ">
          <p className="text-center mt-2 text-grey-whiteFixed">UN</p>
        </div>
        <h2 className="my-auto">User Name</h2>
      </div>
      <div className="flex flex-row justify-between mt-1">
        <div className="flex flex-row gap-2">
          <p className="bg-brands-brand4 rounded-sm p-1 text-brands-brand1 font-medium text-sm leading-6">
            20000 KM
          </p>
          <p className="bg-brands-brand4 rounded-sm p-1 text-brands-brand1 font-medium text-sm leading-6 text-">
            2015
          </p>
        </div>
        <p className="font-medium leading-7 text-base">R$ 199.990,00</p>
      </div>
    </div>
  )
}

export default Card
