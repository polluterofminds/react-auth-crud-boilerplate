import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";

const EditFormReview = ({ onCancel, formValues, updateItems, history }) => {
  return (
    <div className="container">
      <div className="add-item card center-align inputs">
        <h3>Review your items</h3>
        <label>Title</label>
        <div><strong>{formValues.title}</strong></div>
        <label>Another</label>
        <div><strong>{formValues.another}</strong></div>
        <label>Body</label>
        <div><strong>{formValues.body}</strong></div>
        <button className="btn black" onClick={() => updateItems(formValues, history)}>
          Update
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.editForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(EditFormReview));
