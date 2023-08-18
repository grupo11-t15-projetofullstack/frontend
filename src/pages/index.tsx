import DefaultFooter from "@/components/footer"
import DefaultHeader from "@/components/header"
import { Modal } from "@/components/modal"
import { PublishForm } from "@/components/publishForm"
import { Select } from "@/components/select"
import { GetServerSideProps, NextPage } from "next"
import { useState } from "react"

interface HomeProps {
  repo: any
}

const Home: NextPage = ({ repo }: HomeProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const toggleModal = () => setIsOpenModal(!isOpenModal)
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <DefaultHeader />

        <button onClick={toggleModal}>MODAL</button>

        {isOpenModal && (
          <Modal toggleModal={toggleModal}>
            <PublishForm repo={repo} toggleModal={toggleModal} />
          </Modal>
        )}
      </div>
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
