// @flow strict

import Maybe from 'data.maybe';
import { createLogger } from 'redux-logger';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { counterReducer } from './counter';
import type { FunctionalReducerConfigType } from './types';

const createFunctionalReducer = ({
  reducers,
  initialState,
}: FunctionalReducerConfigType) => {
  return (state = initialState, action) =>
    Maybe.fromNullable(reducers[action.type])
      .map(handler => handler(state, action))
      .getOrElse(state);
};

const reducers = {
  counter: createFunctionalReducer(counterReducer),
};

export const getStore = () => {
  const middleware = [];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  return createStore(combineReducers(reducers), applyMiddleware(...middleware));
};
