import './CampoTexto.css'

const CampoTexto = (props) => {
    console.log(props) //Visualizar no console do Chrome
    // Diversos renderizações adicionais/duplicadas por conta da React.StrictMode
    // mas só executa durante a produção
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto