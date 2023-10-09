import Tabela from "../Tabela/Tabela"
import './Caixa.css'

const Caixa = ()=>{
    const Produtos=[
        'Eng. Soft',
        'Eng. Dados',
        'Analista',
        'TikToker'
    ]

    return(
        <section className='Table'>
            <form>
            <h2>Lista de Produtos</h2>
            <Tabela prod={Produtos}/>
            </form>
        </section>
    )

}

export default Caixa;