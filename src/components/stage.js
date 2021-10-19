import React from 'react';

function Stage({sujet, ecole, type, cursus, lieu, promotion, domaine, specialite, remuneration}){
    return (
        <div className="stage">
            <div className="specialite"><p>{specialite}</p></div>
            <div className="stageContentContainer">
                <div className="titles" >
                    <h3> {sujet}</h3>
                    <h4>{type}</h4>
                </div>
                <ul className="listInformations">
                    <li> Nom d'organisme d'accueil : </li>
                    <li> Type d'organisme d'accueil : </li>
                    <li> Date de début : </li>
                    <li> Date de Fin : </li>
                    <li> Rémunération : {remuneration ? "OUI" : "NON"} </li>
                </ul>
            </div>
        </div>
    );
}

export default Stage; 