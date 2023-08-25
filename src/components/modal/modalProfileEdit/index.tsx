import React, { useContext } from "react";
import { Input } from "@/components/form/input";
import { UserContext } from "@/contexts/user";

const ModalProfileEdit = ({ toggleModal, user }) => {

    const {  UserUpdateProfile } = useContext(UserContext);

    const [name, setName] = React.useState(user.name);
    const [email, setEmail] = React.useState(user.email);
    const [cpf, setCpf] = React.useState(user.cpf);
    const [celular, setCelular] = React.useState(user.phone);
    const [dataNascimento, setDataNascimento] = React.useState(user.birth);
    const [description, setDescription] = React.useState(user.description);

 const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handleCelularChange = (event) => {
    setCelular(event.target.value);
  };

  const handleDataNascimentoChange = (event) => {
    setDataNascimento(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSaveChanges = async () => {
    try {
      const updatedUser = {
        ...user,
        name,
        email,
        cpf,
        phone: celular,
        birth: dataNascimento,
        description,
      };
      UserUpdateProfile(updatedUser, { id: user.id });
      toggleModal();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

    return (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
            <div style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", width: "80%", maxWidth: "400px", padding: "20px" }}>
                <div style={{display: 'flex', flexDirection: 'row', gap: '180px'}}>
                    <h1 >Editar Perfil</h1>
                    <p onClick={toggleModal}>X</p>
                </div>

                <div className="input-container">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        defaultValue={user.name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        defaultValue={user.email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        defaultValue={user.cpf}
                        onChange={handleCpfChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="celular">Celular:</label>
                    <input
                        type="text"
                        id="celular"
                        defaultValue={user.phone}
                        onChange={handleCelularChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="dataNascimento">Data de Nascimento:</label>
                    <input
                        type="text"
                        id="dataNascimento"
                        defaultValue={user.birth}
                        onChange={handleDataNascimentoChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="descricao">Descrição:</label>
                    <input
                        type="text"
                        id="descricao"
                        defaultValue={user.description}
                        onChange={handleDescricaoChange}
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: '90px'}}>
                    <button onClick={toggleModal}>Cancelar</button>
                    <button>Excluir Perfil</button>
                    <button onClick={handleSaveChanges}>Salvar Alterações</button>
                </div>
            </div>
        </div>
    );
};

export default ModalProfileEdit;
