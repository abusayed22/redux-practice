import { myCounter } from "./Counter"
import { loginReducer } from "./loginReducer";
import { combineReducers } from "@reduxjs/toolkit";

const allReducer = combineReducers({
    counter:myCounter ,
    logi:loginReducer
})

export default allReducer;