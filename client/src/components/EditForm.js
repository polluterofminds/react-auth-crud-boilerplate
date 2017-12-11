import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import DeleteField from "./DeleteField";
import ItemField from "./ItemField";
import ItemTextArea from "./ItemTextArea";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchItems } from "../actions";

const renderField = field => (
  <div className="input-row">
    <input {...field.input} type="text" />
    {field.meta.touched &&
    field.meta.error && (
      <span className="errorMessage">{field.meta.error}</span>
    )}
  </div>
);

class EditForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="card item-form center-align">
          <h2>Edit an item</h2>
          <form className="selectField"

            onSubmit={this.props.handleSubmit(this.props.onEditSubmit)}
          >
            <p>
              <DeleteField />
            </p>

            <p>
            <Field
              label="Item Title"
              type="text"
              name="title"
              component={ItemField}
              placeholder="Title"
            />
            </p>

            <p>
            <Field
              label="Another Field"
              type="text"
              name="another"
              component={ItemField}
              placeholder="Another Field"
            />
            </p>

            <p>
            <Field
              label="Item Body"
              type="text"
              name="body"
              component={ItemTextArea}
              placeholder="Body"
            />
            </p>
            <p>
              <Link to={"/"}>
                <button className="btn grey">Cancel</button>
              </Link>
              <button type="submit" className="btn black">
                Next
              </button>
            </p>
          </form>
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

EditForm = reduxForm({
  validate,
  form: "editForm",
  destroyOnUnmount: false
})(EditForm);

export default connect(mapStateToProps, { fetchItems })(EditForm);
