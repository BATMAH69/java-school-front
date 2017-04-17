/** Created by batmah on 16.10.16. */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state, action) => {
  if (action.type !== 'INC'){
    return state;
  }
  return Object.assign({}, state, {count: action.count});
};

const store = createStore(reducer, {count: 25});


ReactDOM.render(<Provider store={store}><App target="react" /></Provider>, document.getElementById('app'));