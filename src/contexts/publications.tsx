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
  images: string[]
  setImages: Dispatch<SetStateAction<string[]>>
  createPublish: () => void
  publishInfo: PublishRequest
  setPublishInfo: Dispatch<SetStateAction<PublishRequest>>
}

const PublishContext = createContext<PublishProviderData>(
  {} as PublishProviderData
)

export function PublishProvider({ children }: Props) {
  const [images, setImages] = useState<string[]>([])
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
  })

  const createPublish = () => {
    console.log(publishInfo)
  }
  return (
    <PublishContext.Provider
      value={{
        createPublish,
        publishInfo,
        setPublishInfo,
        setImages,
        images,
      }}
    >
      {children}
    </PublishContext.Provider>
  )
}

export const usePublish = () => useContext(PublishContext)
