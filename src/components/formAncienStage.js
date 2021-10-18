import React from 'react';

function FormAncienStage(){
    return (
        <div className="formContainer">
            <h2> Préférences </h2>
            <form className='formAncienStage'>
                <label htmlFor="ecole"/>
                <select id="ecole" placeholder="Ecole">
                    <option value="ecole"> Ecole </option>
                    <option value="aco">Agrocampus Ouest</option>
                    <option value="msa">Montpellier SupAgro</option>
                    <option value="asd">AgroSup Dijon</option>
                </select>
                <label htmlFor="cursus"/>
                <select id="cursus" placeholder="Cursus">
                    <option value="cursus">Cursus</option>
                    <option value="agronome">Agronome</option>
                    <option value="agroalim">Agro-Alimentaire</option>
                </select>
                <label htmlFor="lieu"/>
                <select id="lieu" placeholder="Lieu"> 
                    <option value="lieu">Lieu</option>
                    <option value="france">France</option>
                    <option value="europe">Europe</option>
                </select>
                <label htmlFor="promotion"/>
                <select id="promotion" placeholder="Promotion"> 
                    <option value="promotion">Promotion</option>
                    <option value="167">167</option>
                    <option value="168">168</option>
                    <option value="169">169</option>
                    <option value="170">170</option>
                    <option value="171">171</option>
                </select>
                <label htmlFor="type"/>
                <select id="type" placeholder="Type"> 
                    <option value="type">Type de Stage</option>
                    <option value="fle">FLE</option>
                    <option value="mission">Mission</option>
                </select>
                <label htmlFor="domaine"/>
                <select id="domaine" placeholder="Domaine">
                    <option value="domaine">Domaine</option>
                    <option value="recherche">Recherche</option>
                    <option value="entreprise">Entreprise</option>
                </select>
                <label htmlFor="specialite"/>
                <select id="specialite" placeholder="Spécialité">
                    <option value="specialite">Spécialité</option>
                </select>
                <label htmlFor="remuneration"/>
                <select id="remuneration">
                    <option value="remuneration">Rémunération</option>
                </select>
            </form>
            <button className="button ajoutStageButton">Ajouter un Stage</button>
        </div>
    )
}

export default FormAncienStage;