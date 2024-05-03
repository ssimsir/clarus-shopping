import { legacy_createStore as createStore, } from "redux";
import rootReducer from "./reducer/rootReducer";
import {composeWithDevTools} from "@redux-devtools/extension"
export function configureStore(){
   return createStore(rootReducer, composeWithDevTools())
}