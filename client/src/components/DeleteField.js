import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions";
import { Field } from "redux-form";

class DeleteField extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  renderItems() {

    return this.props.items.map(item => {
      return (
        <option key={item._id} name={item.title} value={item._id}>{item.title}</option>
      );

    });
  }

  render() {
    return (
      <p className="align-center">
      <Field name="item" component="select">
        <option disabled>Select an item</option>
        {this.renderItems()}
      </Field>
      </p>
    );
  }
}

function mapStateToProps({ items }) {
  return { items };
}

export default connect(mapStateToProps, { fetchItems })(DeleteField);
