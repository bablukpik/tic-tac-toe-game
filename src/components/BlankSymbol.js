import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Symbol = styled.div`
  background-color: #ffffff;
  border: 1px solid #000000;
  width: 60px;
  height: 60px;
  transition: background-color .5s ease;
`;

const BlankSymbol = (props) => {
  return <Symbol className='cell' onClick={() => props.addSymbol(props.turn)}></Symbol>;
};

BlankSymbol.propTypes = {
  addSymbol: PropTypes.func.isRequired
};

export default BlankSymbol;
