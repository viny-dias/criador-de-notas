import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./estilo.css";
import { categoriaActions } from "../../store/index";

function ListaDeCategorias() {
  const dispatch = useDispatch();

  const categorias = useSelector((state) => state.categoria.categorias);

  function handleEventoInput(e) {
    if (e.key === "Enter") {
      let valorCategoria = e.target.value;

      if (valorCategoria.trim() && !categorias.includes(valorCategoria)) {
        dispatch(categoriaActions.increment(valorCategoria));
        e.target.value = "";
      }
    }
  }

  return (
    <section className="lista-categorias">
      <ul className="lista-categorias_lista">
        {categorias.map((categoria) => {
          return (
            <li key={categoria.id} className="lista-categorias_item">
              {categoria.value}
            </li>
          );
        })}
      </ul>

      <input
        type="text"
        className="lista-categorias_input"
        placeholder="Adicionar categoria"
        onKeyUp={handleEventoInput}
      />
    </section>
  );
}

export default ListaDeCategorias;
