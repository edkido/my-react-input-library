import React from 'react';
import '../styles/InputText.scss';

interface InputTextProps {
  id: string
  type?: 'text' | 'email' | 'number' | 'password';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  beforeIcon?: React.ReactNode;
  afterIcon?: React.ReactNode;
  infoIcon?: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
  id,
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
  <div
    className={`input-wrapper input-wrapper--${size} ${disabled ? 'input-wrapper--disabled' : ''} ${
      error ? 'input-wrapper--error' : ''
    }`}
  >
    {beforeIcon && <span className="input-icon input-icon--before">{beforeIcon}</span>}
    <input
      id={id}
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

export default InputText;
