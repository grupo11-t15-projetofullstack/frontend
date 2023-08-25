import { usePublish } from "@/contexts/publications"
import { useState } from "react"

export const ImageForm = () => {
  const { images, setImages } = usePublish()
  const [imagesInput, setImageInput] = useState<string[]>([])
  const [input, setInput] = useState<number[]>([1, 2])

  const addInput = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setInput([...input, input.length + 1])
    setImageInput([...imagesInput, ""])
  }

  return (
    <div>
      <div className="mt-2">
        <label htmlFor="coverImg" className="text-sm font-medium">
          1° Imagem da galeria
        </label>
        <div>
          <input
            type="url"
            onChange={(e) => {
              setImages({ ...images, image1: e.target.value })
            }}
            className="w-full p-2 border rounded mt-1 border-grey-grey7"
          />
        </div>
      </div>
      <div className="mt-2">
        <label htmlFor="coverImg" className="text-sm font-medium">
          2° Imagem da galeria
        </label>
        <div>
          <input
            type="url"
            onChange={(e) => {
              setImages({ ...images, image2: e.target.value })
            }}
            className="w-full p-2 border rounded mt-1 text-grey-grey3 border-grey-grey7"
          />
        </div>

        {imagesInput?.map((image, index) => (
          <div key={index} className="mt-2">
            <label htmlFor="coverImg" className="text-sm font-medium">
              {index + 3}° Imagem da galeria
            </label>
            <div>
              <input
                type="url"
                onChange={(e) => {
                  const imageNumber = index + 3
                  const concat = "image" + imageNumber
                  console.log(concat)
                  setImages({ ...images, concat: e.target.value })
                }}
                className="w-full p-2 border rounded mt-1 text-grey-grey3 border-grey-grey7"
              />
            </div>
          </div>
        ))}
      </div>
      {imagesInput.length <= 7 && (
        <button
          onClick={addInput}
          className="w-3/4 mt-3 p-2 font-medium text-sm rounded cursor-pointer bg-brands-brand4 text-brands-brand1"
        >
          Adicionar campo para imagem da galeria
        </button>
      )}
    </div>
  )
}
