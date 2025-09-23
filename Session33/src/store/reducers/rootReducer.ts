<<<<<<< HEAD
import { combineReducers } from "redux";
import { reducerCounter } from "./ReducerCounter";
import { reducerStudents } from "./ReducerStundent";

export const rootReducer= combineReducers({
    counter: reducerCounter,
    students: reducerStudents
});


=======
import { combineReducers } from "redux";
import { reducerCounter } from "./ReducerCounter";
import { reducerStudents } from "./ReducerStundent";

export const rootReducer= combineReducers({
    counter: reducerCounter,
    students: reducerStudents
});


>>>>>>> 9ff6c1a591451acca643a6e60899e7d056a54a8c
export default rootReducer;