import { ADD, SET_VALUE, SET_OPERATOR } from '../actions/computer';

const initializeState = { newValue: 0, oldValue: 0, result: '', operator: '' };

export default function computer(state = initializeState, action) {
    switch (action.type) {
        case ADD:

            return Object.assign({}, state, { value: state.value + 1 });
        case SET_VALUE: {
            let newValue = state.newValue;
            let oldValue = state.newValue;
            let result = newValue;
            if (state.operator) {
                if (state.newValue === 0) {
                    newValue = action.value;
                } else {
                    newValue = newValue * 10 + action.value;
                }
                result = oldValue + ' ' + state.operator + ' ' + newValue;
            } else {
                newValue = state.newValue * 10 + action.value;
            }

            return Object.assign({}, state, { newValue: newValue, oldValue: oldValue, result: result });
        }
        case SET_OPERATOR: {
            let oldValue = state.newValue;
            let newValue = 0;
            // switch (state.operator) {
            //     case "+":
            //         if (state.oldValue && state.newValue) {
            //             newValue = state.oldValue + state.newValue;
            //         }
            //         break;
            //     case "-":
            //         if (state.oldValue && state.newValue) {
            //             newValue = state.oldValue - state.newValue;
            //         }
            //         break;
            // }
            let result = oldValue + ' ' + state.operator + ' ' + newValue || '';
            return Object.assign({}, state, { newValue: newValue, oldValue: oldValue, operator: action.operator, result: result });
        }

        default:
            return state;
    }
}