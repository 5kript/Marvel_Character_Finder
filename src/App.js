import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MarvelProvider } from './context/provider/marvelApiContext';

import './App.scss';

import CharacterList from './components/characterlist/CharacterList';
import SearchField from './components/searchfield/SearchField';

function App() {
  return (
    <MarvelProvider>
      <BrowserRouter>
        <div className="App">
          <SearchField />
          <CharacterList />
        </div>
      </BrowserRouter>
    </MarvelProvider>
  );
}

export default App;
