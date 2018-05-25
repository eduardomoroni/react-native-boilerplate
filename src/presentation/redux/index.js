import Maybe from 'data.maybe';
import { createLogger } from 'redux-logger';
import { combineReducers, applyMiddleware, createStore as create } from 'redux';
import { counterReducer } from './counter';

const createFunctionalReducer = ({ reducers, initialState }) => {
  return (state = initialState, action) =>
    Maybe.fromNullable(reducers[action.type])
      .map(handler => handler(state, action))
      .getOrElse(state);
};

const reducers = {
  counter: createFunctionalReducer(counterReducer),
};

export const createStore = () => {
  const middleware = [];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  return create(combineReducers(reducers), applyMiddleware(...middleware));
};
