import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { useTheme } from './theme';
import ThemeProvider from '../components/ThemeProvider';

it('toggles theme', () => {
  const wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;
  const { result } = renderHook(() => useTheme(), { wrapper });
  const initialTheme = result.current[0];

  act(() => {
    const toggleTheme = result.current[1];

    toggleTheme();
  });

  const theme = result.current[0];

  expect(theme).not.toBe(initialTheme);
});
