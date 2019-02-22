import React, { Component } from 'react';
import products from '../src/products.json';
import Phone from './components/Phone';
import Form from './components/Form';
import './App.css';

class App extends Component {
  handleClick = (products) => {
    const myArray = products.product.options.filter(option => option.id === null)
    if (myArray.length !== 0) {
      alert('Zanim dodasz produkt do koszyka, musisz ustalić jego cechy')
    } else {
      console.log(products.product);
    }

  }
  render() {
    const array = products.map(product => (
      <Phone click={this.handleClick} key={product.id} product={product} />
    ))
    return (
      <div>
        {array}
        <div>Koszyk
          <h2>Podsumowanie zamówienia</h2>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
