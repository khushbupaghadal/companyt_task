import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { rootreducer } from "../Reducer/rootreducer";

export let store = createStore(rootreducer , applyMiddleware(thunk))