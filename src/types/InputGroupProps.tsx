export interface InputGroupProps {
  id: string;
  label?: string;
  type?: 'text' | 'email' | 'number' | 'password';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  beforeIcon?: React.ReactNode;
  afterIcon?: React.ReactNode;
  infoIcon?: React.ReactNode;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
}