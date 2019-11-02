import React, { useContext } from 'react';

import { MarvelContext } from '../../context/provider/marvelApiContext';

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from '@material-ui/core';

const CharacterList = () => {
  const profile = useContext(MarvelContext);

  let heroes = [];

  if (profile.heroes !== undefined) {
    heroes = profile.heroes;
  }

  return (
    <div className="container">
      <div className="row">
        {heroes.map(hero => (
          <div key={hero.id} className="col-3">
            <Card>
              <CardActionArea>
                <CardMedia
                  image={
                    hero.thumbnail.path +
                    '/portrait_xlarge.' +
                    hero.thumbnail.extension
                  }
                  title={hero.name}
                />
                <CardContent>
                  <h2>{hero.name}</h2>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
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
