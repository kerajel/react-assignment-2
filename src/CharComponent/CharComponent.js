import React from 'react';

const charComponent = (props) => {

    const style = {
        color: 'red',
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
        width: '16px'
    }

    return (
        <div className='CharComponent' style={style} onClick={props.click}>
            <p>{props.text}</p>
        </div>
    )
}

export default charComponent;