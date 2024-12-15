import Image from "next/image";
import estilos from "./Rodape.module.css";

// Importando as Imagens
import Logo from "../../../public/logo.png"; 
import Facebook from "../../../public/facebook.png"; 
import Twitter from "../../../public/twitter.png"; 
import Linkedin from "../../../public/linkedin.png";
import Dribble from "../../../public/dribble.png";
import Behance from "../../../public/behance.png";
import Google from "../../../public/google.png";    

export default function Rodape(){
    return(
        <footer id={estilos.rodape}>
            <div id={estilos.divBox}>
                <div id={estilos.box1}>
                    <Image src={ Logo } alt="Uma imagem do Logotipo."/>
                    <p>
                        Ajudamos a criar uma personalidade digital construindo sua
                        marca no ambiente online utilizando estratégias, ferramentas
                        e tecnologias personalizadas.
                    </p>
                </div>
                <div id={estilos.box2}>
                <Image className={estilos.imgFooter} src={Facebook} alt="Uma imagem do Logo do Facebook."/>
                <Image className={estilos.imgFooter} src={Twitter} alt="Uma imagem do Logo do Twitter."/>
                <Image className={estilos.imgFooter} src={Linkedin} alt="Uma imagem do Logo do Linkedin."/>
                <Image className={estilos.imgFooter} src={Dribble} alt="Uma imagem do Logo do Dribble."/>
                <Image className={estilos.imgFooter} src={Behance} alt="Uma imagem do Logo do Behance."/>
                <Image className={estilos.imgFooter} src={Google} alt="Uma imagem do Logo do Google."/>
                </div>
                
            </div>
            <hr/>
            <div id={estilos.divBox2}>
                <p>Copyright 2022 - <span>Luiz Otávio</span></p>
            </div>
        </footer>
    );
}