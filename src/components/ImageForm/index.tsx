import { usePublish } from "@/contexts/publications"
import { useState } from "react"

export const ImageForm = () => {
  const { images, setImages, publishInfo, setPublishInfo } = usePublish()

  const [imagesInput, setImageInput] = useState<string[]>([])

  const addInput = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    setImageInput([...imagesInput, ""])
  }

  return (
    <div>
      <div className="mt-2">
        <label
          htmlFor="coverImg"
          className="user-form-label text-sm font-medium"
        >
          1° Imagem da galeria
        </label>
        <div>
          <input
            type="url"
            onChange={(e) => {
              setPublishInfo({ ...publishInfo, coverImg: e.target.value })
            }}
            className="w-full p-2 border rounded mt-1 text-grey-grey3 border-grey-grey7"
          />
        </div>
      </div>
      <div className="mt-2">
        <label
          htmlFor="coverImg"
          className="user-form-label text-sm font-medium"
        >
          2° Imagem da galeria
        </label>
        <div>
          <input
            type="url"
            onChange={(e) => {
              setPublishInfo({ ...publishInfo, coverImg: e.target.value })
            }}
            className="w-full p-2 border rounded mt-1 text-grey-grey3 border-grey-grey7"
          />
        </div>

        {imagesInput?.map((image) => (
          <div key={imagesInput.length} className="mt-2">
            <label
              htmlFor="coverImg"
              className="user-form-label text-sm font-medium"
            >
              {imagesInput.length + 2}° Imagem da galeria
            </label>
            <div>
              <input
                type="url"
                onChange={(e) => {
                  setPublishInfo({ ...publishInfo, coverImg: e.target.value })
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
