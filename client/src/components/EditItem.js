import React, { Component } from "react";
import EditForm from "./EditForm";
import { reduxForm } from "redux-form";
import EditFormReview from "./EditFormReview";

class EditItem extends Component {

  state = { showEditFormReview: false };
  renderContent() {
    if(this.state.showEditFormReview) {
      return <EditFormReview onCancel={() => this.setState({ showEditFormReview: false })}/>;
    }

    return <EditForm onEditSubmit={() => this.setState({ showEditFormReview: true })}/>;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: "EditForm"
})(EditItem);
