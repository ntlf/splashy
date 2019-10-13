import React from 'react';
import styled from 'styled-components';

const Image = styled('img')`
  max-width: 100%;
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.3);
`;

const Grid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  grid-gap: 16px;
  align-items: center;
  padding: 16px;
`;

function Gallery({ photos, onPhotoClick }) {
  return (
    <Grid>
      {photos.map(({ id, alt_description: alt, urls: { regular: url } }) => (
        <Image key={id} src={url} alt={alt} onClick={() => onPhotoClick(id)} />
      ))}
    </Grid>
  );
}

export default Gallery;
