import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Home from './containers/Home';
import ProductPriceList from './containers/ProductPriceList';
import { Container } from 'semantic-ui-react';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Container>
            <Route exact path="/" component={Home}/>
            <Route path="/product/:id" component={ProductPriceList}/>
          </Container>
        </div>
      </Router>

    );
  }
}
