import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

import rootReducer from '../rootReducer';

export default function configureStore() {
  const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
  ));

  return store;
}
