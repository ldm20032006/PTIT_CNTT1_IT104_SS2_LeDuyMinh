<<<<<<< HEAD
import { DECREASE, INCREASE, RESET } from "../constants/type";

type ActionTypes = {
  type: string;
};

const counterReducer = (state = 0, action: ActionTypes) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;

    case DECREASE:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
};

=======
import { DECREASE, INCREASE, RESET } from "../constants/type";

type ActionTypes = {
  type: string;
};

const counterReducer = (state = 0, action: ActionTypes) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;

    case DECREASE:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
};

>>>>>>> 9ff6c1a591451acca643a6e60899e7d056a54a8c
export default counterReducer;