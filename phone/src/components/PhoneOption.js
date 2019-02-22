import React from 'react';
import ModelOption from './ModelOption';
const PhoneOption = (props) => {



    const item = props.option.map(opt => (
        <div key={opt.id}>{opt.name}{opt.values.map(value => (
            <ModelOption key={value.id} option={opt.id} click={props.click} name={value.name} id={value.id} modifier={value.priceModifier} />
        ))}</div>
    ))

    return (
        <>
            {item}
        </>
    );
}

export default PhoneOption;