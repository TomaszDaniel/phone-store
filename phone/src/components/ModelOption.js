import React from 'react';
import './ModelOption.css';
const ModelOption = (props) => {
    return (
        <>
            <button onClick={() => props.click(props.id, props.option, props.modifier, props.name)}>{props.name}</button>
        </>
    );
}

export default ModelOption;