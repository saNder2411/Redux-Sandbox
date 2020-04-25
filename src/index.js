import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './bootstrap.min.css';
import {createStore, bindActionCreators} from 'redux';
import * as actions from './actions'
import reducer from './reducer';

const store = createStore(reducer);
const {dispatch, getState} = store;

const {
  dec: decDispatch,
  inc: incDispatch,
  rndDec: rndDecDispatch,
  rndInc: rndIncDispatch,
} = bindActionCreators(actions, dispatch)


const update = () => {
  ReactDOM.render(
    <App counter={getState()} 
        decDispatch={decDispatch}
        incDispatch={incDispatch}
        rndDecDispatch={() => {
          const value = Math.floor(Math.random() * 11);
          rndDecDispatch(value);
        }}
        rndIncDispatch={() => {
          const value = Math.floor(Math.random() * 11);
          rndIncDispatch(value);
        }} />,
    document.getElementById(`root`));
};

update();
store.subscribe(update);