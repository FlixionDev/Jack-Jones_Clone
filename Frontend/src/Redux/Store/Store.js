import {legacy_createStore as createstore,applyMiddleware} from 'redux'
import { Reducer } from '../Reducer/Reducer';
import thunk from 'redux-thunk';
let store=createstore(Reducer,applyMiddleware(thunk));
export default store;