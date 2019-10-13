import React, { useEffect, useReducer } from 'react';
import { UnsplashAPI } from '../api';
import { useFavourites } from '../hooks/favourites';
import { Button } from './common';
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
  const { favourites, add, remove } = useFavourites();

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
        onPhotoClick={id => (favourites.includes(id) ? remove(id) : add(id))}
        renderHoverEmoji={id => (favourites.includes(id) ? '💔' : '❤️')}
      />
      <Button onClick={() => dispatch({ type: 'loadMore' })}>Load more</Button>
    </div>
  );
}

export default Home;
