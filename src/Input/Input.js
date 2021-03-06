import React from 'react';

const input = (props) => {
    return (
        <div className='BaseBlock'>
            <h1>I'm an input</h1>
            <input type="text" onChange={props.changed} value={props.input}/>
            <p>Current length is: {props.length}</p>
        </div>
    )
}

export default input;