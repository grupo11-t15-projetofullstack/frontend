import Card from "@/components/card";
import DefaultFooter from "@/components/footer";
import DefaultHeader from "@/components/header";
import { Select } from "@/components/select";
import { GetServerSideProps, NextPage } from "next";
import { PublishProviderData } from "@/contexts/publications"; // Importe a interface para referência
import { api } from "@/services/api";

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
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <DefaultHeader />

        <div className="flex-grow">
          <Select />

          <div style={{ maxWidth: "320px", display: "flex" }}>
            {publications.map((publication, index) => (
              <Card key={index} publication={publication} />
            ))}
          </div>
        </div>

        <DefaultFooter />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const response = await api.get("/publications");
    const publications: Publication[] = response.data; // Atualize com os dados reais

    return {
      props: {
        publications,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        publications: [],
      },
    };
  }
};

export default Home;
