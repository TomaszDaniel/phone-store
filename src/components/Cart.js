import React, { Component } from 'react';
import './Cart.css';
import Form from './Form';

class Cart extends Component {

    handleClick = () => {
        document.querySelector("form").style.display = "flex"
    }

    render() {
        const orderList = this.props.list.map((item, index) => (
            <tr onClick={this.props.delete} key={index}>
                {item.options.map(element => (
                    <td key={element.value}>{element.name}</td>
                ))}
                <td >{item.amount}</td>
            </tr>
        ))
        console.log(this.props.list);


        let payment = 0;
        this.props.list.forEach(item => (
            payment += parseFloat(item.amount)
        ))
        return (
            <>
                <div className="pictureCart">
                    <h1 className="orderSummary">Podsumowanie zamówienia</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>Kolor</td>
                                <td>Wielkość</td>
                                <td>Cena</td>
                            </tr>
                            {orderList}
                        </tbody>
                    </table>
                    <div className="payment">
                        <p>Do zapłaty <span>{payment.toFixed(2)} PLN</span></p>
                        <button className="btnBuy" onClick={this.handleClick}>Kupuję</button>
                    </div>
                    <Form list={this.props.list} />
                </div>
            </>
        );
    }
}

export default Cart;
