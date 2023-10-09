import './CampoTexto.css'

const CampoTexto = (props) => {
    return(
        <form>
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
        </form>
    )
}

export default CampoTexto;