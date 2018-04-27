import {createStore,combineReducers} from 'redux';

import albumReducer from './reducers/albums';
import filterReducer from './reducers/filters';

const store=createStore(combineReducers({
  albums:albumReducer,
  filter:filterReducer
}));

export default store;