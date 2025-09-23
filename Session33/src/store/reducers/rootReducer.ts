import { combineReducers } from "redux";
import { reducerCounter } from "./ReducerCounter";
import { reducerStudents } from "./ReducerStundent";

export const rootReducer= combineReducers({
    counter: reducerCounter,
    students: reducerStudents
});


export default rootReducer;