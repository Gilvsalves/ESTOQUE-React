import './tabela.css'

const Tabela =(props)=>{

    /*<select>
        {props.prod.map(item => <option key={item}>{item}</option> )}
    </select>
    */
    
    return(
        <section className='Table'>
            
            <table>
                <thead>
                    <th>| Nome -|- </th>
                    <th> Marca -|- </th>
                    <th> Quantidade |</th>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </section>
    )

}

export default Tabela;