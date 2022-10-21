import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from './components/ListaDeCategorias'
import "./assets/App.css";
import './assets/index.css';
import React from 'react';

function App() {

  return (
    <section className="conteudo">
      <FormularioCadastro/>

      <main className="conteudo-principal">
        <ListaDeCategorias/>

        <ListaDeNotas />
      </main>
    </section>
  );
}

export default App;