import { combineReducers, createStore } from 'redux';
import control from './control';

const rootReducer = combineReducers({
  control,
});

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;