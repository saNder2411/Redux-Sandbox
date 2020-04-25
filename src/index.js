import './bootstrap.min.css';
import {createStore} from 'redux';
import {dec, inc, rndDec, rndInc} from './actions'
import reducer from './reducer';

const store = createStore(reducer);

document.getElementById(`dec`)
  .addEventListener(`click`, () => store.dispatch(dec()));

document.getElementById(`inc`)
  .addEventListener(`click`, () => store.dispatch(inc()));

document.getElementById(`rnd-dec`)
  .addEventListener(`click`, () => store.dispatch(rndDec(Math.floor(Math.random() * 11))));

document.getElementById(`rnd-inc`)
  .addEventListener(`click`, () => store.dispatch(rndInc(Math.floor(Math.random() * 11))));

const update = () => {
  document.getElementById(`counter`)
  .textContent = store.getState();
};

store.subscribe(update);