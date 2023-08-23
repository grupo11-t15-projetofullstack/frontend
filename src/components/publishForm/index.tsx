import { usePublish } from "@/contexts/publications"
import { ImageForm } from "../ImageForm"
import { useState, useEffect } from "react"

interface FormProps {
  toggleModal: () => void
  repo: any
}

interface Model {
  name: string
}

export const PublishForm = ({ toggleModal, repo }: FormProps) => {
  const [makerList, setMakerList] = useState<string[]>([])
  const [models, setModels] = useState<Model[]>([])

  useEffect(() => {
    const makers = Object.keys(repo)
    setMakerList(makers)
  }, [repo])

  const { createPublish, publishInfo, setPublishInfo } = usePublish()

  const handleChange = (e: any) => {
    const maker = e.target.value

    const value = repo[maker]

    setModels(value)
  }
  return (
    <>
      <div className="flex flex-col gap-2 mb-4">
        <h1 className="text-base font-medium mb-2">Criar anúncio</h1>
        <p className="text-sm leading-6 font-medium mb-3">
          Informações do veículo
        </p>
        <label className="text-sm font-medium">Marca</label>
        <select
          className="w-9/10 p-2 border rounded border-grey-grey7"
          onChange={(e) => {
            handleChange(e)
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
          className="w-9/10 p-2 border rounded border-grey-grey7"
          onChange={(e) => {
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
          <label htmlFor="year" className="user-form-label text-sm font-medium">
            Ano
          </label>
          <div>
            <input
              type="number"
              onChange={(e) => {
                setPublishInfo({ ...publishInfo, year: Number(e.target.value) })
              }}
              placeholder="2018"
              className="w-38 p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>

        <div>
          <label htmlFor="fuel" className="user-form-label text-sm font-medium">
            Combustível
          </label>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setPublishInfo({ ...publishInfo, fuel: e.target.value })
              }}
              placeholder="Gasolina / Diesel"
              className="w-38 p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <div>
          <label
            htmlFor="distance"
            className="user-form-label text-sm font-medium"
          >
            Kilometragem
          </label>
          <div>
            <input
              type="number"
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
          <label
            htmlFor="color"
            className="user-form-label text-sm font-medium"
          >
            Cor
          </label>
          <div>
            <input
              type="text"
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
          <label htmlFor="fipe" className="user-form-label text-sm font-medium">
            Preço FIPE
          </label>
          <div>
            <input
              type="number"
              disabled
              placeholder="48000,00"
              className="w-38 p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="price"
            className="user-form-label text-sm font-medium"
          >
            Preço
          </label>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setPublishInfo({
                  ...publishInfo,
                  price: Number(e.target.value),
                })
              }}
              placeholder="190000,00"
              className="w-38 p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>
      </div>
      <div className="w-full mb-4">
        <label
          htmlFor="description"
          className="user-form-label text-sm font-medium"
        >
          Descrição
        </label>
        <div>
          <textarea
            name="description"
            onChange={(e) => {
              setPublishInfo({ ...publishInfo, description: e.target.value })
            }}
            className="h-28 w-full border rounded mt-1 border-grey-grey7"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="coverImg"
          className="user-form-label text-sm font-medium"
        >
          Imagem de capa
        </label>
        <div>
          <input
            type="url"
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
        <button
          onClick={(e) => {
            e.preventDefault()
            createPublish()
          }}
        >
          Criar anúncio
        </button>
      </div>
    </>
  )
}
