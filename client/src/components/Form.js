// import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import ItemField from "./ItemField";
import ItemTextArea from "./ItemTextArea";

class Form extends Component {
  renderFields() {
    return (
      <div className="inputs">
      <Field
        label="Item Title"
        type="text"
        name="title"
        component={ItemField}
        placeholder="Title"
      />
      <Field
        label="Another Field"
        type="text"
        name="another"
        component={ItemField}
        placeholder="Another Field"
      />
      <Field
        label="Item Body"
        type="text"
        name="body"
        component={ItemTextArea}
        placeholder="Body"
      />
      </div>
    );
  }
  render() {
    return (
      <div>
        <div>
          <div className="text-center container">
            <form
              onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}
            >
            <div className="add-item card">
              {this.renderFields()}
            </div>
              <p>
              <Link to={"/"}><button className="btn grey">Cancel</button></Link>
                <button className="btn submit" type="submit">
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

function validate(values){
  const errors = {};

  if (!values.title){
    errors.title = "Please enter a title";
  }
  if (!values.another){
    errors.another = "Please enter a another field";
  }

  if(!values.body){
    errors.body = "Please enter a body"
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "addForm",
  destroyOnUnmount: false
})(Form);
