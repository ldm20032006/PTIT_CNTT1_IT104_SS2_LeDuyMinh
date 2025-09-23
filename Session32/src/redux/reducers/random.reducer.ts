<<<<<<< HEAD
import { RANDOM } from "../constants/type";

type ActionTypes = {
  type: string;
  payload: number;
};

const randomReducer = (state = [], action: ActionTypes) => {
  switch (action.type) {
    case RANDOM:
      return [...state, action.payload];

    default:
      return state;
  }
};

=======
import { RANDOM } from "../constants/type";

type ActionTypes = {
  type: string;
  payload: number;
};

const randomReducer = (state = [], action: ActionTypes) => {
  switch (action.type) {
    case RANDOM:
      return [...state, action.payload];

    default:
      return state;
  }
};

>>>>>>> 9ff6c1a591451acca643a6e60899e7d056a54a8c
export default randomReducer;