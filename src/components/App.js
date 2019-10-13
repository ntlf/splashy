import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../themes';
import { Button, Box } from './common';
import NavItem from './common/NavItem';
import Favourites from './Favourites';
import FavouritesProvder from './FavouritesProvider';
import GlobalStyle from './GlobalStyle';
import Home from './Home';
import {
  default as AppThemeProvider,
  ThemeContext as AppThemeContext
} from './ThemeProvider';

function App() {
  return (
    <FavouritesProvder>
      <AppThemeProvider>
        <AppThemeContext.Consumer>
          {([theme, setTheme]) => (
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
                      <Button
                        onClick={() =>
                          setTheme(theme === 'dark' ? 'light' : 'dark')
                        }
                      >
                        {theme}
                      </Button>
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
          )}
        </AppThemeContext.Consumer>
      </AppThemeProvider>
    </FavouritesProvder>
  );
}

export default App;
