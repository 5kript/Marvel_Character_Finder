import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MarvelProvider } from './context/provider/marvelApiContext';

import './App.scss';

import CharacterList from './components/characterlist/CharacterList';

function App() {
  return (
    <MarvelProvider>
      <BrowserRouter>
        <div className="App">
          <CharacterList></CharacterList>
        </div>
      </BrowserRouter>
    </MarvelProvider>
  );
}

export default App;
