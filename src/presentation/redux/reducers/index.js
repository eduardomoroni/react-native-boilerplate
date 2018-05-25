import { combineReducers } from 'redux';
import Maybe from 'data.maybe';
import { counterReducer } from './counter';

export const createFunctionalReducer = reducerConfig => {
  const { actionHandlers, initialState } = reducerConfig;
  return (state = initialState, action) =>
    Maybe.fromNullable(actionHandlers[action.type])
      .map(handler => handler(state, action))
      .getOrElse(state);
};

const reducers = {
  counter: createFunctionalReducer(counterReducer)
};

export const rootReducer = combineReducers(reducers);
