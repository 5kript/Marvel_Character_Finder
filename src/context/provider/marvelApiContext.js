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
      // getComics();
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

  // eslint-disable-next-line no-unused-vars
  const getComics = () => {
    marvelApiLogic.getComics().then(res => {
      console.log(res);
    });
  };

  const dataRenderControl = () => {
    if (heroes.length > 1 || Object.entries(hero).length > 1) {
      return props.children;
    } else {
      return null;
    }
  };

  return (
    <MarvelContext.Provider
      value={{ heroes, getHeroById, hero, getHeroByName, getHeroes }}
    >
      {dataRenderControl()}
    </MarvelContext.Provider>
  );
};
