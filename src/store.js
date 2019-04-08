import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const customMiddleWare = store => next => action => {
  console.log('Middleware Called: ',action);
  next(action);
}

export function configureStore(){
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, customMiddleWare))
  );

  return store;
}