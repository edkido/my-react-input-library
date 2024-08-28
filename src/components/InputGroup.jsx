// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from './InputLabel';
import InputText from './InputText';
import InputAnnotation from './InputAnnotation';
import '../styles/InputGroup.scss';

const InputGroup = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
  size,
  beforeIcon,
  afterIcon,
  infoIcon,
  helperText,
  error,
  disabled,
}) => (
  <div className="input-group">
    {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
    <InputText
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      size={size}
      beforeIcon={beforeIcon}
      afterIcon={afterIcon}
      infoIcon={infoIcon}
      error={error}
      disabled={disabled}
    />
    {helperText && <InputAnnotation message={helperText} type="info" />}
  </div>
);

InputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number', 'password']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  beforeIcon: PropTypes.node,
  afterIcon: PropTypes.node,
  infoIcon: PropTypes.node,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default InputGroup;