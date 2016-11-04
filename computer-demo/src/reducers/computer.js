import { ADD, SET_VALUE, SET_OPERATOR, RESET, GETRESULT } from '../actions/computer';

const initializeState = { newValue: 0, oldValue: 0, result: '', operator: '' };

export default function computer(state = initializeState, action) {
    switch (action.type) {
        case ADD:

            return Object.assign({}, state, { value: state.value + 1 });
        case SET_VALUE: {
            let newValue = state.newValue * 10 + action.value;
            let oldValue = state.oldValue;
            let result = state.result;
            if (state.operator) {
                result = oldValue + ' ' + state.operator + ' ' + newValue;
            } else {
                result = newValue;
            }

            return Object.assign({}, state, { newValue: newValue, oldValue: oldValue, result: result });
        }
        case SET_OPERATOR: {
            let oldValue = state.newValue;
            let newValue = 0;
            let result = oldValue + ' ' + action.operator;
            return Object.assign({}, state, { newValue: newValue, oldValue: oldValue, operator: action.operator, result: result });
        }
        case RESET:

            return Object.assign({}, state, { newValue: 0, oldValue: 0, operator: "", result: "0" });
        case GETRESULT:
            var result = '';
            switch (state.operator) {
                case '+':
                    result = state.oldValue + state.newValue;
                    break;
                case '-':
                    result = state.oldValue - state.newValue;
                    break;
            }

            return Object.assign({}, state, { newValue: 0, oldValue: 0, operator: "", result: result });
        default:
            return state;
    }
}