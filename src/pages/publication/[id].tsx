import BoxAdvertiser from "@/components/advertiser/BoxAdvertiser";
import Card from "@/components/card";
import DefaultFooter from "@/components/footer";
import DefaultHeader from "@/components/header";
import publicationData from "@/mock/publication";
import { publictData } from "@/schemas/music.schema";
import { api } from "@/services/api";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { BoxPublication } from "@/components/PagerPublication/InfoPublication";
import { CommentBox } from "@/components/PagerPublication/commentBox";
import { mockCommentsData } from "@/mock/comments";
import { BoxInfoUser } from "@/components/PagerPublication/infoUser";


interface HomeProps {
  publications: Publication[]
}

export interface Publication {
  id: number
  model: string
  make: string
  year: number
  color: string
  fuel: string
  isGoodSale: boolean
  coverImg: string
  distance: number
  price: number
  createdAt: string
  userId?: number
  user?: {
    name: string
  }
  description: string,
  comments: [{}]
}

const Publication: NextPage<HomeProps> = ({ publications, publict }: HomeProps) => {
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
        <BoxPublication publication={publications} />
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'relative',
          bottom: '450px',
          right: '400px'
        }}>
          <BoxInfoUser publication={publications} />
        </div>

        <div
          style={{
            zIndex: "0",
            display: "flex",
            gap: "150px",
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "500px",
            flexDirection: 'column',
            background: '#ffffff',
            marginLeft: '600px'
          }}
        >

          <h1>Comentários</h1>
          {mockCommentsData.comments.map((comment) => (
            <CommentBox key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
      <footer className="mt-auto">
        <DefaultFooter />
      </footer>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps<HomeProps> = async (ctx) => {
  try {
    const id = ctx.params!.id;
    const response = await api.get(`/publications/${id}`)
    const publications: Publication[] = response.data

    return {
      props: {
        publications,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        publications: [],
      },
    }
  }
}

export default Publication
