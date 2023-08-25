import React, { useEffect, useState } from "react"
import Slider from "@mui/material/Slider"

interface FilterProps {
  repo: any
}

interface Model {
  name: string[]
}

export const Select = ({ repo }: FilterProps) => {
  const [kilometers, setKilometers] = useState(0)
  const [makerList, setMakerList] = useState<string[]>([])
  const [modelList, setModelList] = useState<Model[]>([])

  // useEffect(() => {
  //   repo.map((item: { name: string }) =>
  //     setMakerList([...makerList, item.name])
  //   )
  // }, [makerList, repo])

  const [valueKm, setValueKm] = React.useState<number[]>([0, 650000])

  const handleChangeKm = (event: Event, newValue: number | number[]) => {
    setValueKm(newValue as number[])
  }

  const handleChangeModel = async (e: any) => {
    const maker = e.target.value

    const value = repo[maker]

    setModelList(value)
  }

  const [valuePrice, setValuePrice] = React.useState<number[]>([0, 1000000])

  const handleChangePrice = (event: Event, newValue: number | number[]) => {
    setValuePrice(newValue as number[])
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: "300px",
          display: "flex",

          marginLeft: "15px",
        }}
      >
        <form className="flex flex-col gap-2">
          <div>
            <label className="font-semibold text-2xl mb-2">Marca</label>
            <ul>
              {makerList?.map((maker, index) => (
                <li
                  key={index}
                  className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                  onClick={(e) => handleChangeModel(e)}
                >
                  {maker}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <label className="font-semibold text-2xl mb-2">Modelo</label>
          </div>

          <div>
            <label className="font-semibold text-2xl mb-2">Cor</label>
            <ul>
              <li
                className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                value="azul"
              >
                Azul
              </li>
              <li
                className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                value="branca"
              >
                Branca
              </li>
              <li
                className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                value="cinza"
              >
                Cinza
              </li>
              <li
                className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                value="prata"
              >
                Prata
              </li>
              <li
                className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                value="preta"
              >
                Preta
              </li>
              <li
                className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                value="verde"
              >
                Verde
              </li>
            </ul>
          </div>

          <div>
            <label className="font-semibold text-2xl mb-2">Ano</label>
            <ul>
              <li
                className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                value="2019"
              >
                2019
              </li>
              <li
                className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                value="2020"
              >
                2020
              </li>
              <li
                className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                value="2021"
              >
                2021
              </li>
              <li
                className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                value="2022"
              >
                2022
              </li>
            </ul>
          </div>

          <div>
            <label className="font-semibold text-2xl mb-2">Combustível</label>
            <ul>
              <li
                className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                value="eletrico"
              >
                Elétrico
              </li>
              <li
                className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                value="flex"
              >
                Flex
              </li>
              <li
                className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                value="hibrido"
              >
                Híbrido
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-2xl mb-2">KM</label>
            <Slider
              value={valueKm}
              onChange={handleChangeKm}
              valueLabelDisplay="auto"
              min={0}
              max={650000}
              defaultValue={35000}
              className="w-52"
            />
            <p className="ml-3 text-xl font-medium text-grey-grey3">
              {valueKm[0]}km - {valueKm[1]}km
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-2xl mb-2">Preço</label>
            <Slider
              value={valuePrice}
              onChange={handleChangePrice}
              valueLabelDisplay="auto"
              min={0}
              max={1000000}
              defaultValue={35000}
              className="w-52"
            />
            <p className="ml-3 text-xl font-medium text-grey-grey3">
              R${valuePrice[0].toFixed(2)} - R${valuePrice[1].toFixed(2)}
            </p>
          </div>

          <button className="border w-[200px] bg-brands-brand2 text-grey-whiteFixed p-2 mt-4">
            Limpar filtros
          </button>
        </form>
      </div>
    </>
  )
}
