import DefaultFooter from "@/components/footer"
import DefaultHeader from "@/components/header"
import { Select } from "@/components/select"
import { GetServerSideProps, NextPage } from "next"
import { useState } from "react"

// interface HomeProps {
//   publications: PublicationData[]
// }

const Home: NextPage = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <DefaultHeader />
      
      <div className="flex-grow"> 
      <Select/>
      </div>
      
      <DefaultFooter />
    </div>
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