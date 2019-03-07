import React from 'react';
import './ProductsPage.css';
import Product from './Product';

const ProductsPage = (props) => {
    const array = props.products.map(product => (
        <Product click={props.click} key={product.id} product={product} />
    ))

    return (
        <>
            {< div className="main" >
                <div className="wrapper">
                    {array}
                </div>
            </div >}
        </>
    );
}

export default ProductsPage;
