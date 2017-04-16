/** Created by batmah on 16.10.16. */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(state => state, {count: 25});


ReactDOM.render(<Provider store={store}><App target="react" /></Provider>, document.getElementById('app'));