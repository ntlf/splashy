import { useLocalStorage } from './localStorage';
import { useMemo } from 'react';

const SPLASHY_THEME = 'splashy-theme';

export const useTheme = () => {
  const initialTheme = useMemo(() => {
    const localTheme = window.localStorage.getItem(SPLASHY_THEME);
    const darkPreferred =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    return localTheme ? localTheme : darkPreferred ? 'dark' : 'light';
  }, []);

  const [theme, setTheme] = useLocalStorage(SPLASHY_THEME, initialTheme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme];
};
