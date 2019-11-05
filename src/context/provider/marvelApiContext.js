import React, { useState, createContext, useEffect } from "react";

import marvelApiLogic from "../logic/marvelApiLogic";

export const MarvelContext = createContext();

export const MarvelProvider = props => {
  const [heroes, setHeroes] = useState([]);
  const [hero, setHero] = useState({});

  useEffect(() => {
    marvelApiLogic.fetchHero().then(res => {
      setHeroes(res.data.results);
      //TODO: remove line below when detail page is ready
      // this is just for development
      setHero(res.data.results[0]);
    });
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
      setHero(res.data.results[0]);
    });
  };

  return (
    <MarvelContext.Provider
      value={{ heroes, getHeroById, hero, getHeroByName, getHeroes }}
    >
      {props.children}
    </MarvelContext.Provider>
  );
};
