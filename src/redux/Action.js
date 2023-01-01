import { Types } from "./Types"
export const changeScreen = (value) => {
    return {
        type: Types.SET_VALUE,
        payload: value,
    }
}
export const reset = () => {
    return {
        type: Types.RESET_VALUE,
    }
}
export const deleteNumber = () => {
    return {
        type: Types.DELETE,
    }
}
export const setEquation = (value) => {
    return {
        type: Types.SET_EQUATION,
        payload: value,
    }
}
export const resetEquation = () => {
    return {
        type: Types.RESET_EQUATION,
    }
}
export const deleteEquation = () => {
    return {
        type: Types.DELETE_EQUATION,
    }
}
export const nextEquation = (result) => {
    return {
        type: Types.NEXT_EQUATION,
        payload: result,
    }
}
export const finalResult = (result, op) => {
    return {
        type: Types.GET_RESULT,
        payload: {
            'res': result,
            'operator': op,
        },
    }
}