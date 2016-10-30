export const ADD = 'ADD';
export const SET_VALUE = 'SET_VALUE';
export const SET_OPERATOR = 'SET_OPERATOR';

export function add(value) {
    return {
        type: ADD,
        value
    }
}

export function setValue(value) {
    return {
        type: SET_VALUE,
        value
    };
}

export function setOperator(operator) {
    return {
        type: SET_OPERATOR,
        operator
    };
}