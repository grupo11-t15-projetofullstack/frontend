import Card from "@/components/card"
import DefaultFooter from "@/components/footer"
import DefaultHeader from "@/components/header"
import { Modal } from "@/components/modal"
import { PublishForm } from "@/components/publishForm"
import { Select } from "@/components/select"
import { api } from "@/services/api"
import { GetServerSideProps, NextPage } from "next"
import Image from "next/image"
import { useState } from "react"
import bannerHome from "../assets/bannerHome.svg"

interface HomeProps {
  publications: Publication[]
}

export interface Publication {
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
  userId?: number
  user?: {
    name: string
  }
  description: string
}

const Home: NextPage<HomeProps> = ({ publications }: HomeProps) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [filteredCards, setFilteredCards] = useState<Publication[]>([])
  const toggleModal = () => setIsOpenModal(!isOpenModal)
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <DefaultHeader />
        <div className="overflow-hidden mb-10">
          <Image alt="banner" src={bannerHome} className="w-screen" />
        </div>

        <main className="flex align-middle pl-32 mb-20">
          <Select repo={publications} setFilteredCards={setFilteredCards} />
          <div className="grid grid-cols-3 gap-10 ml-40">
            {filteredCards.length > 0
              ? filteredCards.map((publication, index) => (
                  <Card key={index} publication={publication} />
                ))
              : publications.map((publication, index) => (
                  <Card key={index} publication={publication} />
                ))}

            {/* <button onClick={() => console.log(publications)}>CONSOLE</button> */}
          </div>
        </main>

        <DefaultFooter />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const response = await api.get("/publications")
    const publications: Publication[] = response.data

    return {
      props: {
        publications,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        publications: [],
      },
    }
  }
}

export default Home
