<<<<<<< HEAD
import { combineReducers } from "@reduxjs/toolkit";
import studentsReducer from "./reducerStudent";

const rootReducer = combineReducers({
  students: studentsReducer,
});

export default rootReducer;
=======
import { combineReducers } from "redux";
import { reducerStudent } from "./reducerStudent";

export const rootReducer = combineReducers({
    student:reducerStudent
})
>>>>>>> 9ff6c1a591451acca643a6e60899e7d056a54a8c
