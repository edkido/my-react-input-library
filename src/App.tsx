// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react'
import { FiInfo, FiMail, FiScissors } from 'react-icons/fi'
import './App.scss'
import InputGroup from './components/InputGroup'

const App = () => {
  const [value, setValue] = useState('')

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = localStorage.getItem("theme") || (prefersDarkScheme ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="App">
      <button onClick={toggleTheme}>Toggle Theme</button>

      <InputGroup
        id='email'
        label={'Email'}
        type={'email'}
        value={value}
        placeholder={'example@gmail.com'}
        onChange={(e) => setValue(e.target.value)}
        required
        size={'medium'}
        beforeIcon={<FiMail />}
        afterIcon={<FiScissors />}
        infoIcon={<FiInfo />}
        helperText={'This is a helper text'}
      />
    </div>
  );
};

export default App
