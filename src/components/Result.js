import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startAgain } from "../actions/actions";
import './App.css'

class Result extends Component {
  render () {
    let result = '';
    if (this.props.turn) {
      result = `It's ${this.props.turn.toUpperCase()}'s turn.`;
    }
    if (this.props.won) {
      result = `${this.props.won.toUpperCase()} won!`
    } else if (this.props.draw) {
      result = 'Draw!';
    }
    return (
      <div className='message'>
        <p> {result} </p>
        {
          (this.props.won || this.props.draw) && (
            <button className="start-again" onClick={this.props.startAgain}>
              Restart
            </button>
          )
        }
      </div>
    );
  }
}

Result.propTypes = {
  won: PropTypes.string,
  turn: PropTypes.string.isRequired,
  draw: PropTypes.bool.isRequired
};

export default connect(
  ({won, turn, draw}) => ({
    won, turn, draw
  }),
  (dispatch) => {
    return {
      startAgain () {
        dispatch(startAgain());
      }
    };
  }
)(Result);

export {Result as PureResult};
