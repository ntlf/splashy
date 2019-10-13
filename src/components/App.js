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
import { Button, Box } from './common';
import NavItem from './common/NavItem';
import Favourites from './Favourites';
import GlobalStyle from './GlobalStyle';
import Home from './Home';

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        <Router>
          <>
            <Box display="flex" alignItems="center" p={2}>
              <NavItem to="/" activeClassName="active" exact>
                Home
              </NavItem>
              <NavItem to="/favourites" activeClassName="active">
                Favourites
              </NavItem>
              <Box flex="1" />
              <Button onClick={() => toggleTheme()}>{theme}</Button>
            </Box>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/favourites">
                <Favourites />
              </Route>
              <Redirect to="/" />
            </Switch>
          </>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
