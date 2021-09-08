import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [showImage, setShowImage] = useState(false);
  const toggle = () => {
    setShowImage(!showImage);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={toggle}>{showImage ? 'Esconder' : 'Mostrar'}</button>
        {/* SE O SHOWIMAGE FOR TRUE ELE MOSTRARÁ A IMAGEM */}
        {showImage && (<img src={logo} className="App-logo" alt="logo" />)}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
