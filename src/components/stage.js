import React from 'react';

function Stage(){
    return (
        <div className="stage">
            <div className="specialite"><p>Spécialité</p></div>
            <div className="stageContentContainer">
                <div className="titles" >
                    <h3> Sujet de Stage </h3>
                    <h4>Type de Stage</h4>
                </div>
                <ul className="listInformations">
                    <li> Nom d'organisme d'accueil : </li>
                    <li> Type d'organisme d'accueil : </li>
                    <li> Date de début : </li>
                    <li> Date de Fin : </li>
                    <li> Rémunération : </li>
                </ul>
            </div>
        </div>
    );
}

export default Stage; 