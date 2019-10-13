import { useContext } from 'react';
import { FavouritesContext } from '../components/FavouritesProvider';

export function useFavourites() {
  const context = useContext(FavouritesContext);

  if (!context) {
    throw new Error(`This hook must be used within a FavoritesProvider`);
  }

  const [favourites, setFavourites] = context;

  const add = id => {
    if (!favourites.includes(id)) {
      setFavourites([...favourites, id]);
    }
  };

  const remove = id => {
    setFavourites(favourites.filter(item => item !== id));
  };

  return { favourites, add, remove };
}
