import React, { useContext } from "react";

import "./characterDetail.scss";

import { MarvelContext } from "../../../context/provider/marvelApiContext";

const CharacterDetail = () => {
  const { hero } = useContext(MarvelContext);

  console.log(hero);

  const { name, thumbnail, description, comics } = hero;

  const hasDescription = () => {
    if (description === "") {
      return <p>This character has no description</p>;
    } else {
      return <p>{description}</p>;
    }
  };

  return (
    <>
      {Object.entries(hero).length > 1 ? (
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>{name}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <img
                src={
                  thumbnail.path + "/portrait_uncanny." + thumbnail.extension
                }
                alt=""
              />
            </div>
            <div className="col-12 col-md-8">
              {hasDescription()}
              <p>Appears in {comics.available} comics</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CharacterDetail;
