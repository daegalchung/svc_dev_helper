
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import reducers from './reducers';

import App from './components/App';
import createHistory from 'history/createBrowserHistory';
import { createStore } from 'redux';


const store = createStore(reducers);
const history = createHistory();

//TODO history
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

), document.getElementById('root'));

