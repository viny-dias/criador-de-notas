import React from "react";
import CardNota from "../CardNota";
import './estilo.css';
import useNotas from '../../hooks/useNotas';

function ListaDeNotas() {

    const notas = useNotas( state => state.notas );

    const apagarNota = useNotas( state => state.delete );

    return (
        <ul className="lista-notas">
            {notas.map((nota, index) => {
                return (
                    <li className="lista-notas_item" key={index}>

                        <CardNota 
                            indice={index}
                            apagarNota={apagarNota} 
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