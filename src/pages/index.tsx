import Card from "@/components/card"
import DefaultFooter from "@/components/footer"
import DefaultHeader from "@/components/header"
import { Modal } from "@/components/modal"
import { PublishForm } from "@/components/publishForm"
import { Select } from "@/components/select"
import { GetServerSideProps, NextPage } from "next"
import { useState } from "react"

// interface HomeProps {
//   publications: PublicationData[]
// }

const Home: NextPage = ({ repo }: any) => {
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
          <div style={{ maxWidth: "320px" }}>
            <Card
              publication={{
                model: "",
                make: "",
                year: 0,
                color: "",
                fuel: "",
                isGoodSale: true,
                coverImg: "",
                distance: 0,
                price: 0,
                description: "",
                userId: 0,
                comments: [],
                images: [],
              }}
            />
          </div>
          M
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

  return {
    props: { repo },
  }
}

export default Home
