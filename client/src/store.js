import { createStore, applyMiddleware } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootreducers from "./components/redux/reducer/main";

const middleware = [thunk];
const intialstate={};
const store = createStore(
  rootreducers,
  intialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
 