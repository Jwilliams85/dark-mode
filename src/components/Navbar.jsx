
import React, { useState } from 'react';
import React from 'react';
import useDarkMode from '../hooks/useDarkMode'

 const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }
  