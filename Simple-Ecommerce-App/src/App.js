import React, { Component } from "react";
import "./App.css";

class Product extends Component {
  constructor() {
    super();
    this.state = { qty: 0 };
    this.buy = this.buy.bind(this);
    this.show = this.show.bind(this);
  }

  buy() {
    this.setState({ qty: this.state.qty + 1 });
    this.props.handleTotal(this.props.price);
  }

  show() {
    this.props.handleShow(this.props.name);
  }

  render() {
    return (
      <div>
        <p>
          {this.props.name} - ${this.props.price}
        </p>
        <button onClick={this.buy}>Buy</button>
        <button onClick={this.show}>Show</button>
        <h3>Qty: {this.state.qty} item(s)</h3>
        <hr />
      </div>
    );
  }
}

class ProductForm extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    // alert("Name: " + this.refs.name.value + " - $"+this.refs.price.value);
    var product = {
      name: this.refs.name.value,
      price: parseInt(this.refs.price.value)
    };

    this.props.handleCreate(product);

    this.refs.name.value = "";
    this.refs.price.value = "";
  }

  render() {
    return(
      <form onSubmit={this.submit}>
        <input type="text" placeholder="Product Name" ref="name"/> - 
        <input type="text" placeholder="Product Price" ref="price"/>
        <br/>
        <button>Create Product</button>
        <hr/>
      </form>
    );
  }
}

class Total extends Component {
  render() {
    return (
      <div>
        <h3>Total Cash: ${this.props.total}</h3>
      </div>
    );
  }
}

class ProductList extends Component {
  constructor() {
    super();
    this.state = { total: 0,
      productList: [
        {name: "Android", price: 121},
        {name: "Apple", price: 321},
        {name: "Nokia", price: 65}
      ] // sample products in array
      };
    this.calculateTotal = this.calculateTotal.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }

  showProduct(name) {
    alert("You selected " + name);
  }

  calculateTotal(price) {
    this.setState({ total: this.state.total + price });
    alert(this.state.total + price);
  }

  createProduct(product) {
    this.setState({productList: this.state.productList.concat(product)});
  }

  render() {
    var components = this;
    var products = this.state.productList.map(function(product){
      return(
        <Product
          name={product.name}
          price={product.price}
          handleShow={components.showProduct}
          handleTotal={components.calculateTotal}
        />
      );
    });
    return (
      <div>
        <ProductForm handleCreate={this.createProduct}/>
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
}

export default ProductList;
