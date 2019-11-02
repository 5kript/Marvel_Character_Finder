import React, { useContext } from 'react';

import { MarvelContext } from '../../context/provider/marvelApiContext';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const CharacterList = () => {
  const profile = useContext(MarvelContext);

  let heroes = [];

  if (profile.heroes !== undefined) {
    heroes = profile.heroes;
  }

  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  }));

  const classes = useStyles();

  return (
    <div className="container">
      <div className="row">
        {heroes.map(hero => (
          <div key={hero.id} className="col">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={
                    hero.thumbnail.path +
                    '/portrait_xlarge.' +
                    hero.thumbnail.extension
                  }
                  title="Contemplative Reptile"
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
