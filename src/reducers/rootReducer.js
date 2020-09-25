import {combineReducers} from "redux";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";

const rootReducer = combineReducers({
    userReducer,
    fileReducer
});

export default rootReducer;