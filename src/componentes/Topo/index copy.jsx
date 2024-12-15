'use client'

import { useState } from "react";
import Image from "next/image";

// Importando Imagens
import Logo from "../../../public/logo.png";

// Importando icones
import { BsSun, BsMoon } from "react-icons/bs";
// Importando Estilos
import estilos from "./Topo.module.css";

export default function Topo(props){
// Criando variáveis
const [alterarTema, setAlterarTema] = useState(false)
// Criando a função que altera o tema
function trocarTemaPagina(){
  setAlterarTema(!alterarTema);
}

    return(
        <header id={estilos.topo}>
            <Image id={estilos.imgLogo} src={Logo} alt="Imagem do Logitmo em M."/>
            <button onClick={trocarTemaPagina}>{alterarTema? <BsSun/>:<BsMoon/>}</button>
        </header>
    );
}