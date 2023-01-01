import { combineReducers } from "redux";
import { reducerEquation, reducerFinalResult, reducerScreen } from "./reducerResult";

const reducers = combineReducers({
    setScreen: reducerScreen,
    setEquation: reducerEquation,
    finalResult: reducerFinalResult,
})
export default reducers;