import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './estilo.css';

function FormularioCadastro({ categorias, criarNota }) {

    //Estado interno do componente
    const [cadastro, //recebe os dados 
        setCadastro] = useState({ categorias: [], titulo: '', texto: '', categoria: 'Sem categoria' }); //seta os dados

    // useEffect -> roda após o componente ser montado
    useEffect( () => {
        categorias.inscrever(novasCategorias) //roda após o componente ser montado
        return () => { categorias.desinscrever() } //roda quando o componente é desmontado da tela
    }, [] //array de dependencia
    );

    function novasCategorias(categorias) {
        setCadastro({ ...cadastro, categorias });
    }

    function handleMudancaCategoria(evento) {
        evento.stopPropagation();
        setCadastro({ ...cadastro, categoria: evento.target.value });
    }

    function handleMudancaTitulo(evento) {
        evento.stopPropagation();
        setCadastro({ ...cadastro, titulo: evento.target.value });
    }

    function handleMudancaTexto(evento) {
        evento.stopPropagation();
        setCadastro({ ...cadastro, texto: evento.target.value });
    }

    function handleSubmit (evento) {
        evento.preventDefault(); //para não executar o comportamento padrão (tentar enviar o form)
        evento.stopPropagation(); //evita a propagação do evento no DOM
        criarNota(cadastro.titulo, cadastro.texto, cadastro.categoria); //chamando a propriedade "criarNota" da instância "FormularioCadastro"

        setCadastro({ ...cadastro, titulo: '', texto: '', categoria: 'Sem Categoria' });
    }


    return (
        <form className="form-cadastro" onSubmit={handleSubmit}>

            <select className="form-cadastro_input" onChange={handleMudancaCategoria} >
                <option>Sem categoria</option>

                {categorias.categorias.map((categoria, index) => {
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