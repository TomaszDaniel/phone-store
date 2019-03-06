import React from 'react';
import './ModelOption.css';
const ModelOption = (props) => {

    const optionsValues = props.value.map(item => (
        <button onClick={() => props.click(props.id, item.id, item.name, item.priceModifier)} key={item.id}>{item.name}</button>
    ))


    return (
        <>
            {optionsValues}
        </>
    );
}

export default ModelOption;