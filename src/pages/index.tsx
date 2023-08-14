import Card from "@/components/card"
import DefaultHeader from "@/components/header"
import { GetServerSideProps, NextPage } from "next"
import { useState } from "react"

// interface HomeProps {
//   publications: PublicationData[]
// }

const Home: NextPage = () => {
  const [publications, setPublications] = useState([])

  return (
    <>
      <DefaultHeader />
      <main>
        <div className=" w-72 mx-auto mt-8 h-80">
          <Card />
        </div>
      </main>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await api.get("/publications")
//   return {
//     props: { publications: response.data },
//   }
// }

export default Home
