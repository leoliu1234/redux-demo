import {combineReducers} from 'redux';
import computer from './computer';
import picture from './picture';

const rootReducer = combineReducers({
    computer,
    picture
});

export default rootReducer;