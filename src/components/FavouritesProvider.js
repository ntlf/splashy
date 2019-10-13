import React, { createContext } from 'react';
import { useLocalStorage } from '../hooks/localStorage';

export const FavouritesContext = createContext();

export default function FavouritesProvder(props) {
  const [favourites, setFavourites] = useLocalStorage('splashy-favourites', []);

  return (
    <FavouritesContext.Provider
      value={[favourites, setFavourites]}
      {...props}
    />
  );
}
