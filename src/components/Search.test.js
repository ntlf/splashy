import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../themes';
import Search from './Search';

it('fires onSubmit with correct value', () => {
  const onSubmit = jest.fn();
  const testText = 'Test';
  const { getByTestId } = render(
    <ThemeProvider theme={lightTheme}>
      <Search onSubmit={onSubmit} />
    </ThemeProvider>
  );

  fireEvent.change(getByTestId('input'), {
    target: { value: testText }
  });
  fireEvent.submit(getByTestId('form'));

  expect(onSubmit).toHaveBeenCalled();
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith(testText);
});
