import Image from "next/image";

// Importando Imagens
import Logo from "../../../public/logo.png";

// Importando icones
import { BsSun, BsMoon } from "react-icons/bs";
// Importando Estilos
import estilos from "./Topo.module.css";

export default function Topo(props){

    return(
        <header id={estilos.topo} className={props.ehTemaEscuro ? estilos.topoTemaEscuro: estilos.topoTemaClaro}>
            <Image id={estilos.imgLogo} src={Logo} alt="Imagem do Logitmo em M."/>
            <button onClick={props.acao_onclick}>{props.ehTemaEscuro? <BsSun/>:<BsMoon/>}</button>
        </header>
    );
}