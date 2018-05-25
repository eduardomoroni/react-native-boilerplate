const INCREMENT = 'increment';
const DECREMENT = 'decrement';

export const incrementCounter = () => ({ type: INCREMENT });
export const decrementCounter = () => ({ type: DECREMENT });

const reducers = {
  [INCREMENT]: state => state + 1,
  [DECREMENT]: state => state - 1,
};

export const counterReducer = {
  reducers,
  initialState: 0,
};
