import React from "react";
import { useState } from "react";
import useCategorias from '../../hooks/useCategorias';
import useNotas from '../../hooks/useNotas';
import './estilo.css';


function FormularioCadastro() {

    //Estado interno do componente
    const [cadastro, //recebe os dados 
        setCadastro] = useState({ categorias: [], titulo: '', texto: '', categoria: 'Sem categoria' }); //seta os dados

    const categorias = useCategorias( state => state.categorias );

    const criarNota = useNotas( state => state.increment );

    function handleMudancaCategoria(evento) {
        setCadastro({ ...cadastro, categoria: evento.target.value });
    }

    function handleMudancaTitulo(evento) {
        setCadastro({ ...cadastro, titulo: evento.target.value });
    }

    function handleMudancaTexto(evento) {
        setCadastro({ ...cadastro, texto: evento.target.value });
    }

    function handleSubmit (evento) {
        evento.preventDefault(); //para não executar o comportamento padrão (tentar enviar o form)
        // evento.stopPropagation(); //evita a propagação do evento no DOM
        
        if(cadastro.titulo !== "" && cadastro.texto !== "") {
            criarNota({titulo: cadastro.titulo, texto: cadastro.texto, categoria: cadastro.categoria}); //chamando a propriedade "criarNota" da instância "FormularioCadastro"
            setCadastro({ ...cadastro, titulo: '', texto: '', categoria: 'Sem Categoria' });
        }
    }


    return (
        <form className="form-cadastro" onSubmit={handleSubmit}>

            <select className="form-cadastro_input" onChange={handleMudancaCategoria} >
                <option>Sem categoria</option>

                {categorias.map((categoria, index) => {
                    return <option key={index}>{categoria}</option>
                })}
            </select>

            <input
                type="text"
                placeholder="Título"
                className="form-cadastro_input"
                onChange={handleMudancaTitulo}
                value={cadastro.titulo}
            />

            <textarea
                rows={15}
                placeholder="Escreva sua nota..."
                className="form-cadastro_input"
                onChange={handleMudancaTexto}
                value={cadastro.texto}
            />

            <button className="form-cadastro_input form-cadastro_submit">
                Criar Nota
            </button>

        </form>
    );

}

export default FormularioCadastro;