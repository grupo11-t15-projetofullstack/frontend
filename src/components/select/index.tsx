import React, { useEffect, useState, Dispatch, SetStateAction } from "react"
import Slider from "@mui/material/Slider"
import { Publication } from "@/pages"

interface FilterProps {
  repo: Publication[]
  setFilteredCards: Dispatch<SetStateAction<Publication[]>>
  filteredCards: Publication[]
}

function removeDuplicates(arr: string[]) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

export const Select = ({
  repo,
  setFilteredCards,
  filteredCards,
}: FilterProps) => {
  const [valueKm, setValueKm] = React.useState<number[]>([0, 650000])
  const [valuePrice, setValuePrice] = React.useState<number[]>([0, 1000000])
  const [makers, setMakers] = useState<string[]>([])
  const [models, setModels] = useState<string[]>([])
  const [years, setYears] = useState<string[]>([])
  const [colors, setColors] = useState<string[]>([])
  const [fuels, setFuels] = useState<string[]>([])
  const [secondList, setSecondList] = useState<Publication[]>([])

  const addRepo = () => {
    setFilteredCards(repo)
    setSecondList(repo)

    repo.map((item: Publication) => {
      makers.push(item.make)
    })

    repo.map((item: Publication) => {
      models.push(item.model)
    })

    repo.map((item: Publication) => {
      years.push(item.year.toString())
    })

    repo.map((item: Publication) => {
      colors.push(item.color)
    })

    repo.map((item: Publication) => {
      fuels.push(item.fuel.toString())
    })

    const uniqueArrMaker = removeDuplicates(makers)
    const uniqueArrModel = removeDuplicates(models)
    const uniqueArrYear = removeDuplicates(years)
    const uniqueArrColor = removeDuplicates(colors)
    const uniqueArrFuel = removeDuplicates(fuels)
    setMakers(uniqueArrMaker)
    setModels(uniqueArrModel)
    setYears(uniqueArrYear.sort())
    setColors(uniqueArrColor)
    setFuels(uniqueArrFuel)

    setValueKm([0, 650000])
    setValuePrice([0, 1000000])
  }

  useEffect(() => {
    addRepo()
  }, [repo])

  const handleChangeMake = async (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    maker: string
  ) => {
    const filtered = filteredCards.filter(
      (item: Publication) => item.make == maker
    )
    setFilteredCards(filtered)
    setSecondList(filtered)
    setMakers([maker])

    models.length = 0
    colors.length = 0
    years.length = 0
    fuels.length = 0

    filtered.map((item: Publication) => {
      models.push(item.model)
      colors.push(item.color)
      years.push(item.year.toString())
      fuels.push(item.fuel)
    })

    const uniqueArrayModel = removeDuplicates(models)
    setModels(uniqueArrayModel)

    const uniqueArrayYear = removeDuplicates(years)
    setYears(uniqueArrayYear.sort())

    const uniqueArrayColor = removeDuplicates(colors)
    setColors(uniqueArrayColor)

    const uniqueArrayFuel = removeDuplicates(fuels)
    setFuels(uniqueArrayFuel)
  }

  const handleChangeModel = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    model: string
  ) => {
    const filtered = filteredCards.filter((car) => car.model == model)
    setFilteredCards(filtered)
    setSecondList(filtered)
    setModels([model])

    makers.length = 0
    colors.length = 0
    years.length = 0
    fuels.length = 0

    filtered.map((item: Publication) => {
      makers.push(item.make)
      colors.push(item.color)
      years.push(item.year.toString())
      fuels.push(item.fuel)
    })

    const uniqueArrayMaker = removeDuplicates(makers)
    setMakers(uniqueArrayMaker)

    const uniqueArrayYear = removeDuplicates(years)
    setYears(uniqueArrayYear.sort())

    const uniqueArrayColor = removeDuplicates(colors)
    setColors(uniqueArrayColor)

    const uniqueArrayFuel = removeDuplicates(fuels)
    setFuels(uniqueArrayFuel)
  }

  const handleChangeColor = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    color: string
  ) => {
    const filtered = filteredCards.filter((car) => car.color == color)
    setFilteredCards(filtered)
    setSecondList(filtered)
    setColors([color])

    makers.length = 0
    models.length = 0
    years.length = 0
    fuels.length = 0

    filtered.map((item: Publication) => {
      makers.push(item.make)
      models.push(item.model)
      years.push(item.year.toString())
      fuels.push(item.fuel)
    })

    const uniqueArrayMaker = removeDuplicates(makers)
    setMakers(uniqueArrayMaker)

    const uniqueArrayYear = removeDuplicates(years)
    setYears(uniqueArrayYear.sort())

    const uniqueArrayModel = removeDuplicates(models)
    setModels(uniqueArrayModel)

    const uniqueArrayFuel = removeDuplicates(fuels)
    setFuels(uniqueArrayFuel)
  }

  const handleChangeYear = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    year: string
  ) => {
    const filtered = filteredCards.filter((car) => car.year == Number(year))
    setFilteredCards(filtered)
    setSecondList(filtered)
    setYears([year])

    makers.length = 0
    models.length = 0
    colors.length = 0
    fuels.length = 0

    filtered.map((item: Publication) => {
      makers.push(item.make)
      models.push(item.model)
      colors.push(item.color)
      fuels.push(item.fuel)
    })

    const uniqueArrayMaker = removeDuplicates(makers)
    setMakers(uniqueArrayMaker)

    const uniqueArrayColor = removeDuplicates(colors)
    setColors(uniqueArrayColor)

    const uniqueArrayModel = removeDuplicates(models)
    setModels(uniqueArrayModel)

    const uniqueArrayFuel = removeDuplicates(fuels)
    setFuels(uniqueArrayFuel)
  }

  const handleChangeFuel = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    fuel: string
  ) => {
    const filtered = filteredCards.filter((car) => car.fuel == fuel)
    setFilteredCards(filtered)
    setSecondList(filtered)
    setFuels([fuel])

    makers.length = 0
    models.length = 0
    colors.length = 0
    years.length = 0

    filtered.map((item: Publication) => {
      makers.push(item.make)
      models.push(item.model)
      colors.push(item.color)
      years.push(item.year.toString())
    })

    const uniqueArrayMaker = removeDuplicates(makers)
    setMakers(uniqueArrayMaker)

    const uniqueArrayColor = removeDuplicates(colors)
    setColors(uniqueArrayColor)

    const uniqueArrayModel = removeDuplicates(models)
    setModels(uniqueArrayModel)

    const uniqueArrayYear = removeDuplicates(years)
    setYears(uniqueArrayYear.sort())
  }

  const handleChangeKm = (event: Event, newValue: number | number[]) => {
    setValueKm(newValue as number[])
  }

  const handleClickDistance = () => {
    const filtered = secondList.filter(
      (car) => car.distance >= valueKm[0] && car.distance <= valueKm[1]
    )
    setFilteredCards(filtered)
  }

  const handleChangePrice = (event: Event, newValue: number | number[]) => {
    setValuePrice(newValue as number[])
  }

  const handleClickPrice = () => {
    const filtered = secondList.filter(
      (car) => car.price >= valuePrice[0] && car.price <= valuePrice[1]
    )
    setFilteredCards(filtered)
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
              {makers?.map((maker, index) => (
                <li
                  key={index}
                  className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                  onClick={(e) => handleChangeMake(e, maker)}
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
                  onClick={(e) => handleChangeModel(e, model)}
                >
                  {model}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <label className="font-semibold text-2xl mb-2">Cor</label>
            <ul>
              {colors?.map((color, index) => (
                <li
                  key={index}
                  className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                  onClick={(e) => handleChangeColor(e, color)}
                >
                  {color}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <label className="font-semibold text-2xl mb-2">Ano</label>
            <ul className="flex flex-col">
              {years?.map((year, index) => (
                <li
                  key={index}
                  className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                  onClick={(e) => handleChangeYear(e, year)}
                >
                  {year}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <label className="font-semibold text-2xl mb-2">Combustível</label>
            <ul className="flex flex-col">
              {fuels?.map((fuel, index) => (
                <li
                  key={index}
                  className="ml-3 text-xl font-medium text-grey-grey3 cursor-pointer"
                  onClick={(e) => handleChangeFuel(e, fuel)}
                >
                  {fuel}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-2xl mb-2">KM</label>
            <Slider
              value={valueKm}
              onChange={handleChangeKm}
              onMouseUp={handleClickDistance}
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
              onMouseUp={handleClickPrice}
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
