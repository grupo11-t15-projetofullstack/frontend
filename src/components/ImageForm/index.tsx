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
            className="w-full p-2 border rounded mt-1 border-grey-grey7"
          />
        </div>

        <div className={imagesInput.length > 0 ? "mt-2" : "hidden"}>
          <label htmlFor="coverImg" className="text-sm font-medium">
            3° Imagem da galeria
          </label>
          <div>
            <input
              type="url"
              onChange={(e) => {
                setImages({ ...images, image3: e.target.value })
              }}
              className="w-full p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>

        <div className={imagesInput.length > 1 ? "mt-2" : "hidden"}>
          <label htmlFor="coverImg" className="text-sm font-medium">
            4° Imagem da galeria
          </label>
          <div>
            <input
              type="url"
              onChange={(e) => {
                setImages({ ...images, image4: e.target.value })
              }}
              className="w-full p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>

        <div className={imagesInput.length > 2 ? "mt-2" : "hidden"}>
          <label htmlFor="coverImg" className="text-sm font-medium">
            5° Imagem da galeria
          </label>
          <div>
            <input
              type="url"
              onChange={(e) => {
                setImages({ ...images, image5: e.target.value })
              }}
              className="w-full p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>

        <div className={imagesInput.length > 3 ? "mt-2" : "hidden"}>
          <label htmlFor="coverImg" className="text-sm font-medium">
            6° Imagem da galeria
          </label>
          <div>
            <input
              type="url"
              onChange={(e) => {
                setImages({ ...images, image6: e.target.value })
              }}
              className="w-full p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>

        <div className={imagesInput.length > 4 ? "mt-2" : "hidden"}>
          <label htmlFor="coverImg" className="text-sm font-medium">
            7° Imagem da galeria
          </label>
          <div>
            <input
              type="url"
              onChange={(e) => {
                setImages({ ...images, image7: e.target.value })
              }}
              className="w-full p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>

        <div className={imagesInput.length > 5 ? "mt-2" : "hidden"}>
          <label htmlFor="coverImg" className="text-sm font-medium">
            8° Imagem da galeria
          </label>
          <div>
            <input
              type="url"
              onChange={(e) => {
                setImages({ ...images, image8: e.target.value })
              }}
              className="w-full p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>

        <div className={imagesInput.length > 6 ? "mt-2" : "hidden"}>
          <label htmlFor="coverImg" className="text-sm font-medium">
            9° Imagem da galeria
          </label>
          <div>
            <input
              type="url"
              onChange={(e) => {
                setImages({ ...images, image9: e.target.value })
              }}
              className="w-full p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>

        <div className={imagesInput.length > 7 ? "mt-2" : "hidden"}>
          <label htmlFor="coverImg" className="text-sm font-medium">
            10° Imagem da galeria
          </label>
          <div>
            <input
              type="url"
              onChange={(e) => {
                setImages({ ...images, image10: e.target.value })
              }}
              className="w-full p-2 border rounded mt-1 border-grey-grey7"
            />
          </div>
        </div>
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
