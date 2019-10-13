import { act, renderHook } from '@testing-library/react-hooks';
import { useTheme } from './theme';

it('toggles theme', () => {
  const { result } = renderHook(() => useTheme());
  const initialTheme = result.current[0];

  act(() => {
    const toggleTheme = result.current[1];

    toggleTheme();
  });

  const theme = result.current[0];

  expect(theme).not.toBe(initialTheme);
});
