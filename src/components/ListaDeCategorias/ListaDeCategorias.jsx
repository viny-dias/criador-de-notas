import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./estilo.css";

function ListaDeCategorias() {
    const dispatch = useDispatch();

    const categorias  = useSelector(state => state.novaCategoria.categorias) 

    function handleEventoInput(e) {
        if (e.key === "Enter") {
            let valorCategoria = e.target.value;
            
            if(valorCategoria.trim() && !categorias.includes(valorCategoria)) {
                dispatch( { type: 'increment', value: valorCategoria } )
                e.target.value = "";
            }
        }
    }

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