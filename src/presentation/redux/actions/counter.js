import { INCREMENT, DECREMENT } from './types/counter';

export const incrementCounter = () => ({type: INCREMENT});
export const decrementCounter = () => ({type: DECREMENT});
