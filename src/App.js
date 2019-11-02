import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MarvelProvider } from './context/provider/marvelApiContext';

import './App.scss';

function App() {
  return (
    <MarvelProvider>
      <BrowserRouter>
        <div className="App">
          <h1>Whaat?</h1>
        </div>
      </BrowserRouter>
    </MarvelProvider>
  );
}

export default App;
