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

const Layer = styled('span')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  font-size: 64px;
  opacity: 0.7;
`;

const Container = styled('div')`
  position: relative;

  :hover {
    ${Layer} {
      visibility: visible;
    }
  }
`;

function Gallery({ photos, onPhotoClick, renderHoverEmoji }) {
  return (
    <Grid>
      {photos.map(({ id, alt_description: alt, urls: { regular: url } }) => (
        <Container key={id} onClick={() => onPhotoClick(id)}>
          <Image src={url} alt={alt} />
          <Layer>{renderHoverEmoji && renderHoverEmoji(id)}</Layer>
        </Container>
      ))}
    </Grid>
  );
}

export default Gallery;
