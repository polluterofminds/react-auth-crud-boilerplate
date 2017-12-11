import axios from "axios";
import { FETCH_USER, FETCH_ITEMS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const addItem = (values, history) => async dispatch => {
  const res = await axios.post("/api/items", values);
  history.push("/");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchItems = () => async dispatch => {
  const res = await axios.get("/api/items");

  dispatch({ type: FETCH_ITEMS, payload: res.data });
};

export const updateItems = (values, history) => async dispatch => {
  const res = await axios.put("/api/items/" + values.item, values);

  history.push("/");
  // dispatch({ type: FETCH_USER, payload: res.data });
};

export const deleteItem = (values, history) => async dispatch => {
  const res = await axios.delete("/api/items/" + values.item, values);

  history.push("/");
  // dispatch({ type: FETCH_USER, payload: res.data });
};
