import React from "react";

import CharacterList from "../character/CharacterList";
import SearchField from "../searchfield/SearchField";

function Landing(props) {
  return (
    <>
      <SearchField />
      <CharacterList />
    </>
  );
}

export default Landing;
