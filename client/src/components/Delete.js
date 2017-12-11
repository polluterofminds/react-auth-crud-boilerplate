import React, { Component } from "react";
import DeleteForm from "./DeleteForm";
import { reduxForm } from "redux-form";
import DeleteFormConfirm from "./DeleteFormConfirm";

class Delete extends Component {

  state = { showDeleteFormConfirm: false };
  renderContent() {
    if(this.state.showDeleteFormConfirm) {
      return <DeleteFormConfirm onCancel={() => this.setState({ showDeleteFormConfirm: false })}/>;
    } else{

    return <DeleteForm onDeleteSubmit={() => this.setState({ showDeleteFormConfirm: true })}/>;
  }
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
  form: "deleteForm"
})(Delete);
