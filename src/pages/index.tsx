import Card from "@/components/card"
import DefaultFooter from "@/components/footer"
import { LoginForm } from "@/components/form/loginForm"
import { RegisterForm } from "@/components/form/register"
import DefaultHeader from "@/components/header"
import { Modal } from "@/components/modal"
import { PublishForm } from "@/components/publishForm"
import { Select } from "@/components/select"
import publicationData from "@/mock/publication"
import { GetServerSideProps, NextPage } from "next"
import { useState } from "react"

interface HomeProps {
  publications: Publication[]; 
}


interface Publication {
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
  comments: any[];
  images: any[];
}

const Home: NextPage<HomeProps> = ({ publications }: HomeProps) => {

  const [isOpenModal, setIsOpenModal] = useState(false)
  const toggleModal = () => setIsOpenModal(!isOpenModal)
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <DefaultHeader />
        {isOpenModal && (
          <Modal toggleModal={toggleModal}>
            <PublishForm toggleModal={toggleModal} repo={repo} />
          </Modal>
        )}
        <div className="flex-grow">
          <Select />

   
          <div style={{maxWidth: '320px', display: 'flex'}}>
          {publications.map((publication, index) => (
              <Card key={index} publication={publication} />
            ))}
  
          </div>
      

        </div>
      </div>
      <button onClick={() => toggleModal()}>MODAL</button>

      <DefaultFooter />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://kenzie-kars.herokuapp.com/cars")
  const repo = await res.json()
  const publications = publicationData;

  return {
    props: { publications}, 
  }
}

export default Home
