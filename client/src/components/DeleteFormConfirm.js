import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";

const DeleteFormConfirm = ({ onCancel, formValues, deleteItem, history, values }) => {

  return (
    <div>
      <h3>Are you sure?</h3>

      <button className="btn" onClick={onCancel}>Cancel</button>
      <button onClick={() => deleteItem(formValues, history)} className="btn red">
        Delete
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.deleteForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(DeleteFormConfirm));
