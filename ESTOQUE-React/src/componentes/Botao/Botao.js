import './Botao.css';

const Botao = (props) => {
    return(
        <button className='botao'>
            {props.children}
            Cadastrar
        </button>
    )
}

export default Botao;
