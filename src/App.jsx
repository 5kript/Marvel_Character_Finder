import React, { useEffect, useState } from 'react';
import useComicStore from './store/comicStore';

function App() {
  const { character, characters, fetchCharacters, fetchSingleCharacter } =
    useComicStore((state) => state);

  const [value, setValue] = useState('');

  useEffect(() => {
    if (value.length > 3) {
      fetchCharacters(value);
    }
  }, [value]);

  useEffect(() => {
    if (characters.length === 1) {
      fetchSingleCharacter(characters[0].id);
    }
  }, [characters]);

  console.log(character);

  return (
    <div className="App">
      <h1>Marvel Character Finder</h1>

      <label htmlFor="searchCharacters">Search for a character</label>
      <input
        name="searchCharacters"
        list="marvel-characters"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <datalist id="marvel-characters">
        {characters.length > 0
          ? characters.map((character, key) => (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <option key={key} value={character.name} />
            ))
          : null}
      </datalist>

      <div className="singleCharacter">
        {Object.keys(character).length !== 0 ? (
          <div className="charachter">
            <p>Name: {character.name}</p>
            <p>Number of Comics: {character.comics.available}</p>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt=""
            />
          </div>
        ) : (
          <p>Try Another Option</p>
        )}
      </div>
    </div>
  );
}

export default App;
