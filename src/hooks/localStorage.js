import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialState) {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);

    return JSON.parse(item) || initialState;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
