import React, { useState } from 'react';
import Desafio1 from './Components/Desafio1';
import Desafio2 from './Components/Desafio2';
import Desafio3 from './Components/Desafio3';
import Desafio4 from './Components/Desafio4';
import Desafio5 from './Components/Desafio5';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`} data-testid="app-container">
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
      <Desafio1 />
      <Desafio2 />
      <Desafio3 />
      <Desafio4 />
      <Desafio5 />
    </div>
  );
}

export default App;
