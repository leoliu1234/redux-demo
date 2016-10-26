import { ADD } from '../actions/computer';

const initializeState = { value: 0 };

export default function computer(state = initializeState, action) {
    switch (action.type) {
        case ADD:

            return Object.assign({}, state, { value: state.value + 1 });
        default:
            return state;
    }
}