import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Programador',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Inovação e Gestão'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="digite o endereço da imagem" />
                <ListaSuspensa label="Times" itens={times} />
            </form>
        </section>
    )
}

export default Formulario