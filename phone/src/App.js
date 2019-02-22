import React, { Component } from 'react';
import products from '../src/products.json';
import Phone from './components/Phone';
import Form from './components/Form';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';


class App extends Component {
  state = {
    productList: [],
    productColor: [],
    productCapacity: [],
  }
  handleClick = (products) => {
    const myArray = products.product.options.filter(option => option.id === null)
    if (myArray.length !== 0) {
      alert('Zanim dodasz produkt do koszyka, musisz ustalić jego cechy')
    } else {
      this.setState({
        productList: this.state.productList.concat(products.product),
        productColor: this.state.productColor.concat(products.colorName),
        productCapacity: this.state.productCapacity.concat(products.capacityName)
      })
    }

  }
  render() {
    const array = products.map(product => (
      <Phone click={this.handleClick} key={product.id} product={product} />
    ))
    return (
      <>
        <header></header>
        <div className="main">
          {array}
        </div>
        <Form list={this.state} />
        <footer>Stopka</footer>
      </>
    );
  }
}

export default App;
