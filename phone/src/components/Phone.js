import React, { Component } from 'react';
import PhoneOption from './PhoneOption';

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
            amount: this.props.product.price
        }
    }

    handleClick = (id, option, modifier) => {
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
                amount: newProduct
            })
        } else if (option === 101) {
            const newOptions = this.state.product.options[1]
            newOptions.id = option
            newOptions.value = id
            this.setState({
                options: newOptions,
                amount: newProduct
            })
        }
    }

    render() {
        const { name, price, oldPrice, options } = this.props.product

        return (
            <>
                <p>{name}</p>
                <p>{price}</p>
                <p>{oldPrice}</p>
                <PhoneOption click={this.handleClick} option={options} />
                <button onClick={() => this.props.click(this.state)}>DoDAJ Do koszyka</button>
            </>
        );
    }
}

export default Phone;