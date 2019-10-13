import React, { useState, useEffect } from 'react';
import { useFavourites } from '../hooks/favourites';
import { UnsplashAPI } from '../api/index';
import Gallery from './Gallery';

function Favourites() {
  const { favourites, remove } = useFavourites();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const promises = favourites.map(id => UnsplashAPI.getPhoto(id));

      const data = await Promise.all(promises);

      setPhotos(data);
    };

    fetch();
  }, [favourites]);

  return (
    <div>
      {!favourites.length && <div>Your favourites list is empty!</div>}
      <Gallery
        photos={photos}
        onPhotoClick={id => remove(id)}
        renderHoverEmoji={() => '💔'}
      />
    </div>
  );
}

export default Favourites;
