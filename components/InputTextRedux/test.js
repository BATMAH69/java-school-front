// Эти данные скопированиы с консоли

import React from 'react';
import ReactDOM from 'react-dom';
import {fromJS} from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TestUtils from  'react-addons-test-utils';
import InputTextRedux from './index';
import reducers from './reducer';


const filterNode = (state) => fromJS(state.app);

describe('InputTextRedux', () => {

  const prevState = filterNode({ app: {} });
  const action = { type: 'SET_COUNT_COUNT0', payload: '1', node: 'count0' };
  const nextState = reducers(prevState, action);

  it('action', () => {

    const storePrev = createStore(state => state, prevState);

    const dispatch = jasmine.createSpy('dispatch')
    storePrev.dispatch = dispatch;

    const node = TestUtils.renderIntoDocument(
      <Provider store={storePrev}>
        <InputTextRedux name={'count0'} />
      </Provider>
    );

    const elem = ReactDOM.findDOMNode(node).querySelector('input');

    TestUtils.Simulate.change(elem, {target: {value: '1'}});
    expect(dispatch).toHaveBeenCalledWith(action)

  });

  it('reducers', () => {

    const state = filterNode({ app: { count0: '1' } });
    expect(true).toEqual(nextState.equals(state));

  });

  it('render', () => {

    const storeNext = createStore(state => state, fromJS({app:nextState}));

    const node = TestUtils.renderIntoDocument(
      <Provider store={storeNext}>
        <InputTextRedux name={'count0'} />
      </Provider>
    );

    const elem = ReactDOM.findDOMNode(node).querySelector('input');

    expect(elem.value).toBe('1');

  });

});

