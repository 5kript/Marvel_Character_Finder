import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { MarvelContext } from "../../context/provider/marvelApiContext";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from "@material-ui/core";

const CharacterList = () => {
  const { heroes, getHeroById } = useContext(MarvelContext);

  return (
    <div className="container">
      <div className="row">
        {heroes.map(hero => (
          <div key={hero.id} className="col-6 col-sm-3 mb-4">
            <Card>
              <CardMedia
                image={
                  hero.thumbnail.path +
                  "/portrait_xlarge." +
                  hero.thumbnail.extension
                }
                title={hero.name}
              />
              <CardContent>
                <h2>{hero.name}</h2>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <Link
                    onClick={() => getHeroById(hero.id)}
                    to={`/detail/${hero.id}`}
                  >
                    View detail
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
