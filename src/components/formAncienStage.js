import React from 'react';

function FormAncienStage(){
    return (
        <div className="formContainer">
            <form className='formAncienStage'>
                <label htmlFor="lieu"/>
                <input id="lieu" placeholder="lieu"/>
                <label htmlFor="promotion"/>
                <input id="promotion" placeholder="promotion"/>
                <label htmlFor="type"/>
                <input id="type" placeholder="type"/>

            </form>
        </div>
    )
}

export default FormAncienStage;