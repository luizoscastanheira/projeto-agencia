'use client'
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

// Importando as seçoes/componentes
import Topo from "@/componentes/Topo"
import SecaoBanner from "@/componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "@/componentes/SecaoExperienciaTrabalho";
import Rodape from "@/componentes/Rodape";

export default function Home() {
  // Criando a função de mudança de state
  const [ehTemaEscuro, setTemaEscuro] = useState(false);
  function alterarTema(){
    setTemaEscuro(!ehTemaEscuro);
    console.log(ehTemaEscuro)
  }

  return (
    <>
    <Topo acao_onclick={alterarTema} ehTemaEscuro={ehTemaEscuro}  />
    <SecaoBanner />
    <SecaoExperienciaTrabalho />
    <Rodape />
    </>
  );
}
