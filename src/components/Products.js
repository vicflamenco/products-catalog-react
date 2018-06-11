import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Request  from 'superagent';
import Table from './Table';
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
    Request.get('./data/products.json')
    .then((response) => {
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

    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <h1>PRODUCTS</h1>
              <input type="text" placeholder="Search products" onChange={this.updateSearch.bind(this)}/>
              <Table productList = {this.state.products}
              search = {this.state.search}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
