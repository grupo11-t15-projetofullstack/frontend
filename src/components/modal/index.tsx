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
        className="relative p-5 max-w-64 rounded bg-grey-grey9 shadow-2xl"
      >
        <p
          onClick={toggleModal}
          className="absolute top-1 right-2 cursor-pointer"
        >
          X
        </p>
        {children}
      </div>
    </div>
  )
}
