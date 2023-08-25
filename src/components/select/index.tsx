import React, { useEffect, useState, Dispatch, SetStateAction } from "react"
import Slider from "@mui/material/Slider"
import { Publication } from "@/pages"

interface FilterProps {
  repo: Publication[]
  setFilteredCards: Dispatch<SetStateAction<Publication[]>>
}

function removeDuplicates(arr: string[]) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

export const Select = ({ repo, setFilteredCards }: FilterProps) => {
  const [valueKm, setValueKm] = React.useState<number[]>([0, 650000])
  const [valuePrice, setValuePrice] = React.useState<number[]>([0, 1000000])
  const [makers, setMakers] = useState<string[]>([])
  const [models, setModels] = useState<string[]>([])

  const addRepo = () => {
    repo.map((item: Publication) => {
      makers.push(item.make)
    })

    repo.map((item: Publication) => {
      models.push(item.model)
    })

    const uniqueArrMaker = removeDuplicates(makers)
    const uniqueArrModel = removeDuplicates(models)
    setMakers(uniqueArrMaker)
    setModels(uniqueArrModel)
  }

  useEffect(() => {
    addRepo()
  }, [repo])

  const handleChangeModel = async (e: any, maker: string) => {
    const models = repo.filter((item: Publication) => item.make == maker)
    setFilteredCards(models)
    setMakers([maker])
  }

  const handleChangeKm = (event: Event, newValue: number | number[]) => {
    setValueKm(newValue as number[])
  }

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
        {/* <button onClick={() => console.log(makers)}>CONSOLE</button> */}
        <form className="flex flex-col gap-2">
          <div>
            <label className="font-semibold text-2xl mb-2">Marca</label>
            <ul>
              {makers?.map((maker, index) => (
                <li
                  key={index}
                  className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                  onClick={(e) => handleChangeModel(e, maker)}
                >
                  {maker}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <label className="font-semibold text-2xl mb-2">Modelo</label>
            <ul>
              {models?.map((model, index) => (
                <li
                  key={index}
                  className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                  // onClick={(e) => handleChangeModel(e)}
                >
                  {model}
                </li>
              ))}
            </ul>
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

          <button
            onClick={(e) => {
              e.preventDefault()
              setFilteredCards([])
              addRepo()
            }}
            className="border w-[200px] bg-brands-brand2 text-grey-whiteFixed p-2 mt-4"
          >
            Limpar filtros
          </button>
        </form>
      </div>
    </>
  )
}
