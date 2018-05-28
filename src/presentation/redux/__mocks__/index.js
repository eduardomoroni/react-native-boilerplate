// @flow
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
export const state = { counter: 2 };
export const store = mockStore(state);
