import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

const initializeState = { counter: 0 };
export default function test(state = initializeState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return Object.assign({}, state, { counter: state.counter + 1 });
        case DECREMENT_COUNTER:
            return Object.assign({}, state, { counter: state.counter - 1 });
        default:
            return state;
    }
}