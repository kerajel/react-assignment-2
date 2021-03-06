import React from 'react';

const validation = (props) => {
    return (
        <div className='BaseBlock'>
            <h1>I'm a validator</h1>
            <p>{props.valText}</p>
        </div>
    )
}

export default validation;