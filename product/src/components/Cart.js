import React, { Component } from 'react';
import './Cart.css';
import Form from './Form';

class Cart extends Component {

    handleClick = () => {
        document.querySelector("form").style.display = "flex"
    }

    render() {
        const a = this.props.list.map((item, index) => (
            <tr onClick={this.props.delete} key={index}>
                {item.options.map(element => (
                    <td key={element.value}>{element.name}</td>
                ))}
                <td >{item.amount}</td>
            </tr>
        ))
        return (
            <>
                <table>
                    <caption>Podsumowanie Zamówienia</caption>
                    <tbody>
                        <tr>
                            <td>Kolor</td>
                            <td>Wielkość</td>
                            <td>Cena</td>
                        </tr>
                        {a}
                        <tr>
                            <td>Do zapłaty</td>
                            <td>9899</td>
                        </tr>
                        <tr><button onClick={this.handleClick}>Kupuję</button></tr>
                    </tbody>
                </table>
                <Form list={this.props.list} />
            </>
        );
    }
}

export default Cart;
