import CampoTexto from '../CampoTexto/campoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css';
import Botao from  '../Botao/Botao';

const Formulario = ()=>{
    const times=[
        'Permanente',
        'Descartável',
        'Rotativo'
    ]
    return(
        <section className='formulario'>
        <form>
            <h2 align="center">Preencha os dados para cadastrar produtos no estoque: </h2>
            <CampoTexto label="Nome" placeholder="Digite o nome"/>
            <CampoTexto label="Marca" placeholder="Digite a marca"/>
            <CampoTexto label="Quantidade" placeholder="Digite aquantidade"/>
            <h3>Qual o tipo?</h3>
            <ListaSuspensa itens = {times}/>
            <br/>
            <Botao/>
        </form>
        </section>
    )
}
export default Formulario;