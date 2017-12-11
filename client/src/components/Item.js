import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions";
import { HashLink as Link } from 'react-router-hash-link';

class Item extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return(
    <div>
      <h1>Hi</h1>
    </div>
  );
  }
}

function mapStateToProps({ items }, { auth }) {
  return { items };
}

export default connect(mapStateToProps, { fetchItems })(Item);
