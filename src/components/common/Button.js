import styled from 'styled-components';
import { color, layout, space, typography } from 'styled-system';

const Button = styled('button')`
  ${space}
  ${layout}
  ${color}
  ${typography}

  color: ${({ theme }) => theme.colors.buttonColor};
  background: ${({ theme }) => theme.colors.buttonBackground};
  border: none;
  text-transform: uppercase;
  font-weight: bold;
`;

Button.defaultProps = {
  px: 3,
  py: 2,
  m: 1,
  fontSize: 2
};

export default Button;
