import Image from "next/image";

import estilos from "./SecaoBanner.module.css";

// Importando Imagens
import Banner from "../../../public/banner.png";

export default function SecaoBanner(){
    return(
        <section id={estilos.secaoBanner}>
            <div id={estilos.divBanner1} className={estilos.divBanner}></div>
            <div id={estilos.divBanner2} className={estilos.divBanner}>
                <p>BRANDING / UX / UI / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e desing digital</span>
            </div>
        </section>
    );
}