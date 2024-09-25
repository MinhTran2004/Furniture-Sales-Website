import { combineReducers } from "redux";
import { userReducer } from "./Reduce";

const rootReducer = combineReducers({
    userReducer: userReducer,
})

export default rootReducer;