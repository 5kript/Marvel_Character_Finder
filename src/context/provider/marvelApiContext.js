import React, { useState, createContext, useEffect } from 'react';

import marvelApiLogic from '../logic/marvelApiLogic';

export const MarvelContext = createContext();

export const MarvelProvider = props => {
  const [heroes, setHeroes] = useState();

  useEffect(() => {
    getHeroes();
  }, []);

  const getHeroes = () => {
    marvelApiLogic.fetchHero().then(res => {
      setHeroes(res.data.results);
    });
  };

  const getHeroByName = letter => {
    marvelApiLogic.getHeroByName(letter).then(res => {
      setHeroes(res.data.results);
    });
  };

  return (
    <MarvelContext.Provider
      value={{
        heroes,
        getHeroes,
        getHeroByName
      }}
    >
      {props.children}
    </MarvelContext.Provider>
  );
};
