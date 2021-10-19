import React from 'react';
import Map from '../components/map';
import FormAncienStage from '../components/formAncienStage';
import Stage from '../components/stage';

function AncienStage(){

    let listAncienStage = [
        {
            sujet: "Sujet 1",
            type: "Mission",
            ecole: "ACO",
            cursus: "Agronome",
            lieu: "France",
            promotion: "170",
            domaine: "entreprise",
            specialite: "POMAR",
            remuneration: false,
        },
        {
            sujet: "Sujet 2",
            type: "Mission",
            ecole: "ACO",
            cursus: "Agronome",
            lieu: "Europe",
            promotion: "169",
            domaine: "entreprise",
            specialite: "Agro-éco",
            remuneration: false,
        },
        {
            sujet: "Sujet 3",
            type: "FLE",
            ecole: "ACO",
            cursus: "Agronome",
            lieu: "Europe",
            promotion: "170",
            domaine: "entreprise",
            specialite: "POMAR",
            remuneration: false,
        },
        {
            sujet: "Sujet 4",
            type: "Mission",
            ecole: "ACO",
            cursus: "Agronome",
            lieu: "France",
            promotion: "168",
            domaine: "entreprise",
            specialite: "PA",
            remuneration: false,
        },
        {
            sujet: "Sujet 5",
            type: "FLE",
            ecole: "ACO",
            cursus: "Agronome",
            lieu: "France",
            promotion: "167",
            domaine: "recherche",
            specialite: "BMC",
            remuneration: true,
        },
    ];

    let filters = ["ecole", "type", "cursus", "lieu", "promotion", "domaine", "specialite", "remuneration"];

    let filter = {
        ecole: ["ACO", "MSA", "ASD"],
        type: ["FLE", "Mission"], 
        cursus: ["Agronome"],
        lieu: ["France", "Europe"],
        promotion: ["167", "168", "169", "170"],
        domaine: ["entreprise", "recherche"],
        specialite: ["POMAR", "PA", "BMC"], 
        remuneration: [true, false],
    }

    return (
        <>
        <div id="ancienStage">
            <div className="formAndStage">
                <FormAncienStage />
                <div className="stages">
                    {listAncienStage.filter((stage) => {
                        console.log(stage);
                        let show = true; 
                        filters.forEach((f) => {
                            console.log("filtre :",f);
                            console.log("filter[f]", filter[f]);
                            console.log("stage[f]", stage[f]);
                            if(!filter[f].includes(stage[f])){
                                show = false
                            }
                        })
                        console.log("show : ", show);
                        if(show){
                            return stage;
                        }  
                    }).map((stage, index) => {
                        return <Stage key={index} sujet={stage.sujet} type={stage.type} specialite={stage.specialite} remuneration={stage.remuneration}/>
                    })}
                </div>
            </div>
            <Map />
        </div>
        </>
    )
}

export default AncienStage;