import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MarvelProvider } from "./context/provider/marvelApiContext";

import "./App.scss";
import Landing from "./components/pages/Landing";
import CharacterDetail from "./components/character/characterdetail/CharacterDetail";

function App() {
  return (
    <MarvelProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <Landing />} />
            <Route path="/detail/:heroId" render={() => <CharacterDetail />} />
          </Switch>
        </div>
      </BrowserRouter>
    </MarvelProvider>
  );
}

export default App;
