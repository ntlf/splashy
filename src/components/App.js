import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../hooks/theme';
import { darkTheme, lightTheme } from '../themes';
import { Button } from './common';
import Favourites from './Favourites';
import GlobalStyle from './GlobalStyle';
import Home from './Home';

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <Button onClick={() => toggleTheme()}>{theme}</Button>
        <GlobalStyle />
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
      </>
    </ThemeProvider>
  );
}

export default App;
