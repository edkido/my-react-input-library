# React Input Components Library
Input library

This project is a React component library for customizable input components, including `InputText`, `InputLabel`, `InputGroup`, and `InputAnnotation`. The components support various input types, such as text, email, number, and password, with features like light/dark mode, error handling, and different sizes.

## Features

- **Multiple Input Types**: Support for text, email, number, and password input types.
- **Size Variants**: Small, medium, large, and extra-large input sizes.
- **Icons Support**: Ability to add icons before, after, and within the input field.
- **Error and Disabled States**: Visual feedback for errors and disabled states.
- **Light/Dark Mode**: Theme support to adjust the components based on light or dark mode.
- **Storybook Documentation**: Interactive component documentation using Storybook.

## Installation

To use these components in your project, clone the repository and install the dependencies:

```bash
git clone https://github.com/<username>/react-input-library.git
cd react-input-library
npm install
```

## Usage
The InputText component is a customizable input field supporting various types and sizes.
```jsx
import React from 'react';
import InputText from './components/InputText';
import { FiSearch, FiInfo } from 'react-icons/fi';

const App = () => {
  return (
    <div>
      <InputText
        type="email"
        value=""
        onChange={(e) => console.log(e.target.value)}
        placeholder="Enter your email"
        required
        size="medium"
        beforeIcon={<FiSearch />}
        afterIcon={<FiInfo />}
      />
    </div>
  );
};

export default App;
```

The InputGroup component wraps input fields with a label and annotation, providing a complete input solution.
```jsx
import React from 'react';
import InputGroup from './components/InputGroup';
import { FiSearch, FiInfo } from 'react-icons/fi';

const App = () => {
  return (
    <div>
      <InputGroup
        id="email"
        label="Email"
        type="email"
        value=""
        onChange={(e) => console.log(e.target.value)}
        placeholder="Enter your email"
        required
        size="medium"
        beforeIcon={<FiSearch />}
        afterIcon={<FiInfo />}
        helperText="Please enter a valid email address."
      />
    </div>
  );
};

export default App;
```

## Storybook
To view the component documentation and playground in Storybook, run:

```bash
npm run storybook
```


