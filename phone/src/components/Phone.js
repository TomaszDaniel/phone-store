import React, { Component } from 'react';
import PhoneOption from './PhoneOption';
import './Phone.css';


class Phone extends Component {
    state = {
        product: {
            id: this.props.product.id,
            options: [
                {
                    id: null,
                    value: null
                },
                {
                    id: null,
                    value: null
                }
            ],
            amount: this.props.product.price,
        },
        colorName: "-----",
        capacityName: "-----"
    }

    handleClick = (id, option, modifier, name) => {

        const newProduct = this.state.product
        if (modifier > 0) {
            newProduct.amount = parseInt((this.props.product.price * modifier) / 100 + this.props.product.price)
        } else {
            newProduct.amount = parseInt(this.props.product.price * 1)
        }
        if (option === 100) {
            const newOptions = this.state.product.options[0]
            newOptions.id = option
            newOptions.value = id
            this.setState({
                options: newOptions,
                amount: newProduct,
                colorName: name
            })
        } else if (option === 101) {
            const newOptions = this.state.product.options[1]
            newOptions.id = option
            newOptions.value = id
            this.setState({
                options: newOptions,
                amount: newProduct,
                capacityName: name
            })
        }
    }

    render() {
        const { name, price, oldPrice, options } = this.props.product

        return (
            <>
                <div className="phone">
                    <h1>{name}</h1>
                    <h2>{price}</h2>
                    <h6>{oldPrice}</h6>
                    <PhoneOption click={this.handleClick} option={options} colorName={this.state.colorName} capacityName={this.state.capacityName} />
                    <button onClick={() => this.props.click(this.state)}>Dodaj do koszyka</button>
                </div>
            </>
        );
    }
}

export default Phone;