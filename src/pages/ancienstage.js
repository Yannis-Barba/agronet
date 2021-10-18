import React from 'react';
import Map from '../components/map';
import FormAncienStage from '../components/formAncienStage';

function AncienStage(){
    return (
        <>
        <h1>Ancien Stage</h1>
        <div id="ancienStage">

            <Map />
            <FormAncienStage />
        </div>
        </>
    )
}

export default AncienStage;