import React from 'react';
import Map from '../components/map';
import FormAncienStage from '../components/formAncienStage';
import Stage from '../components/stage';

function AncienStage(){
    return (
        <>
        <div id="ancienStage">
            <div className="formAndStage">
                <FormAncienStage />
                <div className="stages">
                    <Stage/>
                    <Stage/>
                    <Stage/>
                    <Stage/>
                    <Stage/>
                    <Stage/>
                    <Stage/>
                    <Stage/>
                </div>
            </div>
            <Map />
        </div>
        </>
    )
}

export default AncienStage;