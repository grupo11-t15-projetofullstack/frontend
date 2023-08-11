import DefaultFooter from "@/components/footer"
import DefaultHeader from "@/components/header"
import { GetServerSideProps, NextPage } from "next"

// interface HomeProps {
//   publications: PublicationData[]
// }

const Home: NextPage = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <DefaultHeader />
      
      <div className="flex-grow"> 
      
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
