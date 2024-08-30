import React from 'react';
import '../styles/InputLabel.scss';

interface InputLabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const InputLabel: React.FC<InputLabelProps> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="input-label">
    {children}
  </label>
);

export default InputLabel;
