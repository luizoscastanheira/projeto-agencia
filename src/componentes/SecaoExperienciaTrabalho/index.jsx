import estilos from "./SecaoExperienciaTrabalho.module.css";

// Importando Componentes
import Card from "@/componentes/Card"

export default function (){
    return(
        <section id={estilos.experiencia}>
            <div id={estilos.divBox1} className={estilos.divBox}>
                <h2>Experiências de Trabalho</h2>
                <hr/>
                <p>Há mais de 10 anos de Branding, Design Gráfico, Criação de Sites e 
                    marketing digital, no empenhamos diariamente para entregar resultados
                    que tragam impacto aos nossos clientes.
                </p>
            </div>
            <div id={estilos.divBox2}>
                < Card 
                data={"JUNHO 2012 - 2016"} 
                titulo={"Web Designer"} 
                smallText={"Pied Piper StartUp"}
                paragrafo={"Criação de Landing Pages, sites Institucionais e e-commerce totalmente personalizados."}
                />

                < Card 
                data={"AGOSTO 2016 - 2010"} 
                titulo={"Product Designer"} 
                smallText={"E. Corp"}
                paragrafo={"Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra."}
                />

                < Card 
                data={"FEVEREIRO 2019 - 2021"} 
                titulo={"Digital Consulting"} 
                smallText={"Arasaka Inc."}
                paragrafo={"Criação de Landing Pages, sites Institucionais e e-commerce totalmente personalizados."}
                />
            </div>
        </section>
    );
}