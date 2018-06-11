import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Home from './components/Home' ;
import About from './components/About';
import News from './components/News';
import Products from './components/Products';
import StackNavbar from './components/StackNavbar';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Grid>
            <Row className="show-grid text-center">
              <Col md={2} xsHidden smHidden>
                <StackNavbar />
              </Col>
              <Col sm={12} md={10}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/news" component={News} />
                <Route path="/products" component={Products} />
              </Col>
            </Row>
          </Grid>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
