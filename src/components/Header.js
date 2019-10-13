import React from 'react';
import { useTheme } from '../hooks/theme';
import { Box, Button } from './common';
import NavItem from './common/NavItem';

function Header() {
  const [theme, toggleTheme] = useTheme();

  return (
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
  );
}

export default Header;
