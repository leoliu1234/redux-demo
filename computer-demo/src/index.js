import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/app';
import Home from './containers/home';
import rootReducer from './reducers';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const store = createStore(rootReducer);
const history = syncHistoryWithStore(hashHistory, store);
render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
            <Route path = "/home" component = {Home}/>
        </Router>
    </Provider>,
    document.getElementById('root'));