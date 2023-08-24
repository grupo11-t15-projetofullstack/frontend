import { usePublish } from "@/contexts/publications"
import { ImageForm } from "../ImageForm"
import { useState, useEffect, ChangeEvent } from "react"

interface FormProps {
  toggleModal: () => void
  repo: any
}

interface Model {
  name: string
}

export interface CarInfo {
  year: string
  fipe: number
  fuel: number
}

interface Car extends CarInfo {
  model: string
  make: string
  color: string
  distance: number
  price: number
  description: string
  coverImg: string
  images: string[]
}

interface CarsInfo {
  id: string
  name: string
  brand: string
  year: string
  fuel: number
  value: number
}

export const PublishForm = ({ toggleModal, repo }: FormProps) => {
  const { createPublish, publishInfo, setPublishInfo } = usePublish()
  const [makerList, setMakerList] = useState<string[]>([])
  const [models, setModels] = useState<Model[]>([])
  const [carsInfo, setCarsInfo] = useState<CarsInfo[]>([])
  const [carInfo, setCarInfo] = useState<CarInfo>({
    year: "",
    fipe: 0,
    fuel: 0,
  })

  useEffect(() => {
    const makers = Object.keys(repo)
    setMakerList(makers)
  }, [repo])

  const handleChangeModel = async (e: ChangeEvent<HTMLSelectElement>) => {
    const maker = e.target.value

    const value = repo[maker]

    setModels(value)

    const response = await fetch(
      `https://kenzie-kars.herokuapp.com/cars?brand=${maker.toLowerCase()}`
    )

    const responseJson = await response.json()

    setCarsInfo(responseJson)
  }

  const handleChangeCarInfo = (e: ChangeEvent<HTMLSelectElement>) => {
    const car = carsInfo.filter((car) => car.name == e.target.value)

    setCarInfo({
      year: car[0].year,
      fuel: car[0].fuel,
      fipe: car[0].value,
    })
  }

  return (
    <form onSubmit={(e) => createPublish(e, carInfo)}>
      <div className="flex flex-col gap-2 mb-4">
        <h1 className="text-base font-medium mb-2">Criar anúncio</h1>
        <p className="text-sm leading-6 font-medium mb-3">
          Informações do veículo
        </p>
        <label className="text-sm font-medium">Marca</label>
        <select
          id="make"
          className="w-9/10 p-2 border rounded border-grey-grey7"
          onChange={(e) => {
            handleChangeModel(e)
            setPublishInfo({ ...publishInfo, make: e.target.value })
          }}
        >
          {makerList?.map((maker) => (
            <option key={maker} value={maker}>
              {maker.charAt(0).toUpperCase() + maker.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label className="text-sm font-medium">Modelo</label>
        <select
          id="model"
          className="w-9/10 p-2 border rounded border-grey-grey7"
          onChange={(e) => {
            handleChangeCarInfo(e)
            setPublishInfo({ ...publishInfo, model: e.target.value })
          }}
        >
          {models?.map((model) => (
            <option key={model.name} value={model.name}>
              {model.name.charAt(0).toUpperCase() + model.name.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4 mb-4">
        <div>
          <label htmlFor="year" className="text-sm font-medium">
            Ano
          </label>
          <div>
            <input
              type="number"
              id="year"
              defaultValue={carInfo.year}
              disabled
              placeholder="2020"
              className="w-38 p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>

        <div>
          <label htmlFor="fuel" className="text-sm font-medium">
            Combustível
          </label>
          <div>
            <input
              id="fuel"
              disabled
              value={
                carInfo.fuel == 1
                  ? "Flex"
                  : carInfo.fuel == 2
                  ? "Híbrido"
                  : "Elétrico"
              }
              type="text"
              placeholder="Elétrico"
              className="w-38 p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <div>
          <label htmlFor="distance" className="text-sm font-medium">
            Kilometragem
          </label>
          <div>
            <input
              id="distance"
              type="text"
              value={publishInfo.distance}
              onChange={(e) => {
                setPublishInfo({
                  ...publishInfo,
                  distance: Number(e.target.value),
                })
              }}
              placeholder="10000"
              className="w-38 p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>

        <div>
          <label htmlFor="color" className="text-sm font-medium">
            Cor
          </label>
          <div>
            <input
              id="color"
              type="text"
              value={publishInfo.color}
              onChange={(e) => {
                setPublishInfo({ ...publishInfo, color: e.target.value })
              }}
              placeholder="Branco"
              className="w-38 p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <div>
          <label htmlFor="fipe" className="text-sm font-medium">
            Preço FIPE
          </label>
          <div>
            <input
              type="text"
              disabled
              value={`R$ ${carInfo.fipe.toFixed(2).replace(".", ",")}`}
              placeholder="48000,00"
              className="w-38 p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>

        <div>
          <label htmlFor="price" className="text-sm font-medium">
            Preço
          </label>
          <div>
            <input
              id="price"
              type="number"
              value={publishInfo.price}
              onChange={(e) => {
                setPublishInfo({
                  ...publishInfo,
                  price: Number(e.target.value),
                })
              }}
              placeholder="R$ 190000,00"
              className="w-38 p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>
      </div>
      <div className="w-full mb-4">
        <label htmlFor="description" className="text-sm font-medium">
          Descrição
        </label>
        <div>
          <textarea
            id="description"
            name="description"
            value={publishInfo.description}
            onChange={(e) => {
              setPublishInfo({ ...publishInfo, description: e.target.value })
            }}
            className="h-28 w-full border rounded mt-1 border-grey-grey7"
          />
        </div>
      </div>
      <div>
        <label htmlFor="coverImg" className="text-sm font-medium">
          Imagem de capa
        </label>
        <div>
          <input
            id="coverImg"
            type="url"
            value={publishInfo.coverImg}
            onChange={(e) => {
              setPublishInfo({ ...publishInfo, coverImg: e.target.value })
            }}
            className="w-full p-2 border rounded mt-1 border-grey-grey7"
          />
        </div>
      </div>

      <ImageForm />

      <div className="flex justify-end gap-6 my-4">
        <button onClick={toggleModal}>Cancelar</button>
        <button type="submit">Criar anúncio</button>
      </div>
    </form>
  )
}
