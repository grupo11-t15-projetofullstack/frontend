import { Publication } from "@/pages"
import { api } from "@/services/api"
import  { useRouter } from "next/router"
import { useEffect, useState } from "react"

interface CardProps {
    publication: Publication
  }

export const BoxInfoUser = ({publication}: CardProps) => {
    const router = useRouter()
    const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        if (publication.userId) {
          const response = await api.get(`/users/${publication.userId}`);
          setUserData(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, [publication.userId]);

    return(
        <>
        <div>
        <div className="rounded-full w-20 h-20 bg-brands-brand1">
        <p className="text-center mt-6 text-grey-whiteFixed">SL</p>
      </div>
      {userData && (
        <>
          <strong>{userData.name}</strong>
          <p>{userData.description}</p>
        </>
      )}
      <button onClick={()=>console.log(publication)}>CONSOLE</button>
      <button onClick={() => router.push(`/${publication.userId}`)}>Ver Todos os anuncios</button>
        </div>
        
        </>
    )
}