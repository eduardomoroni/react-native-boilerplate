import { INCREMENT, DECREMENT } from '../../actions/types/counter';
import { decrementHandler, incrementHandler } from './handlers';

export const actionHandlers = {
  [INCREMENT]: incrementHandler,
  [DECREMENT]: decrementHandler,
}

export const counterReducer = {
  initialState: 0,
  actionHandlers: actionHandlers
}
