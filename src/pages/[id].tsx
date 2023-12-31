import BoxAdvertiser from "@/components/advertiser/BoxAdvertiser";
import Card from "@/components/card";
import DefaultFooter from "@/components/footer";
import DefaultHeader from "@/components/header";
import publicationData from "@/mock/publication";
import { publictData } from "@/schemas/music.schema";
import { api } from "@/services/api";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";

interface UserProfileProps {
  user: UserData;
}

interface UserData {
  id: number;
  name: string;
  publications: Publication[];
}



interface PublicationsProps {
  publict: publictData
}

const OwnProfile: NextPage<PublicationsProps> = ({
  publict,
}: PublicationsProps) => {
  const { publications } = publict;
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <DefaultHeader />
      </header>
      <div style={{ flex: 1, position: "relative", background: "#F1F3F5" }}>
        <div
          style={{
            position: "absolute",
            zIndex: 0,
            background: "#4529E6",
            height: "23%",
            width: "100%",
            top: 0,
            left: 0,
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            marginTop: "125px",
            position: "relative",
            zIndex: "1",
          }}
        >
          <BoxAdvertiser user={publict}/>
        </div>

        <div
          style={{
            zIndex: "0",
            display: "flex",
            gap: "150px",
            width: "90%",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "1300px",
            marginTop: "80px",
            marginBottom: "60px",
          }}
        >
      {publications.map((publication, index) => (
          <Card key={index} publication={publication} />
        ))}
        </div>
      </div>
      <footer className="mt-auto">
        <DefaultFooter />
      </footer>
    </div>
  )
}

export const getStaticPaths = async () => {
    return {
        paths: [{ params: { id: "95ad2591-1d59-4bed-9618-42c49f25a73c" } }],
        fallback: "blocking"
    };
};

export const getStaticProps: GetStaticProps<PublicationsProps> = async (ctx) => {
    const id = ctx.params!.id;
    const response = await api.get(`/users/${id}`);

    const res = await fetch("https://kenzie-kars.herokuapp.com/cars")
    const repo = await res.json()


    return { props: { publict: response.data, }, revalidate: 60 };
};

export default OwnProfile
