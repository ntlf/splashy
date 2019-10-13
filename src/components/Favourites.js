import React, { useState, useEffect } from 'react';
import { useFavourites } from '../hooks/favourites';
import { UnsplashAPI } from '../api';
import Gallery from './Gallery';
import { Box } from './common';

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
      {!favourites.length && (
        <Box fontSize={3} p={3} textAlign="center">
          Your favourites list is empty!
        </Box>
      )}
      <Gallery
        photos={photos}
        onPhotoClick={id => remove(id)}
        renderHoverEmoji={() => '💔'}
      />
    </div>
  );
}

export default Favourites;
