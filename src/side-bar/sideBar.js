import React from "react";
import './sideBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faComputer, faFileCircleCheck, faListCheck, faPhone, faRightFromBracket, faSquareCheck, faSquarePhone } from "@fortawesome/free-solid-svg-icons";

function SideBar(props){
    return(
        <>

        <div className="sideBar">
            <div className="user">
                <div className="user-img" id="userImg"></div>
                <h1 id="user">SUPERVISOR</h1>
            </div>

            <div className="bar-options">
                <ul>
                    <li id="space"></li>
                    <li className="no-selected"><FontAwesomeIcon icon={faSquarePhone}/>Selecionar setor</li>
                    <li className="selected"><FontAwesomeIcon icon={faComputer}/>Estatisticas</li>
                    <li className="no-selected"><FontAwesomeIcon icon={faSquareCheck}/>Aproveitamento</li>
                    <li className="no-selected"><FontAwesomeIcon icon={faListCheck}/>Gerenciar rotinas</li>
                    <li className="no-selected"><FontAwesomeIcon icon={faClipboardCheck}/>Check list mensal </li>
                </ul>
            </div>

            <div className="logout">
                <button className="bt-logout"><FontAwesomeIcon icon={faRightFromBracket}/>Deslogar</button>
            </div>
        </div>
        
        </>
    )
}


export default SideBar;