import React, { useState } from 'react';
import './Calculator.css';

function Calculator({ darkMode, setDarkMode }) {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Replace custom symbols with JavaScript-compatible operators
        const formattedInput = input.replace(/×/g, '*').replace(/÷/g, '/');
        setResult(eval(formattedInput).toString()); // Calculate the result
      } catch {
        setResult('Error');
      }
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className={darkMode ? 'calculator dark' : 'calculator'}>
      <div className="theme-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌞 Light' : '🌙 Dark'}
        </button>
      </div>
      <div className="display">
        <span>{input || '0'}</span>
        <h1>{result || '0'}</h1>
      </div>
      <div className="buttons">
        {['AC', '+/-', '%', '÷', 7, 8, 9, '×', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='].map((item) => (
          <button key={item} onClick={() => handleClick(item.toString())}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
