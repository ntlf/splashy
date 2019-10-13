import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Favourites from './Favourites';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
