// @flow strict

import type {
  FunctionalReducerConfigType,
  ReducerType,
  ActionWithNoPayload,
} from './types';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

export const selectCounter = (state: { counter: number }): number =>
  state.counter;

export const incrementCounter = (): ActionWithNoPayload => ({
  type: INCREMENT,
});
export const decrementCounter = (): ActionWithNoPayload => ({
  type: DECREMENT,
});

const reducers: ReducerType = {
  [INCREMENT]: state => state + 1,
  [DECREMENT]: state => state - 1,
};

export const counterReducer: FunctionalReducerConfigType = {
  reducers,
  initialState: 0,
};
