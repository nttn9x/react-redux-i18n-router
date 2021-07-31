import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer.store';

import mySaga from './saga.store';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)

export default store;
