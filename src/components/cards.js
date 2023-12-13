import React from "react";
import './components.css';


function Cards(props) {
    const colaboradores = [
        { nome: props.nome, background: props.background},
    ];
    const indexDesejado = 0;
    return (
        <>
            {colaboradores.map((colaborador, index) => (
                index === indexDesejado &&(
                <div key={index} className="card">
                    <div className="card-img">
                    </div>
                    <p className="colaborador">{colaborador.nome}</p>
                </div>
                )
            ))}

        </>
    );
}

export default Cards;