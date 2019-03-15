import { createStore, combineReducers } from "redux";
import * as reducers from 'redux/reducers.js'

const store = createStore(combineReducers({...reducers}));

export default store;