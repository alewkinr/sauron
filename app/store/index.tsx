import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { ServiceReducer } from "./Service/reducer";

const middleware = applyMiddleware(thunk);
const rootReducers = combineReducers({
  service: ServiceReducer,
});

export default createStore(rootReducers, middleware);
