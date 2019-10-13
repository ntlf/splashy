import React, { useEffect, useReducer } from 'react';
import { UnsplashAPI } from '../api/index';
import { useLocalStorage } from '../hooks/localStorage';
import Gallery from './Gallery';
import Search from './Search';

const initialState = {
  photos: [],
  query: '',
  page: 1
};

function reducer(state, action) {
  switch (action.type) {
    case 'loadMore':
      return { ...state, page: state.page + 1 };
    case 'search':
      return { ...state, page: 1, query: action.payload, photos: [] };
    case 'loaded':
      return { ...state, photos: [...state.photos, ...action.payload] };
    default:
      return state;
  }
}

function Home() {
  const [{ photos, query, page }, dispatch] = useReducer(reducer, initialState);
  const [favourites, setFavourites] = useLocalStorage('splashy-favourites', []);

  useEffect(() => {
    const fetch = async () => {
      let data;

      if (query) {
        data = await UnsplashAPI.searchPhotos(page, query);
      } else {
        data = await UnsplashAPI.getPhotos(page);
      }

      dispatch({ type: 'loaded', payload: data });
    };

    fetch();
  }, [query, page]);

  return (
    <div>
      <Search
        onSubmit={value => {
          if (value !== query) {
            dispatch({ type: 'search', payload: value });
          }
        }}
      />
      <Gallery
        photos={photos}
        onPhotoClick={id =>
          favourites.includes(id)
            ? setFavourites(favourites.filter(item => item !== id))
            : setFavourites(favourites => [...favourites, id])
        }
      />
      <button onClick={() => dispatch({ type: 'loadMore' })}>Load more</button>
    </div>
  );
}

export default Home;
