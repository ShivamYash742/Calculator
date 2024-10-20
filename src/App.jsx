import React, { useState } from 'react';
import Calculator from './Calculator';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Calculator darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
