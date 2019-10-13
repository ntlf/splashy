import styled from 'styled-components';
import { color, layout, space, typography } from 'styled-system';
import { NavLink } from 'react-router-dom';

const NavItem = styled(NavLink)`
  ${space}
  ${layout}
  ${color}
  ${typography}

  color: ${({ theme }) => theme.colors.linkColor};
  text-decoration: none;

  &.active {
    font-weight: bold;
  }

  margin-right: 16px;
`;

NavItem.defaultProps = {
  p: 2,
  m: 1,
  fontSize: 3
};

export default NavItem;
