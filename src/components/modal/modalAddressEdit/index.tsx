import React from "react";
import { Input } from "@/components/form/input";

const ModalAddressEdit = ({ toggleModal }) => {
    const [cep, setCep] = React.useState("");
    const [state, setState] = React.useState("");
    const [city, setCity] = React.useState("");
    const [street, setStreet] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [complement, setComplement] = React.useState("");

    const handleCepChange = (event) => {
        setCep(event.target.value);
    };

    const handleStateChange = (event) => {
        setState(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleStreetChange = (event) => {
        setStreet(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const handleComplementChange = (event) => {
        setComplement(event.target.value);
    };

    return (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
            <div style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", width: "80%", maxWidth: "400px", padding: "20px" }}>
                <div style={{display: 'flex', flexDirection: 'row', gap: '180px'}}>
                    <h1 >Editar Endereço</h1>
                    <p onClick={toggleModal}>X</p>
                </div>

                <div className="input-container">
                    <label htmlFor="name">Cep:</label>
                    <input
                        type="text"
                        id="name"
                        value={cep}
                        onChange={handleCepChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Estado:</label>
                    <input
                        type="email"
                        id="email"
                        value={state}
                        onChange={handleStateChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="cpf">Cidade:</label>
                    <input
                        type="text"
                        id="cpf"
                        value={city}
                        onChange={handleCityChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="celular">Rua:</label>
                    <input
                        type="text"
                        id="celular"
                        value={street}
                        onChange={handleStreetChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="dataNascimento">Número:</label>
                    <input
                        type="text"
                        id="dataNascimento"
                        value={street}
                        onChange={handleNumberChange}
                    />
                </div>
            

                <div className="input-container">
                    <label htmlFor="descricao">Complemento:</label>
                    <input
                        type="text"
                        id="descricao"
                        value={complement}
                        onChange={handleComplementChange}
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: '90px'}}>
                    <button onClick={toggleModal}>Cancelar</button>
                    <button>Salvar Alterações</button>
                </div>
            </div>
        </div>
    );
};

export default ModalAddressEdit;
