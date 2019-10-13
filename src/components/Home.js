import React, { useState, useEffect } from 'react';
import { UnsplashAPI } from '../api/index';
import Gallery from './Gallery';
import Search from './Search';

function Home() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      let data;

      if (query) {
        data = await UnsplashAPI.searchPhotos(page, query);
      } else {
        data = await UnsplashAPI.getPhotos(page);
      }

      setPhotos(photos => [...photos, ...data]);
    };

    fetch();
  }, [query, page]);

  return (
    <div>
      <Search
        onSubmit={value => {
          if (value !== query) {
            setPhotos([]);
            setQuery(value);
          }
        }}
      />
      <Gallery photos={photos} />
      <button onClick={() => setPage(page => page + 1)}>Load more</button>
    </div>
  );
}

export default Home;
