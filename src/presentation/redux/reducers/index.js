import { combineReducers } from 'redux';
import Maybe from 'data.maybe';

export const createFunctionalReducer = reducerConfig => {
  const { actionHandlers, initialState } = reducerConfig;
  return (state = initialState, action) =>
    Maybe.fromNullable(actionHandlers[action.type])
      .map(handler => handler(state, action))
      .getOrElse(state);
};

const reducers = { ok: () => ({}) };

export const rootReducer = combineReducers(reducers);
