import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchItems } from "../actions";
import DeleteField from './DeleteField';

class DeleteForm extends Component {

  render() {

    return (
      <div>
        <div className="container">
        <div className="card item-form center-align">
          <h2>Delete Item</h2>
          <p className="text-center">Select the item you would like to delete.</p>
          <form className="selectField"
            onSubmit={this.props.handleSubmit(this.props.onDeleteSubmit)}
          >

            <p>
            <DeleteField />
            </p>
            <p className="center-align">
              <Link to={"/"}><button className="btn grey">Cancel</button></Link>
              <button type="submit" className="btn black">
                Next
              </button>
            </p>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.item) {
    errors.item = "You must select an item";
  }

  return errors;
}

function mapStateToProps({ items }) {
  return { items };
}

DeleteForm = reduxForm({
  validate,
  form: "deleteForm",
  destroyOnUnmount: false
})(DeleteForm);

export default connect(mapStateToProps, { fetchItems })(DeleteForm);
