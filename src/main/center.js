import React from "react";
import './center.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSortUp, faComment, faPhone, faCheck, faListCheck } from "@fortawesome/free-solid-svg-icons";
import {  statisticsData, statisticsChat, statisticsLigacoes, statisticsResolvidos, statisticsFechamentos } from "./main";
import {Process, showProcess} from "../components/process";


    function More(index) {
    const boxInfo = document.getElementById(`box${index}`);
    const boxText = document.getElementById(`info${index}`);
    const btMore = document.getElementById(`more${index}`);
    const btLess = document.getElementById(`less${index}`);
    const infoBox = document.getElementById(`infoBox${index}`);

    if (boxInfo && boxText && btMore) {

        infoBox.style.display = 'flex';
        infoBox.style.flexDirection = 'column';
        infoBox.style.alignItems = 'center';
        infoBox.style.justifyContents = 'center';
        infoBox.style.width = '100%';
        boxInfo.style.height = '300px';
        boxInfo.style.overflowY = 'scroll';
        boxText.style.visibility = 'hidden';
        btMore.style.visibility = 'hidden';
        btLess.style.visibility = 'visible';
    }
}

function Less(index) {
    const boxInfo = document.getElementById(`box${index}`);
    const boxText = document.getElementById(`info${index}`);
    const btLess = document.getElementById(`less${index}`);
    const btMore = document.getElementById(`more${index}`);
    const infoBox = document.getElementById(`infoBox${index}`);
    if (boxInfo && boxText && btMore) {
        boxText.style.visibility = 'visible';
        boxInfo.style.height = '140px';
        boxInfo.style.overflow = 'hidden';
        btLess.style.visibility = 'hidden';
        btMore.style.visibility = 'visible';
        infoBox.style.display = 'none';
    }
}

function Center(props) {
    return (
        <>
            <section className="main-center">
                <h1 id="titulo">Resultados atuais:</h1>
                <div className="box" >
                
                    <div className="box-info" id="box0">
                    <div className="main-icons"><FontAwesomeIcon icon={faComment} /></div>
                    <div className="box-data"  id="box-data">
                        <p id="info0" className="info">Atendimento via Chat</p>
                        <span className="qtd">{statisticsChat}</span>
                        <div className="more" onClick={() => More(0)} id="more0">Ver mais</div>

                        <div id="infoBox0">
                            <ul className="statistics">
                            <li className="statistics-itens"><p className="texto">Reclamações</p>{statisticsData.viaChat.reclamacoes}</li>
                            <li className="statistics-itens"><p className="texto">Dúvidas técnicas</p>{statisticsData.viaChat.duvidas}</li>
                            <li className="statistics-itens"><p className="texto">Desbloqueio</p>{statisticsData.viaChat.desbloqueios}</li>
                            <li className="statistics-itens"><p className="texto">Informações</p>{statisticsData.viaChat.informacoes}</li>
                            </ul>
                            <div className="show-less" onClick={() => Less(0)} id="less0"><FontAwesomeIcon icon={faSortUp} /></div>
                        </div>
                        </div>
                    </div>

                    <div className="box-info" id="box1">
                    <div className="main-icons"><FontAwesomeIcon icon={faPhone} /></div>
                    <div className="box-data">
                        <p id="info1" className="info">Atendimentos via ligação</p>
                        <span className="qtd">{statisticsLigacoes}</span>
                        <div className="more" onClick={() => More(1)} id="more1">Ver mais</div>

                        <div id="infoBox1">
                        <ul className="statistics">
                            <li className="statistics-itens"><p className="texto">Reclamações</p>{statisticsData.viaLigacoes.reclamacoes}</li>
                            <li className="statistics-itens"><p className="texto">Dúvidas técnicas</p>{statisticsData.viaLigacoes.duvidas}</li>
                            <li className="statistics-itens"><p className="texto">Desbloqueio</p>{statisticsData.viaLigacoes.desbloqueios}</li>
                            <li className="statistics-itens"><p className="texto">Informações</p>{statisticsData.viaLigacoes.informacoes}</li>
                            </ul>
                            <div className="show-less" onClick={() => Less(1)} id="less1"><FontAwesomeIcon icon={faSortUp} /></div>
                        </div>
                        </div>
                    </div>

                    <div className="box-info" id="box2">
                    <div className="main-icons"><FontAwesomeIcon icon={faCheck} /></div>
                    <div className="box-data">
                        <p id="info2" className="info">Processos resolvidos remotamente</p>
                        <span className="qtd">{statisticsResolvidos}</span>
                        <div className="more" onClick={() => More(2)} id="more2">Ver mais</div>

                        <div id="infoBox2" >
                        <ul className="statistics">
                            <li className="statistics-itens"><p className="texto">Sem internet</p>{statisticsData.resolvidosRemotamente.semInternet}</li>
                            <li className="statistics-itens"><p className="texto">Internet lenta</p>{statisticsData.resolvidosRemotamente.internetLenta}</li>
                            <li className="statistics-itens"><p className="texto">Internet caindo</p>{statisticsData.resolvidosRemotamente.internetCaindo}</li>
                            <li className="statistics-itens"><p className="texto">Mudança senha/nome</p>{statisticsData.resolvidosRemotamente.mudançaSenha}</li>
                            </ul>
                            <div className="show-less" onClick={() => Less(2)} id="less2"><FontAwesomeIcon icon={faSortUp} /></div>
                        </div>
                        </div>
                    </div>

                    <div className="box-info" id="box3">
                    <div className="main-icons"><FontAwesomeIcon icon={faListCheck} /></div>
                    <div className="box-data">
                        <p id="info3" className="info">Fechamentos</p>
                        <span className="qtd">{statisticsFechamentos}</span>
                        <div className="more" onClick={() => More(3)} id="more3">Ver mais</div>

                        <div id="infoBox3">
                        <ul className="statistics">
                            <li className="statistics-itens"><p className="texto">Reclamações</p>{statisticsData.fechamentos.reclamacoes}</li>
                            <li className="statistics-itens"><p className="texto">Adesões</p>{statisticsData.fechamentos.adesoes}</li>
                            <li className="statistics-itens"><p className="texto">Migrações</p>{statisticsData.fechamentos.migracoes}</li>
                            <li className="statistics-itens"><p className="texto">Mudanças de endereco</p>{statisticsData.fechamentos.mudancaEndereco}</li>
                            </ul>
                            <div className="show-less" onClick={() => Less(3)} id="less3"><FontAwesomeIcon icon={faSortUp} /></div>
                        </div>
                        </div>
                    </div>
                </div>

                <h1>Recentes:</h1>
                <div className="bottom">
                    <ul className="process">
                        <li className="process-list-top">
                            <p>CLIENTE</p>
                            <p>STATUS</p>
                            <p>PROTOCOLO</p>
                            <p>DATA</p>
                        </li>
                            <Process name="Arthur Scarcela" status="ANDAMENTO" tipo="CHAT"/>
                            <Process name="Sidnei Rodrigues" status="ANDAMENTO" tipo="CHAT" />
                            <Process name="rafael Sousa" status="ANDAMENTO"/>
                            <Process name="Diego melo" status="FINALIZADO"/>
                            <Process name="Mateus Couto" status="FINALIZADO" tipo="CHAT"/>
                            <Process name="Emilly Melo" status="FINALIZADO"/>
                            <Process name="Rafael andrade" status="FINALIZADO"/>
                            <Process name="Adriano Oliveira" status="FINALIZADO"/>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Center;