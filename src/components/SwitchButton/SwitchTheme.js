import React, { useState, useEffect } from 'react';
import './SwitchTheme.css';

import { FaRegMoon, FaSun } from 'react-icons/fa';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const SwitchTheme = ({ className }) => {
  const [theme, setTheme] = useState(getStorageTheme());
  const [checkedState, setCheckedState] = useState(true);
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setCheckedState(false);
    } else {
      setTheme('light-theme');
      setCheckedState(true);
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
    if (theme === 'light-theme') {
      setCheckedState(true);
    } else {
      setCheckedState(false);
    }
  }, [theme]);
  return (
    <>
      <input
        type='checkbox'
        className='checkbox'
        id='checkbox'
        onChange={toggleTheme}
        checked={checkedState}
      />
      <label htmlFor='checkbox' className={`${className} label`}>
        <FaRegMoon className='fa-moon' />
        <FaSun className='fa-sun' />
        <div className='ball'> </div>
      </label>
    </>
  );
};

export default SwitchTheme;
