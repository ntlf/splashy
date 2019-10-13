import React, { useState, useEffect } from 'react';
import { UnsplashAPI } from '../api/index';
import Gallery from './Gallery';

function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await UnsplashAPI.getPhotos(1);

      setPhotos(data);
    };

    fetch();
  }, []);

  return (
    <div>
      <Gallery photos={photos} />
    </div>
  );
}

export default Home;
