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

const OwnProfile: NextPage<UserProfileProps> = ({ user }: UserProfileProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <DefaultHeader />
            </header>
          
            <div style={{ flex: 1, position: 'relative', background: '#F1F3F5' }}>
                <div
                    style={{
                        position: 'absolute',
                        zIndex: 0,
                        background: '#4529E6',
                        height: '23%',
                        width: '100%',
                        top: 0,
                        left: 0,

                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        marginTop: '125px',
                        position: 'relative',
                        zIndex: '1'
                    }}
                >
                    <BoxAdvertiser />
                </div>

                <div style={{  zIndex: '0', display: 'flex',  gap: '150px', width: '90%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', minWidth: '1300px', marginTop: '80px', marginBottom: '60px'  }}>
                    {publicationData.map((publication, index) => (
                        <Card key={index} publication={publication} />
                    ))}
                </div>
            </div>
            <footer className="mt-auto">
                <DefaultFooter />
            </footer>
        </div>
    );
};


export const getServerSideProps: GetServerSideProps<UserProfileProps> = async (context) => {
  const userId = context.params?.userId as string;

  try {
    const response = await api.get(`/users/${userId}`); // Adjust the API endpoint as needed
    const user: UserData = response.data;
    const publications: Publication[] = response.data;
    return {
      props: {
        user,
        publications
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

export default OwnProfile;
