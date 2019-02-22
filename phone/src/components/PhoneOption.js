import React from 'react';
import ModelOption from './ModelOption';
import './PhoneOption.css';
const PhoneOption = (props) => {

    const item = props.option.map(opt => (
        <div key={opt.id}>
            <div key={opt.id}><h3>{opt.name}</h3></div>
            <div className="buttons">{opt.values.map(value => (
                <ModelOption key={value.id} option={opt.id} click={props.click} name={value.name} id={value.id} modifier={value.priceModifier} />
            ))}</div>
        </div>
    ))

    return (
        <>
            {item}
            <h5>wybrane przez ciebie opcje to:</h5>
            <p>{props.colorName}</p>
            <p>{props.capacityName}</p>
        </>
    );
}

export default PhoneOption;