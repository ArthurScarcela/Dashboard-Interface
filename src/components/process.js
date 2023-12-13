import React from "react";
import './components.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faComment, faPhone } from "@fortawesome/free-solid-svg-icons";

function Process(props){

    const processos = [
            {cliente: props.name , status: props.status, data:'04-12-2023', tipo: props.tipo},
    ]
    
    function getProtocol(min, max){
         return Math.floor(Math.random() * (max - min + 1)) + min

    }

   

    let protocolo = (getProtocol(20000, 30000))
    return(
        <>
        
            {processos.map((processo, index) => (
                <li className="process-list" id="process-list">

                <p key={index} className="clienteName">
                    {processo.cliente}
                </p>

                <p key={index} style={{backgroundColor: processo.status === 'FINALIZADO'? 'rgb(39, 94, 94)' : '#916d07', color: processo.status === 'FINALIZADO' ?
                '#f2f2f2' : '#ffffff'}} className="status">
                     {processo.status}
                </p>
                <p className="protocolo">#{protocolo};</p>
                <p key={index} className="data">
                     {processo.data}
                </p>
                <p className="tipo">
                        {processo.tipo === 'CHAT' ?
                            <FontAwesomeIcon icon={faComment} />
                             :
                            <FontAwesomeIcon icon={faPhone} />
                        }
                    </p>
                </li>
            ))}
            
        </>
    )
}

function showProcess(){
    const protocol = document.getElementById('process-list');
    protocol.className = 'protocolShow';
    protocol.style.height = '80px';
}

export {Process, showProcess};