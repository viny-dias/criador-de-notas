import React from 'react';
import useCategorias from '../../hooks/useCategorias';
import "./estilo.css";

function ListaDeCategorias() {

    const categorias = useCategorias( state => state.categorias );

    const adicionarCategoria = useCategorias( state => state.increment );

    function handleEventoInput(e) {
        if (e.key === "Enter") {
            let valorCategoria = e.target.value;
            
            if(valorCategoria.trim() && !categorias.includes(valorCategoria)) {
                adicionarCategoria(valorCategoria);
                e.target.value = "";
            }
        }
    }

    console.log(categorias);
    return (
        <section className="lista-categorias">
            <ul className="lista-categorias_lista">

                {categorias.map((categoria, index) => {
                    return <li key={index} className="lista-categorias_item">{categoria}</li>
                })}

            </ul>

            <input
                type="text"
                className="lista-categorias_input"
                placeholder='Adicionar categoria'
                onKeyUp={ handleEventoInput } />
        </section>
    );
}

export default ListaDeCategorias;