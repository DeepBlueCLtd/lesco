import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';


import initialState from './reducers/initialState';
import configureStore from './store/configureStore';

// store initialization
const store = configureStore(initialState);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById('root');
render(
    <AppContainer>
        <Provider store={store}>
            <App history={history} store={store}/>
        </Provider>
    </AppContainer>,
    rootEl
);

if (module.hot) {
    module.hot.accept('./App', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./App').default;
        render(
            <AppContainer>
                <Provider store={store}>
                    <NextApp history={history} store={store} />
                </Provider>
            </AppContainer>,
            rootEl
        );
    });
}