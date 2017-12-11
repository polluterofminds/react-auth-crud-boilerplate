import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <p><label>{label}</label></p>
      <textarea className="materialize-textarea" {...input} />
      <span className="highlight"></span>
      <span className="bar"></span>
      <p className="errorMessage">{touched && error}</p>
    </div>
  );
};
