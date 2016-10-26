import { ADD, SHOW } from '../actions/computer';

const initializeState = { value: 1 };

export default function computer(state = initializeState, action) {
    switch (action.type) {
        case ADD:

            return Object.assign({}, state, { value: state.value + 1 });
        case SHOW:
            return Object.assign({}, state, { value: action.value });
        default:
            return state;
    }
}