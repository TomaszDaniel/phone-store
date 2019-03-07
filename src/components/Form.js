import React, { Component } from 'react';
import './Form.css';
class Form extends Component {
    state = {
        name: "",
        surename: "",
        email: "",
        street: "",
        houseNumber: "",
        city: "",
        zipcode: "",
        message: "",
        errors: {
            name: false,
            surename: false,
            email: false,
            street: false,
            houseNumber: false,
            city: false,
            zipcode: false,
            cart: false
        }
    }

    messages = {
        name_incorrect: 'Imię musi być dłuższe niż 2 znaki i nie może zawierać spacji',
        surename_incorrect: 'Nazwisko musi być dłuższe niż 2 znaki i nie może zawierać spacji',
        email_incorrect: 'Brak @ w emailu',
        street_incorrect: 'Nazwa ulicy musi mieć co najmniej 3 znaki',
        houseNumber_incorrect: 'Max 3 cyfry',
        city_incorrect: 'Nazwa musi być dłuższa niż 2 znaki',
        zipcode_incorrect: 'Prawidłowa forma **-***',
        cart_incorrect: 'Nie wybrałeś żadnego produktu'
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const sendState = this.state
        const key = "errors"
        delete sendState[key]

        const validation = this.formValidation()

        if (validation.correct) {
            console.log('wyslano');
            const orderSend = {
                user: sendState,
                product: this.props.list
            }
            console.log(orderSend);
            this.setState({
                name: "",
                surename: "",
                email: "",
                street: "",
                houseNumber: "",
                city: "",
                zipcode: "",
                message: "Twoje zamówienie zostało poprawnie złożone",
                errors: {
                    name: false,
                    surname: false,
                    email: false,
                    street: false,
                    houseNumber: false,
                    city: false,
                    zipcode: false,
                    cart: false
                }
            })
            document.querySelector("form").style.display = "none"
        } else {
            this.setState({
                errors: {
                    name: !validation.name,
                    surename: !validation.surename,
                    email: !validation.email,
                    street: !validation.street,
                    houseNumber: !validation.houseNumber,
                    city: !validation.city,
                    zipcode: !validation.zipcode,
                    cart: !validation.cart,
                }
            })
        }
    }

    formValidation() {
        let correct = false;
        let name = false;
        let surename = false;
        let email = false;
        let street = false;
        let houseNumber = false;
        let city = false;
        let zipcode = false;
        let cart = false;

        if (this.state.name.length > 2 && this.state.name.indexOf(' ') === -1) {
            name = true;
        }

        if (this.state.surename.length > 2 && this.state.surename.indexOf(' ') === -1) {
            surename = true;
        }

        if (this.state.email.indexOf('@') !== -1) {
            email = true;
        }

        if (this.state.street.length > 2) {
            street = true;
        }

        if (this.state.houseNumber.length < 4 && this.state.houseNumber.length > 0) {
            houseNumber = true
        }

        if (this.state.city.length > 2) {
            city = true
        }

        if (this.state.zipcode.length === 6 && this.state.zipcode.indexOf('-') === 2) {
            zipcode = true
        }

        if (this.props.list.length > 0) {
            cart = true
        }

        if (name && surename && email && street && houseNumber && city && zipcode && cart) {
            correct = true
        }

        return ({
            correct,
            name,
            surename,
            email,
            street,
            houseNumber,
            city,
            zipcode,
            cart
        })
    }

    componentDidUpdate() {
        if (this.state.message !== '') {
            setTimeout(() => this.setState({
                message: ''
            }), 3000)
        }
    }
    render() {

        return (
            <>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="name">Imię </label>
                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} placeholder={'imię'} />
                    {this.state.errors.name && <sub>{this.messages.name_incorrect}</sub>}

                    <label htmlFor="surename"> Nazwisko </label>
                    <input type="text" id="surename" name="surename" value={this.state.surname} onChange={this.handleChange} placeholder={"nazwisko"} />
                    {this.state.errors.surename && <sub>{this.messages.surename_incorrect}</sub>}

                    <label htmlFor="email"> Email </label>
                    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder={'email'} />
                    {this.state.errors.email && <sub>{this.messages.email_incorrect}</sub>}

                    <label htmlFor="street"> Ulica </label>
                    <input type="text" id="street" name="street" value={this.state.street} onChange={this.handleChange} placeholder={'ulica'} />
                    {this.state.errors.street && <sub>{this.messages.street_incorrect}</sub>}
                    <label htmlFor="houseNumber"> Numer domu</label>
                    <input type="text" id="houseNumber" name="houseNumber" value={this.state.houseNumber} onChange={this.handleChange} placeholder={'numerdomu'} />
                    {this.state.errors.houseNumber && <sub>{this.messages.houseNumber_incorrect}</sub>}
                    <label htmlFor="city">  Miasto </label>
                    <input type="text" id="city" name="city" value={this.state.city} onChange={this.handleChange} placeholder={'miasto'} />
                    {this.state.errors.city && <sub>{this.messages.city_incorrect}</sub>}
                    <label htmlFor="zipcode"> Kod pocztowy </label>
                    <input type="text" id="zipcode" name="zipcode" value={this.state.zipcode} onChange={this.handleChange} placeholder={'kodpocztowy'} />
                    {this.state.errors.zipcode && <sub>{this.messages.zipcode_incorrect}</sub>}
                    {this.state.errors.cart && <sub>{this.messages.cart_incorrect}</sub>}
                    <button className="formBtn" >Zapłać</button>
                </form>
                {this.state.message && alert(this.state.message)}
            </>
        );
    }
}

export default Form;