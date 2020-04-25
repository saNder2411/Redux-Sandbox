import './bootstrap.min.css';
import {createStore} from 'redux';

const initialState = 0;

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case `DEC`:
      return --state;

    case `INC`:
      return ++state;

    case `RND_DEC`:
      return state - action.payload;

    case `RND_INC`:
      return state + action.payload;

    default:
      return state;
  }
};

const store = createStore(reducer);

document.getElementById(`dec`)
  .addEventListener(`click`, () => store.dispatch({type: `DEC`}));

document.getElementById(`inc`)
  .addEventListener(`click`, () => store.dispatch({type: `INC`}));

document.getElementById(`rnd-dec`)
  .addEventListener(`click`, () => store.dispatch({type: `RND_DEC`, payload: Math.floor(Math.random() * 10)}));

document.getElementById(`rnd-inc`)
  .addEventListener(`click`, () => store.dispatch({type: `RND_INC`, payload: Math.floor(Math.random() * 10)}));

const update = () => {
  document.getElementById(`counter`)
  .textContent = store.getState();
};

store.subscribe(update);