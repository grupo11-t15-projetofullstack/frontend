import LogoFooter from "../../assets/LogoFooter.svg"
import Direitos from "../../assets/© 2022 - Todos os direitos reservados..svg"
import Row from "../../assets/Row.svg"
import Image from 'next/image';

const DefaultFooter = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center h-20 pr-4 md:pr-20 bg-grey-grey0">
            <div className="flex flex-col md:flex-row items-center md:gap-80">
                <Image src={LogoFooter} alt="Logo image" className="mx-20 my-5" />
                <Image src={Direitos} alt="Direitos" className="mx-4 md:mx-10 my-2 md:my-5" />
            </div>
            <button style={{ color: "#FFFFFF", borderRadius: '4px', width: '53px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="bg-grey-grey1">
                <Image src={Row} alt="Seta" />
            </button>
        </footer>
    );


}



export default DefaultFooter