import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Favourites from './Favourites';
import GlobalStyle from './GlobalStyle';
import Home from './Home';
import { useTheme } from '../hooks/theme';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../themes';

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <button onClick={() => toggleTheme()}>{theme}</button>
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
