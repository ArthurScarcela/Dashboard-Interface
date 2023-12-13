
import './rightSidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMoon, faRotateRight, faSun, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { StarRating, statisticsData, totalSemNotas } from "../main/main";
import Cards from '../components/cards';
import { React, useState } from 'react';

function RightSideBar() {

    function reload() {
        window.location.reload();
    }

    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
        nightMode(!isChecked)
    }

    function nightMode(isNightMode){
        const app = document.getElementById('app');
        const boxes = document.getElementsByClassName('box-info');
        const process = document.getElementsByClassName('process');
        const clientName = document.getElementsByClassName('clienteName');
        const top = document.getElementsByClassName('main-top');
        const sideBar = document.getElementsByClassName('right-side-bar');
        if(isNightMode){
            app.style.backgroundColor = '#555661';
            for(let i = 0; i < boxes.length; i++){
                boxes[i].style.backgroundColor = '#343541';
            }
            process[0].style.backgroundColor = '#343541';
            process[0].style.color = '#ffffff'
            for(let i = 0; i < clientName.length; i++){
                clientName[i].style.color = 'rgb(78, 201, 201)';
            }
            top[0].style.backgroundColor = '#343541';
            sideBar[0].style.backgroundColor = '#343541';
        }else{
            app.style.backgroundColor = '';
            for(let i = 0; i < boxes.length; i++){
                boxes[i].style.backgroundColor = '';
            }
            process[0].style.backgroundColor = '';
            process[0].style.color = '';
            for(let i = 0; i < clientName.length; i++){
                clientName[i].style.color = '';
            }
            top[0].style.backgroundColor = '';
            sideBar[0].style.backgroundColor = '';
        }
    }

    return (
        <>
            <section className="right-side-bar">
                <div className="menu">
                    <div>
                        <button className="bt-menu" onClick={() => reload()}><FontAwesomeIcon icon={faHome} /></button>
                        <button className="bt-menu" onClick={() => reload()}><FontAwesomeIcon icon={faRotateRight} /></button>
                    </div>

                    <div className="nightMode">
                        <input type="checkbox" id="chk" checked={isChecked} onChange={handleCheckboxChange} />
                        <label for="chk" className="switch"><span className="slider"></span></label>

                        <div id='check-mode' className={isChecked ? 'moon' : 'sun'}>
                        {isChecked ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                    </div>
                    </div>

                </div>
                <h3>Notas:</h3>
                <div className="colaborador-card">

                    <div>
                        <div className="ratingGeral">
                            <FontAwesomeIcon icon={faTrophy} />
                            <StarRating rating={statisticsData.rate.notaGeral} />
                        </div>
                    </div>
                </div>

                <section className="main-bottom">

                    <div className="ratings">
                        <div className="ratingChat">
                            <p>Redimento total:</p>
                            <div>{totalSemNotas}</div>
                        </div>
                        <div className="ratingChat">
                            <FontAwesomeIcon icon={faTrophy} />
                            <p className="texto" >Nota Chat:</p>
                            <StarRating rating={statisticsData.rate.notaChat} />
                        </div>
                        <div className="ratingLigacoes">
                            <FontAwesomeIcon icon={faTrophy} />
                            <p className="texto">Nota Ligações:</p>
                            <StarRating rating={statisticsData.rate.notaLigacoes} />
                        </div>
                        <div className="ratingResolvidos">
                            <FontAwesomeIcon icon={faTrophy} />
                            <p className="texto">Nota Resolvidos:</p>
                            <StarRating rating={statisticsData.rate.notaResolvidos} />
                        </div>
                        <div className="ratingFechamentos">
                            <FontAwesomeIcon icon={faTrophy} />
                            <p className="texto">Nota Fechamentos:</p>
                            <StarRating rating={statisticsData.rate.notaFechamentos} />
                        </div>

                    </div>

                </section>
                <div className='others'>
                    <h3>Colaboradores: </h3>

                    <div className='card-side'><Cards nome='Antonio Silva' /></div>
                    <div className='card-side'><Cards nome='Ricardo Castro' /></div>
                    <div className='card-side'><Cards nome='Julio Cesar' /></div>
                </div>
            </section>
        </>
    )
}

export default RightSideBar;