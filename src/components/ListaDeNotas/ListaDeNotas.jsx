import React from "react";
import CardNota from "../CardNota";
import "./estilo.css";
import { useSelector, useDispatch } from "react-redux";
import { notaActions } from "../../store/index";

function ListaDeNotas() {
  const dispatch = useDispatch();

  const notas = useSelector((state) => state.nota.notas);
  console.log(notas);

  return (
    <ul className="lista-notas">
      {notas.map((nota) => {
        return (
          <li className="lista-notas_item" key={nota.id}>
            <CardNota
              apagarNota={() => dispatch(notaActions.delete(nota.id))}
              titulo={nota.titulo}
              texto={nota.texto}
              categoria={nota.categoria}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ListaDeNotas;
