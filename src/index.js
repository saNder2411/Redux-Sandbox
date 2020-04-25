import './bootstrap.min.css';
import {createStore, bindActionCreators} from 'redux';
import {dec, inc, rndDec, rndInc} from './actions'
import reducer from './reducer';

const store = createStore(reducer);
const {dispatch, getState} = store;

const bindActionCreator = (actionCreator, dispatch) => (...args) => {
  dispatch(actionCreator(...args));
};

const decDispatch = bindActionCreators(dec, dispatch);
const incDispatch = bindActionCreator(inc, dispatch);

const {rndDecDispatch, rndIncDispatch} = bindActionCreators({
  rndDecDispatch: rndDec,
  rndIncDispatch: rndInc,
}, dispatch)

document.getElementById(`dec`)
  .addEventListener(`click`, decDispatch);

document.getElementById(`inc`)
  .addEventListener(`click`, incDispatch);

document.getElementById(`rnd-dec`)
  .addEventListener(`click`, () => rndDecDispatch(Math.floor(Math.random() * 11)));

document.getElementById(`rnd-inc`)
  .addEventListener(`click`, () => rndIncDispatch(Math.floor(Math.random() * 11)));

const update = () => {
  document.getElementById(`counter`)
  .textContent = getState();
};

store.subscribe(update);