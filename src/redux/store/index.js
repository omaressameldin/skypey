import { createStore, combineReducers } from "redux";
import * as reducers from 'redux/reducers'

const store = createStore(combineReducers({...reducers}));

export default store;