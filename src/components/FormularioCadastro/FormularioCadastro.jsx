import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./estilo.css";
import { notaActions } from "../../store/index";
import { v4 as uuidv4 } from "uuid";

function FormularioCadastro() {
  const dispatch = useDispatch();

  //Pegando o estado, categorias, do store
  const categorias = useSelector((state) => state.categoria.categorias);

  //Estado interno do componente
  const [
    cadastro, //recebe os dados
    setCadastro,
  ] = useState({
    categorias: [],
    titulo: "",
    texto: "",
    categoria: "Sem categoria",
  }); //seta os dados

  function handleMudancaCategoria(evento) {
    setCadastro({ ...cadastro, categoria: evento.target.value });
  }

  function handleMudancaTitulo(evento) {
    setCadastro({ ...cadastro, titulo: evento.target.value });
  }

  function handleMudancaTexto(evento) {
    setCadastro({ ...cadastro, texto: evento.target.value });
  }

  function handleSubmit(evento) {
    evento.preventDefault(); //para não executar o comportamento padrão (tentar enviar o form)
    // evento.stopPropagation(); //evita a propagação do evento no DOM

    if (cadastro.titulo !== "" && cadastro.texto !== "") {
      setCadastro({
        ...cadastro,
        titulo: "",
        texto: "",
        categoria: "Sem Categoria",
      });

      dispatch(notaActions.increment({ ...cadastro, id: uuidv4() }));
    }
  }

  return (
    <form className="form-cadastro" onSubmit={handleSubmit}>
      <select className="form-cadastro_input" onChange={handleMudancaCategoria}>
        <option>Sem categoria</option>

        {categorias.map((categoria) => {
          return <option key={categoria.id}>{categoria.value}</option>;
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
