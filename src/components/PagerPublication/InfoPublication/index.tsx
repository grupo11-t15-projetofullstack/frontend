import { Publication } from "@/pages"
import { useState } from "react";

interface CardProps {
    publication: Publication
}



export const BoxPublication = ({ publication }: CardProps) => {
    const [userData, setUserData] = useState("");
    return (
        <>
         <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "230px",
                    width: '100%',
                    maxWidth: '500px',
                    marginTop: "125px",
                    position: "relative",
                    zIndex: "1",
                    background: '#ffffff',
                    marginLeft: '600px',
                    flexDirection: 'column',
                    borderRadius: '4px'
                }}
            >
                <h1 className="font-semibold text-base leading-5">
                    {publication.make} - {publication.model}
                </h1>
                <p className="bg-brands-brand4 rounded-sm p-1 text-brands-brand1 font-medium text-sm leading-6">
                    {publication.distance} KM
                </p>
                <p className="bg-brands-brand4 rounded-sm p-1 text-brands-brand1 font-medium text-sm leading-6 text-">
                    {publication.year}
                </p>
                <p className="font-medium leading-7 text-base">
                    R$ {publication.price.toFixed(2)}
                </p>
                <button onClick={() => console.log(publication)}>Console</button>
                {/* <a href={`https://api.whatsapp.com/send?phone=+55+${userData.user.phone}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}> */}
                    <button style={{
                        background: '#4529E6',
                        color: '#ffffff',
                        borderRadius: '4px',
                        padding: '12px, 20px, 12px, 20px',
                        width: '100px',
                        height: '38px',

                    }}>Comprar</button>
                {/* </a> */}

            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "230px",
                width: '100%',
                maxWidth: '500px',
                marginTop: "125px",
                position: "relative",
                zIndex: "1",
                background: '#ffffff',
                marginLeft: '600px',
                flexDirection: 'column',
                borderRadius: '4px',
                padding: '36px, 44px, 36px, 44px',
                gap: '12px',
                marginBottom: '52px'

            }}>
                <h1> Descrição</h1>
                <p>{publication.description}</p>
            </div>
            </>
   

    )
}