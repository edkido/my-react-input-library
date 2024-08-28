// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/InputText.scss';

const InputText = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
  size = 'medium',
  beforeIcon,
  afterIcon,
  infoIcon,
  error = false,
  disabled = false,
}) => (
  <div className={`input-wrapper input-wrapper--${size} ${disabled ? 'input-wrapper--disabled' : ''} ${error ? 'input-wrapper--error' : ''}`}>
    {beforeIcon && <span className="input-icon input-icon--before">{beforeIcon}</span>}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      className={`input-text input-text--${size}`}
    />
    {afterIcon && <span className="input-icon input-icon--after">{afterIcon}</span>}
    {infoIcon && <span className="input-icon input-icon--info">{infoIcon}</span>}
  </div>
);

InputText.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'number', 'password']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  beforeIcon: PropTypes.node,
  afterIcon: PropTypes.node,
  infoIcon: PropTypes.node,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default InputText;