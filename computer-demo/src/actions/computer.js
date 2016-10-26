export const ADD = 'ADD';
export const SHOW = 'SHOW';

export function add(value) {
    return {
        type: ADD,
        value
    }
}

export function show(value) {
    return {
        type: SHOW,
        value
    };
}