import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore as create } from 'redux';

import { rootReducer } from './reducers/index';

export const createStore = () => {
  const middleware = [];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  return create(rootReducer, applyMiddleware(...middleware));
};
