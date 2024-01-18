import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para Criar a Categoria do Exame</h2>
                <CampoTexto label="Título" placeholder="Digite aqui seu título" />
                <CampoTexto label="Descrição" placeholder="Digite aqui a descrição" />
                <CampoTexto label="Cor" placeholder="Digite aqui o hexadecimal" />

                <input type="submit" value="Criar Categoria"/>
            </form>
        </section>
    )

}

export default Formulario