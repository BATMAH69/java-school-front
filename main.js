/** Created by batmah on 16.10.16. */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import app from './components/App/reducer';

const reducer = combineReducers({ app });

const createStoreWithDevTools = compose(
  global.devToolsExtension ? global.devToolsExtension() : f => f,
)(createStore);

const store = createStoreWithDevTools(reducer);

ReactDOM.render(<Provider store={store}><App target="react" /></Provider>, document.getElementById('app'));