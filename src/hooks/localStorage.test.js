import { act, renderHook } from '@testing-library/react-hooks';
import { useLocalStorage } from './localStorage';

it('stores value', () => {
  const testValue = 'test-value';
  const testKey = 'test-key';

  const { result } = renderHook(() => useLocalStorage(testKey));

  act(() => {
    const setValue = result.current[1];

    setValue(testValue);
  });

  const value = result.current[0];

  expect(value).toBe(testValue);
  expect(JSON.parse(window.localStorage.getItem(testKey))).toBe(testValue);
});
