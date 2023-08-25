import { PublishRequest } from "@/schemas/publish.schema";
import { api } from "@/services/api";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface PublishProviderData {
  coverImg: string | null;
  setCoverImg: Dispatch<SetStateAction<File | null>>;
  images: string | null;
  setImages: Dispatch<SetStateAction<File | null>>;
  createPublish: () => void;
  publishInfo: PublishRequest;
  setPublishInfo: Dispatch<SetStateAction<PublishRequest>>;
  getAllPublish: (data: IgetAllPublishProps) => Promise<void>;
  setPublish: Dispatch<SetStateAction<IPublish[]>>;
  publish: IPublish[];
}

interface IPublish {
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
}

interface IgetAllPublishProps {}

const PublishContext = createContext<PublishProviderData>(
  {} as PublishProviderData
);

export function PublishProvider({ children }: Props) {
  const [publish, setPublish] = useState<IPublish[]>([]);

  const getAllPublish = async (data: IgetAllPublishProps) => {
    try {
      const response = await api.get("/publications", data);
      setPublish(response.data);
    } catch (error) {
      console.error(error);
    }
  }



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
  });

  return (
    <PublishContext.Provider
      value={{
        coverImg: publishInfo.coverImg,
        setCoverImg: setPublishInfo,
        images: null,
        setImages: () => {},
        createPublish: () => {},
        publishInfo,
        setPublishInfo,
        getAllPublish,
        setPublish,
        publish,
      }}
    >
      {children}
    </PublishContext.Provider>
  );
}

export const usePublish = () => useContext(PublishContext);
