// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/InputLabel.scss';

const InputLabel = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="input-label">
    {children}
  </label>
);

InputLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputLabel;