import styled from 'styled-components';
import { color, layout, space, typography } from 'styled-system';

const Input = styled('input')`
  ${space}
  ${layout}
  ${color}
  ${typography}

  color: ${({ theme }) => theme.colors.inputColor};
  background: ${({ theme }) => theme.colors.inputBackground};
  border: none;
`;

Input.defaultProps = {
  p: 2,
  m: 1,
  fontSize: 2
};

export default Input;
