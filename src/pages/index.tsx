import Card from "@/components/card"
import DefaultFooter from "@/components/footer"
import DefaultHeader from "@/components/header"
import { Select } from "@/components/select"
import { api } from "@/services/api"
import { GetServerSideProps, NextPage } from "next"
import Image from "next/image"
import { useEffect, useState } from "react"
import bannerHome from "../assets/bannerHome.svg"

interface HomeProps {
  publications: Publication[]
  repo: any
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
  const [filteredCards, setFilteredCards] = useState<Publication[]>([])

  useEffect(() => {
    setFilteredCards(publications)
  }, [publications])

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <DefaultHeader />
        <div className="overflow-hidden mb-10">
          <Image alt="banner" src={bannerHome} className="w-screen" />
        </div>

        <main className="flex align-middle justify-between ml-12 mr-[50px] my-14">
          <Select
            repo={publications}
            setFilteredCards={setFilteredCards}
            filteredCards={filteredCards}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:mr-40 gap-20 ">
            {filteredCards.length > 0 ? (
              filteredCards.map((publication, index) => (
                <Card key={index} publication={publication} />
              ))
            ) : (
              <h1 className="text-2xl mx-auto">Nenhum veículo encontrado</h1>
            )}
          </div>
        </main>

        <DefaultFooter />
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const response = await api.get("/publications")
    const publications: Publication[] = response.data

    const res = await fetch("https://kenzie-kars.herokuapp.com/cars")
    const repo = await res.json()

    return {
      props: {
        publications,
        repo,
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
