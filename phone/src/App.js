import React, { Component } from 'react';
import products from '../src/products.json';
import Product from './components/Product';
// import Form from './components/Form';
import './App.css';


class App extends Component {
  state = {
    productList: [],
  }
  handleClick = (products) => {
    console.log(products);

    products.options.forEach(product => {
      if (product.value === null) {
        alert('Nie wybrano wszystkich cech produktu')
      }
    })

    const array = this.state.productList
    array.push(products)

    this.setState({
      productList: array
    })

  }
  render() {
    console.log(this.state);

    const array = products.map(product => (
      <Product click={this.handleClick} key={product.id} product={product} />
    ))
    return (
      <>
        <header></header>
        <div className="main">
          {array}
        </div>
        {/* <Form list={this.state} /> */}
        <footer>Stopka</footer>
      </>
    );
  }
}

export default App;
