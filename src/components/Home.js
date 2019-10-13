import React, { useState, useEffect } from 'react';
import { UnsplashAPI } from '../api/index';
import Gallery from './Gallery';
import Search from './Search';

function Home() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const data = await UnsplashAPI.getPhotos(1);

      setPhotos(data);
    };

    fetch();
  }, []);

  return (
    <div>
      <Search onSubmit={value => setQuery(value)} />
      <Gallery photos={photos} />
    </div>
  );
}

export default Home;
