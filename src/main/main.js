import React from "react";
import './main.css';
import Cards from "../components/cards";
import { faCheck, faComment, faListCheck, faPhone, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarRating = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= fullStars; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }

    if (hasHalfStar) {
        stars.push(<FontAwesomeIcon icon={faStarHalf} key="half" />);
    }

    while (stars.length < 2) {
        stars.push(<FontAwesomeIcon icon={faStar} key={stars.length + 1} />);
    }

    return <div>{stars}</div>;
};





const resultadosAnteriores = {
    title: 'Resultados mês anterior :',
    atendimentosviachat: 300,
    atendimentosViaLigacoes: 80,
    ResolvidosRemotamente: 500,
    Fechamentos: 600,
}

const statisticsData = {
    viaChat: {
        reclamacoes: 200,
        duvidas: 100,
        desbloqueios: 10,
        informacoes: 90,
    },
    viaLigacoes: {
        reclamacoes: 30,
        duvidas: 10,
        desbloqueios: 30,
        informacoes: 50,
    },
    resolvidosRemotamente: {
        semInternet: 200,
        internetLenta: 300,
        internetCaindo: 200,
        mudançaSenha: 100,
    },
    fechamentos: {
        reclamacoes: 500,
        adesoes: 300,
        migracoes: 100,
        mudancaEndereco: 100,
    },
    rate: {
        notaChat: 4.5,
        notaLigacoes: 4.5,
        notaFechamentos: 4.5,
        notaResolvidos: 5,
        get notaGeral() {
            return (this.notaChat + this.notaLigacoes + this.notaFechamentos + this.notaResolvidos) / 4;
        },
    },
}

// Função para somar os valores
function somarValores(obj) {
    let soma = 0;

    // Percorre os objetos
    for (const key in obj) {
        if (key !== 'rate') {
            // Adiciona os valores ao total
            soma += Object.values(obj[key]).reduce((acc, value) => acc + value, 0);
        }
    }

    return soma;
}

// Chama a função e obtém a soma
const totalSemNotas = somarValores(statisticsData);

console.log(totalSemNotas);
const statisticsChat = Object.values(statisticsData.viaChat).reduce((index, value) => index + value, 0);
const statisticsLigacoes = Object.values(statisticsData.viaLigacoes).reduce((index, value) => index + value, 0);
const statisticsResolvidos = Object.values(statisticsData.resolvidosRemotamente).reduce((index, value) => index + value, 0);
const statisticsFechamentos = Object.values(statisticsData.fechamentos).reduce((index, value) => index + value, 0);
function Main() {


    return (
        <>
            <div className="main-top">

                <div id="r-title" className="title">{resultadosAnteriores.title}</div>
                <div className="resultados">
                    <span className="user-main">
                        <Cards nome="Sidney Rodigues" />
                    </span>
                    <span className="results">
                        <div className="main-icons"><FontAwesomeIcon icon={faComment} /></div>
                        <div className="main-results">

                            <p className="texto">Atendimentos via Chat</p>
                            {resultadosAnteriores.atendimentosviachat}
                        </div>
                    </span>

                    <span className="results" >
                        <div className="main-icons"><FontAwesomeIcon icon={faPhone} /></div>

                        <div className="main-results">
                            <p className="texto">Atendimentos via ligação</p>
                            {resultadosAnteriores.atendimentosViaLigacoes}
                        </div>
                    </span>
                    <span className="results" >
                        <div className="main-icons"><FontAwesomeIcon icon={faCheck} /></div>

                        <div className="main-results">
                            <p className="texto">Resolvidos remotamente</p>
                            {resultadosAnteriores.ResolvidosRemotamente}
                        </div>
                    </span>
                    <span className="results" >
                        <div className="main-icons"><FontAwesomeIcon icon={faListCheck} /></div>

                        <div className="main-results">
                            <p className="texto">Fechamentos</p >
                            {resultadosAnteriores.Fechamentos}
                        </div>
                    </span>
                </div>
            </div>

        </>
    );
}

export { Main, resultadosAnteriores, statisticsData, statisticsChat, statisticsLigacoes, statisticsResolvidos, statisticsFechamentos, StarRating, totalSemNotas };