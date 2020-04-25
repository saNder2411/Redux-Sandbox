import React from 'react';
import './app.css'

const App = ({counter, decDispatch, incDispatch, rndDecDispatch, rndIncDispatch}) => {

  return (
    <div className="app jumbotron">
      <h2 id="counter">{counter}</h2>
      <ul className="list-group">
        <li className="list-group-item d-flex bg-light">
          <button id="dec"
                  className="btn btn-primary btn-lg"
                  onClick={decDispatch}>
            DEC -
          </button>
          <button id="inc"
                  className="btn btn-primary btn-lg"
                  onClick={incDispatch}>
            INC +
          </button>
        </li>
        <li className="list-group-item d-flex bg-light">
          <button id="rnd-dec"
                  className="btn btn-primary btn-lg"
                  onClick={rndDecDispatch}>
            RND DEC -
          </button>
          <button id="rnd-inc"
                  className="btn btn-primary btn-lg"
                  onClick={rndIncDispatch}>
            RND INC +
          </button>
        </li>
      </ul>
    </div>
  );
};

export default App;