import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { MainReducer } from "../reducers/MainReducer";

import { ServiceReducer } from "./Service/reducer";

const middleware = applyMiddleware(thunk);
const rootReducers = combineReducers({
  main: MainReducer,
  service: ServiceReducer,
});

export default createStore(rootReducers, middleware);
