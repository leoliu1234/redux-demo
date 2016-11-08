import { combineReducers } from 'redux';
import computer from './computer';
import picture from './picture';
import home from './home';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    computer,
    picture,
    home,
    routing: routerReducer
});

export default rootReducer;