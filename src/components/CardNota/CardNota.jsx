//Atalhos p/ Simple React Snippets

//'imr' importa o react
//import React from 'react';
// 'imrc' importa o react e o 'Component'
import React, { Component } from 'react';
import './estilo.css';
import {ReactComponent as DeleteSvg} from '../../assets/img/delete.svg'

//Cria o componente de classe
class CardNota extends Component {
    apagar() {
        const indice = this.props.indice;
        this.props.apagarNota(indice);
    }

    render() {
        return (
            <section className="card-nota">

                <header className="card-nota_cabecalho">

                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>

                    {/* <img src={deleteSvg}/> */}
                    <DeleteSvg onClick={this.apagar.bind(this)}/>

                    <h4>{this.props.categoria}</h4>

                </header>

                <p className="card-nota_texto">{this.props.texto}</p>
            </section>
        );
    }
}


export default CardNota;