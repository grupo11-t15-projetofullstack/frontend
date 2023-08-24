import { CarInfo } from "@/components/publishForm"
import { PublishRequest } from "@/schemas/publish.schema"
import { api } from "@/services/api"
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"

interface Props {
  children: ReactNode
}

interface PublishProviderData {
  images: {
    image1: string
    image2: string
    image3: string
    image4: string
    image5: string
    image6: string
    image7: string
    image8: string
    image9: string
    image10: string
  }
  setImages: Dispatch<SetStateAction<any>>
  createPublish: (e: { preventDefault: () => void }, carInfo: CarInfo) => void
  publishInfo: PublishRequest
  setPublishInfo: Dispatch<SetStateAction<PublishRequest>>
}

const PublishContext = createContext<PublishProviderData>(
  {} as PublishProviderData
)

export function PublishProvider({ children }: Props) {
  const [publishInfo, setPublishInfo] = useState({
    model: "",
    make: "",
    year: 0,
    color: "",
    fuel: "",
    distance: 0,
    price: 0,
    description: "",
    coverImg: "",
    images: [""],
  })
  const [images, setImages] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "",
    image8: "",
    image9: "",
    image10: "",
  })

  const createPublish = async (
    e: { preventDefault: () => void },
    carInfo: CarInfo
  ) => {
    e.preventDefault()
    console.log(images)
    publishInfo.year = Number(carInfo.year)
    publishInfo.fuel =
      carInfo.fuel == 1 ? "Flex" : carInfo.fuel == 2 ? "Híbrido" : "Elétrico"

    // try {
    //   const response = await api.post("/publications", publishInfo)
    // } catch (error: any) {
    //   console.log(error.message)
    // }
    console.log(publishInfo)
  }
  return (
    <PublishContext.Provider
      value={{
        images,
        setImages,
        createPublish,
        publishInfo,
        setPublishInfo,
      }}
    >
      {children}
    </PublishContext.Provider>
  )
}

export const usePublish = () => useContext(PublishContext)
