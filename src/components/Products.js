import React, { Component } from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';
import Request  from 'superagent';
import _ from 'lodash';
import './Products.css';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      search: ''
    }
  }
  componentWillMount = () => {
    this.getData();
  }
  getData = () => {
    Request.get('./data/products.json').then((response) => {
      this.setState({
        products: response.body
      });
    });
  }
  updateSearch = (event) => {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }
  render() {
    var productList = this.state.products;    
    var productItems = _.map(this.state.products.filter(
      (product) => {
        return product.title.toLowerCase().indexOf(this.state.search) !== -1;
      }
    ), (product) => {
      return <tr key={product.id}>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.inventory}</td>
      </tr>
    });
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <h1>PRODUCTS</h1>
              <input type="text" placeholder="Search products" onChange={this.updateSearch.bind(this)}/>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Inventory</th>
                  </tr>
                </thead>
                <tbody>{productItems}</tbody>
              </table>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
