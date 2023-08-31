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
  setPublishInfo: Dispatch<SetStateAction<any>>
  getAllPublish: (data: IgetAllPublishProps) => Promise<void>
  setPublish: Dispatch<SetStateAction<IPublish[]>>
  publish: IPublish[]
  setPriceFipe: Dispatch<SetStateAction<number>>
}

interface IPublish {
  model: string
  make: string
  year: number
  color: string
  fuel: string
  isGoodSale: boolean
  coverImg: string
  distance: number
  price: number
  description: string
  userId: number
}

interface IgetAllPublishProps {}

const PublishContext = createContext<PublishProviderData>(
  {} as PublishProviderData
)

export function PublishProvider({ children }: Props) {
  const [publish, setPublish] = useState<IPublish[]>([])
  const [priceFipe, setPriceFipe] = useState<number>(0)

  const [publishInfo, setPublishInfo] = useState({
    model: "",
    make: "",
    year: 0,
    color: "",
    fuel: "",
    distance: 0,
    price: 0,
    isGoodSell: false,
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
    publishInfo.year = Number(carInfo.year)

    publishInfo.fuel =
      carInfo.fuel == 1 ? "Flex" : carInfo.fuel == 2 ? "Híbrido" : "Elétrico"

    publishInfo.images = Object.values(images)

    const goodSale = publishInfo.price <= priceFipe - (priceFipe / 100) * 5

    console.log(goodSale)

    if (goodSale) {
      publishInfo.isGoodSell = true
    } else {
      publishInfo.isGoodSell = false
    }
    console.log('%$$$$$$$$$$$$$$$',publishInfo)

    const token = localStorage.getItem('@Token')
    const headers = {"Authorization": `Bearer ${token}`}
    try {
      const response = await api.post("/publications", publishInfo, {headers})

    } catch (error: any) {
      console.log(error.message)
    }


  }

  const getAllPublish = async (data: IgetAllPublishProps) => {
    try {
      const response = await api.get("/publications", data)
      setPublish(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <PublishContext.Provider
      value={{
        publishInfo,
        getAllPublish,
        setPublish,
        publish,
        images,
        setImages,
        createPublish,
        setPublishInfo,
        setPriceFipe,
      }}
    >
      {children}
    </PublishContext.Provider>
  )
}

export const usePublish = () => useContext(PublishContext)
