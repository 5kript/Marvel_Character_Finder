import React, { useState, createContext, useEffect } from 'react';

import marvelApiLogic from '../logic/marvelApiLogic';

export const MarvelContext = createContext();

export const MarvelProvider = props => {
  const [heroes, setHeroes] = useState();
  const [hero, setHero] = useState();

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

  const getHeroById = id => {
    marvelApiLogic.getHeroById(id).then(res => {
      setHero(res.data.results);
    });
  };

  return (
    <MarvelContext.Provider
      value={{
        heroes,
        getHeroes,
        getHeroByName,
        hero,
        getHeroById
      }}
    >
      {props.children}
    </MarvelContext.Provider>
  );
};
