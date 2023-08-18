import { PublishRequest } from "@/schemas/publish.schema"
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
  coverImg: String | null
  setCoverImg: Dispatch<SetStateAction<File | null>>
  images: String | null
  setImages: Dispatch<SetStateAction<File | null>>
  createPublish: () => void
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
    userId: "",
    description: "",
    coverImg: "",
  })
  return (
    <PublishContext.Provider
      value={
        {
          // coverImg,
          // setCoverImg,
          // images,
          // setImages,
          // createPublish,
          // publishInfo,
          // setPublishInfo,
        }
      }
    >
      {children}
    </PublishContext.Provider>
  )
}

export const usePublish = () => useContext(PublishContext)
