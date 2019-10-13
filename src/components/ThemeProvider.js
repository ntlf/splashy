import React, { useMemo, createContext } from 'react';
import { useLocalStorage } from '../hooks/localStorage';

const SPLASHY_THEME = 'splashy-theme';

export const ThemeContext = createContext();

export default function ThemeProvider(props) {
  const initialTheme = useMemo(() => {
    const localTheme = window.localStorage.getItem(SPLASHY_THEME);
    const darkPreferred =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    return localTheme ? localTheme : darkPreferred ? 'dark' : 'light';
  }, []);

  const [theme, setTheme] = useLocalStorage(SPLASHY_THEME, initialTheme);

  return <ThemeContext.Provider value={[theme, setTheme]} {...props} />;
}
