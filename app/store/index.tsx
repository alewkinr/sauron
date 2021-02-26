import {applyMiddleware, combineReducers, createStore} from "redux";
import {MainReducer} from "../reducers/MainReducer";
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
const rootReducers = combineReducers( {
    main: MainReducer
})

export default createStore(rootReducers, middleware)