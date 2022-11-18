//Atalhos p/ Simple React Snippets

//'imr' importa o react
//import React from 'react';
// 'imrc' importa o react e o 'Component'
import React from "react";
import "./estilo.css";
import { ReactComponent as DeleteSvg } from "../../assets/img/delete.svg";

const CardNota = ({ apagarNota, titulo, categoria, texto }) => {
  return (
    <section className="card-nota">
      <header className="card-nota_cabecalho">
        <h3 className="card-nota_titulo">{titulo}</h3>

        {/* <img src={deleteSvg}/> */}
        <DeleteSvg onClick={() => apagarNota(titulo)} />

        <h4>{categoria}</h4>
      </header>

      <p className="card-nota_texto">{texto}</p>
    </section>
  );
};

export default CardNota;
