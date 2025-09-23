<<<<<<< HEAD
import { COMPANY } from "../constants/type";

const firstName = {
  company: "Rikkei Academy",
};

type ActionTypes = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

const companyReducer = (state = firstName, action: ActionTypes) => {
  switch (action.type) {
    case COMPANY:
      return {
        ...state,
        company: action.payload,
      };

    default:
      return state;
  }
};

=======
import { COMPANY } from "../constants/type";

const firstName = {
  company: "Rikkei Academy",
};

type ActionTypes = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

const companyReducer = (state = firstName, action: ActionTypes) => {
  switch (action.type) {
    case COMPANY:
      return {
        ...state,
        company: action.payload,
      };

    default:
      return state;
  }
};

>>>>>>> 9ff6c1a591451acca643a6e60899e7d056a54a8c
export default companyReducer;