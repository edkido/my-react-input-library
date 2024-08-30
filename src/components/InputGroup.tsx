import React from 'react';
import InputLabel from './InputLabel';
import InputText from './InputText';
import InputAnnotation from './InputAnnotation';
import '../styles/InputGroup.scss';
import { InputGroupProps } from '../types/InputGroupProps.tsx';

const InputGroup: React.FC<InputGroupProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  size = 'medium',
  beforeIcon,
  afterIcon,
  infoIcon,
  helperText,
  error = false,
  disabled = false,
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

export default InputGroup;
