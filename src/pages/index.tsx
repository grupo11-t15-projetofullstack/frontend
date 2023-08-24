import Card from "@/components/card"
import DefaultFooter from "@/components/footer"
import { LoginForm } from "@/components/form/loginForm"
import { RegisterForm } from "@/components/form/register"
import DefaultHeader from "@/components/header"
import { Modal } from "@/components/modal"
import { PublishForm } from "@/components/publishForm"
import { Select } from "@/components/select"
import publicationData from "@/mock/publication"
import { api } from "@/services/api"
import { GetServerSideProps, NextPage } from "next"
import Image from "next/image"
import { useState } from "react"
import bannerHome from "../assets/bannerHome.svg"

interface HomeProps {
  publications: Publication[]
}

interface Publication {
  model: string
  make: string
  year: number
  color: string
  fuel: string
  isGoodSale: boolean
  coverImg: string
  distance: number
  price: number
  description: string
  userId: number
  comments: any[]
  images: any[]
}

const Home: NextPage<HomeProps> = ({ publications }: HomeProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const toggleModal = () => setIsOpenModal(!isOpenModal)
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <DefaultHeader />
        <div className="h-[600px] overflow-hidden mb-10">
          <Image alt="banner" src={bannerHome} className="w-screen" />
        </div>

        <div className="flex-grow">
          <Select repo={publications} />
          {/* <div style={{ maxWidth: "320px", display: "flex" }}>
            {publications.map((publication, index) => (
              <Card key={index} publication={publication} />
            ))}
          </div> */}
        </div>

        <DefaultFooter />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const response = await api.get("/publications")
    const publications: Publication[] = response.data // Atualize com os dados reais

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
