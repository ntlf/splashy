import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeProvider';

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(`This hook must be used within a ThemeProvider`);
  }

  const [theme, setTheme] = context;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme];
}
