import React from 'react';
const ModelOption = (props) => {
    return (
        <>
            <button onClick={() => props.click(props.id, props.option, props.modifier)}>{props.name}</button>
        </>
    );
}

export default ModelOption;