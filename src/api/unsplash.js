import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
  }
});

export async function getPhotos(page) {
  try {
    const response = await unsplash.get('/photos', {
      params: {
        page
      }
    });

    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getPhoto(id) {
  try {
    const response = await unsplash.get(`/photos/${id}`);

    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function searchPhotos(page, query) {
  try {
    const response = await unsplash.get('/search/photos', {
      params: {
        query,
        page
      }
    });

    return response.data.results;
  } catch (err) {
    console.error(err);
  }
}
