/** Created by batmah on 16.10.16. */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './forms/App';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const createStoreWithDevTools = compose(
  applyMiddleware(thunk),
  global.devToolsExtension ? global.devToolsExtension() : f => f,
)(createStore);

const store = createStoreWithDevTools(reducer);

ReactDOM.render(<Provider store={store}><App target="react" /></Provider>, document.getElementById('app'));