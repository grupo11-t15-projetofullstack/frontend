import { Modal } from "@/components/modal";
import { useState } from "react";

const BoxAdvertiser = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        background: "white",
        width: "1240px",
        height: "406px",
        borderRadius: "4px",
        padding: "20px",
        overflow: "hidden",
        gap: "45px",
      }}
    >
      <div className="rounded-full w-20 h-20 bg-brands-brand1">
        <p className="text-center mt-6 text-grey-whiteFixed">SL</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
          }}
        >
          <strong>Samuel Leão</strong>
          <p
            style={{
              backgroundColor: "#EDEAFD",
              color: "#4529E6",
              padding: "4px 8px",
            }}
          >
            Anunciante
          </p>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem adipisci
          minima inventore officia dicta repellat maiores! Iure ad porro
          laudantium. Est molestiae nesciunt nam eius distinctio esse voluptate
          debitis libero.
        </p>
        <button
          style={{
            border: "2px solid #4529E6",
            color: "#4529E6",
            width: "160px",
            height: "48px",
            borderRadius: "4px",
            padding: "12px, 28px, 12px, 28px",
            font: "Inter",
            fontSize: "16px",
            fontWeight: "600",
          }}
          onClick={toggleModal}
        >
          Criar anúncio
        </button>

        {isOpenModal && <Modal toggleModal={toggleModal}></Modal>}
      </div>
    </div>
  );
};

export default BoxAdvertiser;
