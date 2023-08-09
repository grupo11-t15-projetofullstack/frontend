import DefaultHeader from "@/components/header"
import { GetServerSideProps, NextPage } from "next"

// interface HomeProps {
//   publications: PublicationData[]
// }

const Home: NextPage = () => {
  return <DefaultHeader />
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await api.get("/publications")
//   return {
//     props: { publications: response.data },
//   }
// }

export default Home
