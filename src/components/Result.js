import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

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
      <div>
        <p> {result} </p>
        {
          (this.props.won || this.props.draw) && (
              <button className="startAgain" onClick={this.props.startAgain}>
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
  })
)(Result);

export {Result as PureResult};
