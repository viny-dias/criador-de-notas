import React from "react";
import CardNota from "../CardNota";
import './estilo.css';
import { useSelector, useDispatch } from 'react-redux';

function ListaDeNotas() {

    const dispatch = useDispatch();

    const notas = useSelector(state => state.novaNota.notas);

    return (
        <ul className="lista-notas">
            {notas.map((nota, index) => {
                return (
                    <li className="lista-notas_item" key={index}>

                        <CardNota 
                            indice={index}
                            apagarNota={() => dispatch( {type:'deleteNota', value: nota} )} 
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