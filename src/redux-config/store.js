import { configureStore } from "@reduxjs/toolkit";
import { compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./compose-reducer";

const composeEnhancer = compose(applyMiddleware(thunk));
const store = configureStore({ reducer, enhancers: [composeEnhancer] });

export default store;
