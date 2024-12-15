import estilos from "./Card.module.css";

export default function(props){
    return(
        <div className={estilos.card}>
            <div className={estilos.boxTitulo}>
                <span>{props.data}</span>
                <h3>{props.titulo}</h3>
                <small>{props.smallText}</small>
            </div>
            <p className={estilos.paragrafo}>
                {props.paragrafo}
            </p>
            
        </div>
    );
};