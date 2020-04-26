import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import './counter.css'

const Counter = ({counter, dec, inc, rndDec, rndInc}) => {

  return (
    <div className="counter jumbotron bg-secondary">
      <h2 id="counter">{counter}</h2>
      <ul className="list-group">
        <li className="list-group-item d-flex bg-light">
          <button id="dec"
                  className="btn btn-primary btn-lg"
                  onClick={dec}>
            DEC -
          </button>
          <button id="inc"
                  className="btn btn-primary btn-lg"
                  onClick={inc}>
            INC +
          </button>
        </li>
        <li className="list-group-item d-flex bg-light">
          <button id="rnd-dec"
                  className="btn btn-primary btn-lg"
                  onClick={rndDec}>
            RND DEC -
          </button>
          <button id="rnd-inc"
                  className="btn btn-primary btn-lg"
                  onClick={rndInc}>
            RND INC +
          </button>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({counter: state});

export default connect(mapStateToProps, actions)(Counter);