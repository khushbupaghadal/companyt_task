import { combineReducers } from "redux";
import { loginreducer } from "./loginreducer";

export let rootreducer = combineReducers({
    loginreducer : loginreducer
})