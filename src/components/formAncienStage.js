import React from 'react';

function FormAncienStage(){
    return (
        <div className="formContainer">
            <h2> Préférences </h2>
            <form className='formAncienStage'>
                <label htmlFor="lieu"/>
                <input id="lieu" placeholder="Lieu"/>
                <label htmlFor="promotion"/>
                <input id="promotion" placeholder="Promotion"/>
                <label htmlFor="type"/>
                <input id="type" placeholder="Type"/>
                <label htmlFor="remuneration"/>
                <input id="remuneration" placeholder="Rémunération"/>
                <label htmlFor="domaine"/>
                <input id="domaine" placeholder="Domaine"/>
                <label htmlFor="specialite"/>
                <input id="specialite" placeholder="Spécialité"/>
            </form>
            <button className="button ajoutStageButton">Ajouter un Stage</button>
        </div>
    )
}

export default FormAncienStage;