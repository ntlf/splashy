import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../themes';
import Favourites from './Favourites';
import FavouritesProvder from './FavouritesProvider';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
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
                    <Header />
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
