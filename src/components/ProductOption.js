import React from 'react';
import ModelOption from './ModelOption';
import './ProductOption.css';


const ProductOption = (props) => {

    const optionList = props.option.map((item, index) => (
        <div key={index}>
            <p >{item.name}</p>
            <div className="option">
                <ModelOption value={item.values} id={item.id} click={props.click} />
            </div>
        </div>
    ))


    return (
        <>
            {optionList}
        </>
    );
}

export default ProductOption;