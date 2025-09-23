import { combineReducers } from "@reduxjs/toolkit";
import studentsReducer from "./reducerStudent";

const rootReducer = combineReducers({
  students: studentsReducer,
});

export default rootReducer;
