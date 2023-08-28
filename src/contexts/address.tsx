import { api } from "@/services/api"
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react"

export const AddressContext = createContext({} as IAddressContext)

interface Props {
    children: ReactNode
}


interface IAddress {
    cep: string
    state: string
    street: number
    number: number
    complement: string
}

interface IAddressContext {
 address: IAddress | null;
 setAddress: React.Dispatch<React.SetStateAction<IAddress | null>>;
 getAddressId: (addressId: number) => Promise<void>;
 patchAddressId: (formData: IAddress,  address: {id: number}) => void
}




export function AddressProvider({ children }: Props) {
    const [ address, setAddress] = useState<IAddress | null>(null)

const getAddressId = async (addressId: number) => {
    try {
        const response = await api.get(`/addresses/${addressId}`)
        const addressData = response.data
console.log('###################',response)
    } catch (error) {
        console.error(error)
    }
}

const patchAddressId = async (formData: IAddress, address: { id: number }) => {
    try {
        const response = await api.patch(`/addresses/${address.id}`, formData )
        const addressData = response.data
        setAddress(addressData.address)
        window.location.reload();
    } catch (error) {
        console.error(error)
    }
}

    return (
        <AddressContext.Provider
            value={{
                getAddressId,
                patchAddressId
            }}
        >
            {children}
        </AddressContext.Provider>
    )
}


