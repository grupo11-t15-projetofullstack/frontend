import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Modal } from "@/components/modal";
import ModalProfileEdit from "@/components/modal/modalProfileEdit";
import ModalAddressEdit from "@/components/modal/modalAddressEdit";
import { UserContext } from "@/contexts/user";
import { PublishForm } from "@/components/publishForm";
import { GetServerSideProps, GetStaticProps } from "next";
import { publictData } from "@/schemas/music.schema";
import { api } from "@/services/api";

export interface CardProps {
  publication: {
    model: string;
    make: string;
    year: number;
    color: string;
    fuel: string;
    isGoodSale: boolean;
    coverImg: string;
    distance: number;
    price: number;
    description: string;
    user: { name: string }
    userId: number;
    comments: [];
    images: [];
  };
}

interface PublicationsProps {
  publict: publictData
}

const BoxAdvertiser = (user, repo) => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [userData, setUserData] = useState({ user: { name: "", address: {} }, })
  const toggleProfileModal = () => setIsProfileModalOpen(!isProfileModalOpen);
  const toggleAddressModal = () => setIsAddressModalOpen(!isAddressModalOpen);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal(!isOpenModal)

  // const { userPublications, getOneUser } = useContext(UserContext);


  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);



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
        <p className="text-center mt-6 text-grey-whiteFixed">{userData.user.name && userData.user.name[0].toUpperCase()}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '15px'
        }}>
          <strong>{userData?.user.name}</strong>
          <p style={{
            backgroundColor: '#EDEAFD',
            color: '#4529E6',
            padding: '4px 8px',
          }}>
            Anunciante
          </p>
        </div>
        <button onClick={() => { console.log(user) }}>CONSOLE</button>
        <p>
          {userData?.user.description}
        </p>
        <button style={{ border: '2px solid #4529E6', color: '#4529E6', width: '160px', height: '48px', borderRadius: '4px', padding: '12px, 28px, 12px, 28px', font: 'Inter', fontSize: '16px', fontWeight: '600' }} onClick={toggleModal}>Criar anúncio</button>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '60px' }}>

          <button onClick={toggleProfileModal}>Editar perfil</button>
          {isProfileModalOpen && <ModalProfileEdit user={userData.user} toggleModal={toggleProfileModal} />}

          <button onClick={toggleAddressModal}>Editar Endereço</button>
          {isAddressModalOpen && <ModalAddressEdit user={userData.user.name} address={userData.user.address} toggleModal={toggleAddressModal} />}

          {isOpenModal && <Modal toggleModal={toggleModal}><PublishForm toggleModal={toggleModal} repo={repo} /></Modal>}
        </div>




        {/* {isOpenModal && <Modal toggleModal={toggleModal}></Modal>} */}
      </div>
    </div>
  );
};



export default BoxAdvertiser;
