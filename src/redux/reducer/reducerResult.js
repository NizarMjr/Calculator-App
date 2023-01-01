import { Types } from "../Types";

const equation = '';
const globalValue = 0;
const finalResult = '';

export const reducerScreen = (state = globalValue, { type, payload }) => {
    switch (type) {
        case Types.SET_VALUE: {
            state += payload;
            state = parseFloat(state);
            return state;
        }
        case Types.RESET_VALUE: {
            state = 0;
            return state;
        }
        case Types.DELETE: {
            var string = state.toString();
            string = string.slice(0, string.length - 1)
            state = Number(string);
            return state;
        }
        default: return state;
    }
}
export const reducerEquation = (state = equation, { type, payload }) => {
    switch (type) {
        case Types.SET_EQUATION: {
            state += payload;
            return state;
        }
        case Types.NEXT_EQUATION: {
            state = payload;
            return state;
        }
        case Types.RESET_EQUATION: {
            state = '';
            return state;
        }
        case Types.DELETE_EQUATION: {
            state = state.slice(0, state.length - 1);
            return state;
        }
        default: return state;
    }
}
export const reducerFinalResult = (state = finalResult, { type, payload }) => {
    switch (type) {
        case Types.GET_RESULT: {
            if (eval(payload.res)) {
                state = eval(payload.res);
                return state;
            }
        }
        case Types.RESET_VALUE: {
            state = '';
            return state;
        }
        default: return state;
    }
}