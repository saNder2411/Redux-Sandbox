import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import './counter.css'

const Counter = ({counter, decDispatch, incDispatch, rndDecDispatch, rndIncDispatch}) => {

  return (
    <div className="counter jumbotron">
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

const mapStateToProps = (state) => ({counter: state});

const mapDispatchToProps = (dispatch) => {
  const {dec, inc, rndDec, rndInc} = bindActionCreators(actions, dispatch);

  return {
    decDispatch: dec,
    incDispatch: inc,
    rndDecDispatch: () => {
      const rndValue = Math.floor(Math.random() * 11);

      rndDec(rndValue);
    },
    rndIncDispatch: () => {
      const rndValue = Math.floor(Math.random() * 11);

      rndInc(rndValue);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);