import { combineReducers, createStore } from "redux";

import configReducer from "./reducers/config";
import loginReducer from "./reducers/login";

const reducer = combineReducers({
  configReducer,
  loginReducer,
});

const store = createStore(reducer);

export default store;
