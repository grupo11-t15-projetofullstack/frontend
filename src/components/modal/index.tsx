import { ReactNode, useEffect, useRef } from "react"

interface ModalProps {
  toggleModal: () => void
  children: ReactNode
}

export const Modal = ({ children, toggleModal }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return
      }

      if (!event.target) {
        return
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal()
      }
    }

    window.addEventListener("mousedown", handleClick)

    return () => {
      window.removeEventListener("mousedown", handleClick)
    }
  }, [toggleModal])

  return (
    <div className="fixed top-0 bg-grey-grey0 bg-opacity-50 w-screen h-screen flex justify-center items-center">
      <div
        ref={ref}
        className="relative p-5 max-w-64 max-h-[54rem] overflow-y-scroll rounded bg-grey-whiteFixed shadow-2xl"
      >
        <p
          onClick={toggleModal}
          className="absolute top-4 right-3 w-6 h-6 cursor-pointer text-grey-grey3"
        >
          X
        </p>
        {children}
      </div>
    </div>
  )
}
