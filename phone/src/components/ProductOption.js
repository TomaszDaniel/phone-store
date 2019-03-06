import React from 'react';
import ModelOption from './ModelOption';
import './ProductOption.css';


const ProductOption = (props) => {

    const optionList = props.option.map((item, index) => (
        <div key={index}>
            <p >{item.name}</p>
            <ModelOption value={item.values} id={item.id} click={props.click} />
        </div>
    ))


    return (
        <>
            {optionList}
        </>
    );
}

export default ProductOption;