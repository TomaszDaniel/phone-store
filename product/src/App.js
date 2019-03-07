import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import products from '../src/products.json';
import ProductsPage from './components/ProductsPage';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';


class App extends Component {
  state = {
    productList: [],
  }

  handleClick = (products) => {
    const array = this.state.productList
    const secondArray = products.options.filter(item => item.value === null)
    if (secondArray.length === 0) {
      array.push(products)
    } else {
      alert('Nie wybrano wszystkich cech produktu')
    }
    this.setState({
      productList: array
    })
  }

  // componentDidUpdate() {
  //   const cart = document.querySelector(".cart")
  //   if (this.state.productList.length > 0) {
  //     cart.classList.add("red")
  //   }
  // }

  // handleDelete = () => {
  //   const array = this.state.productList
  //   array.splice(0, 1)
  //   this.setState({
  //     productList: array
  //   })
  // }

  render() {
    return (
      <>
        <BrowserRouter >
          <div>
            <header></header>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Produkty</Link>
              </li>
              <li>
                <Link className="cart" to="/cart">Koszyk <sup>{this.state.productList.length}</sup></Link>
              </li>
            </ul>
            <Route exact path='/' component={Home} />
            <Route path='/products' render={(props) => <ProductsPage {...props} products={products} click={this.handleClick} />} />
            <Route path='/cart' render={(props) => <Cart {...props} list={this.state.productList} delete={this.handleDelete} />} />
            <footer>Stopka</footer>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
