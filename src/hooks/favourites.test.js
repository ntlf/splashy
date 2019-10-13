import { act, renderHook } from '@testing-library/react-hooks';
import { useFavourites } from './favourites';

it('adds and removes items correctly', () => {
  const testItem1 = 'id-1';
  const testItem2 = 'id-2';
  const testItem3 = 'id-3';
  const { result } = renderHook(() => useFavourites());

  act(() => {
    result.current.add(testItem1);
  });

  act(() => {
    result.current.add(testItem2);
  });

  act(() => {
    result.current.add(testItem3);
  });

  act(() => {
    result.current.remove(testItem2);
  });

  expect(result.current.favourites).toContain(testItem1);
  expect(result.current.favourites).toContain(testItem3);
  expect(result.current.favourites).not.toContain(testItem2);
  expect(result.current.favourites.length).toBe(2);
});
