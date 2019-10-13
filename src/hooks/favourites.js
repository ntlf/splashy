import { useLocalStorage } from './localStorage';

export function useFavourites() {
  const [favourites, setFavourites] = useLocalStorage('splashy-favourites', []);

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
