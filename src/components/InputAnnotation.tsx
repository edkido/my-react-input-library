import React from 'react';
import '../styles/InputAnnotation.scss';

interface InputAnnotationProps {
  message: string;
  type?: 'error' | 'info' | 'success';
}

const InputAnnotation: React.FC<InputAnnotationProps> = ({ message, type = 'info' }) => (
  <div className={`input-annotation input-annotation--${type}`}>
    {message}
  </div>
);

export default InputAnnotation;