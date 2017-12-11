import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions";
import { HashLink as Link } from 'react-router-hash-link';
import axios from 'axios';

class ItemList extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  renderList() {

    return this.props.items.map(item => {
      var link = "/api/items/";
      var id = item._id;
      var dropLink = link + id;
      return (
        <div className="container">
          <div className="card items">
            <h2>{item.title}</h2>
            <h2>{item.another}</h2>
            <h3>{item.body}</h3>
          </div>
        </div>
      );
    });
  }

  render() {

    return(
    <div>
      <div className="row">
        <Link to={"/items/delete"}><button className="btn s6 white red-text"><i className="material-icons">delete</i>Delete an item</button></Link>
        <Link to={"/items/edit"}><button className="btn s6 white black-text"><i className="material-icons">edit</i>Edit an item</button></Link>
      </div>
      {this.renderList()}
    </div>
  );
  }
}

function mapStateToProps({ items }, { auth }) {
  return { items };
}

export default connect(mapStateToProps, { fetchItems })(ItemList);
