import React, { useContext } from 'react';

import { MarvelContext } from '../../context/provider/marvelApiContext';

const CharacterDetail = () => {
  const {hero} = useContext(MarvelContext);

  let currentHero = {};

  if (hero !== undefined) {
    currentHero = hero[0];
  }

  console.log(currentHero);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>{currentHero.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;

