import React, { Component } from 'react';
import ProductOption from './ProductOption';
import './Product.css';


class Product extends Component {
    state = {
        id: this.props.product.id,
        options: [],
        amount: 0,
    }

    componentDidMount() {
        const array = this.state.options
        const addInitialId = (id, array) => {
            const obj = {
                id: id,
                value: null,
                name: null,
                modifier: 0
            }
            array.push(obj)
        }

        this.props.product.options.map(item => (
            addInitialId(item.id, array)
        ))

        this.setState({
            options: array
        })
    }
    handleClick = (id, value, name, modifier) => {
        const array = this.state.options
        const index = array.findIndex(element => element.id === id)
        array[index].name = name
        array[index].value = value
        array[index].modifier = modifier
        let amount = 0
        array.forEach(element => (
            amount += element.modifier
        ))
        this.setState({
            options: array,
            amount: (this.props.product.price + this.props.product.price * amount / 100).toFixed(2)
        })
    }

    render() {
        const { name, price, oldPrice, options } = this.props.product
        const list = this.state.options.map(element => (
            <li key={element.id}>{element.name}</li>
        ))
        return (
            <>
                <div className="phone">
                    <h1>{name}</h1>
                    <h2>{price}</h2>
                    <h6>{oldPrice}</h6>
                    <ProductOption click={this.handleClick} option={options} />
                    <ul>Twoje opcje to:
                        {list}
                    </ul>
                    <p>{this.state.amount}</p>
                    <button onClick={() => this.props.click(this.state)}>Dodaj do koszyka</button>
                </div>
            </>
        );
    }
}

export default Product;