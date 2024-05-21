import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Change this to your backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchAllPlaylistItems = async () => {
  try {
    const response = await api.get('/all_items');
    return response.data;
  } catch (error) {
    console.error('Error fetching playlist items:', error);
    throw error;
  }
};

export const fetchSongByTitle = async (title) => {
  try {
    const response = await api.get(`/playlist/${title}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching song by title:', error);
    throw error;
  }
};

export const rateSong = async (title, rating) => {
  try {
    const response = await api.post('/rate_song', { title, rating });
    return response.data;
  } catch (error) {
    console.error('Error rating song:', error);
    throw error;
  }
};
