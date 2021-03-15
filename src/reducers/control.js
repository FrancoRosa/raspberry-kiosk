import { SET_CONTROL } from '../actions/index';

const control = (state = '', action) => {
  switch (action.type) {
    case SET_CONTROL:
      return action.control;
    default:
      return state;
  }
}

export default control;