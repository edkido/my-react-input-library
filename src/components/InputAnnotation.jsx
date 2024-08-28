// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/InputAnnotation.scss';

const InputAnnotation = ({ message, type = 'info' }) => (
  <div className={`input-annotation input-annotation--${type}`}>
    {message}
  </div>
);

InputAnnotation.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'info', 'success']),
};

export default InputAnnotation;