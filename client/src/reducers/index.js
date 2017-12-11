import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import itemsReducer from "./itemsReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  items: itemsReducer
});
