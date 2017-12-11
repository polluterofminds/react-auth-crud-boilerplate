import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css';

import Header from './Header';
import Landing from './Landing';
import New from './New';
import Delete from "./Delete";
import Item from './Item';
import EditItem from './EditItem';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchItems();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path='/new/item' component={New} />
            <Route exact path='/:_id' component={Item} />
            <Route exact path="/items/delete" component={Delete} />
            <Route exact path="/items/edit" component={EditItem} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
