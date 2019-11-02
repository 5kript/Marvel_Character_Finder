import React, { useContext, useState } from 'react';

import { MarvelContext } from '../../context/provider/marvelApiContext';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const initialState = {
  heroname: ''
};

const SearchField = () => {
  const profile = useContext(MarvelContext);
  const [heroName, setName] = useState(initialState);

  const onChange = e => {
    const { name, value } = e.target;

    if (value === '') {
      setName(prevState => ({ ...prevState, [name]: value }));
      return profile.getHeroes();
    }

    profile.getHeroByName(value);
    setName(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Search for a character"
              margin="normal"
              name="heroname"
              fullWidth
              value={heroName.heroname}
              onChange={onChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
