// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputGroup from '../components/InputGroup';
import { FiSearch, FiInfo } from 'react-icons/fi';

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
};

const Template = (args) => <InputGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'email',
  label: 'Email',
  type: 'email',
  value: '',
  onChange: () => {},
  placeholder: 'Enter your email',
  required: true,
  size: 'medium',
  beforeIcon: <FiSearch />,
  afterIcon: <FiSearch />,
  infoIcon: <FiInfo />,
  helperText: 'This is a hint text to help user.',
};

export const TextInput = Template.bind({});
TextInput.args = {
  ...Default.args,
  id: 'username',
  label: 'Username',
  type: 'text',
  placeholder: 'Enter your username',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  ...Default.args,
  id: 'age',
  label: 'Age',
  type: 'number',
  placeholder: 'Enter your age',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  ...Default.args,
  id: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  beforeIcon: null,
  afterIcon: null,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Default.args,
  error: true,
  helperText: 'Invalid email address.',
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  ...Default.args,
  disabled: true,
  helperText: 'Input is disabled.',
};

export const HoverState = Template.bind({});
HoverState.args = {
  ...Default.args,
  value: 'Hover to see the effect',
};

export const FocusState = Template.bind({});
FocusState.args = {
  ...Default.args,
  value: 'Click to focus',
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  ...Default.args,
  size: 'small',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  ...Default.args,
  size: 'large',
};

export const ExtraLargeSize = Template.bind({});
ExtraLargeSize.args = {
  ...Default.args,
  size: 'xlarge',
};
