import axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.unsplash.com/photos`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Client-ID a6rTsR31F367ghN5g0iqEHx4orZO1ssJFhS1XpPBkQU`,
  },
});
export default instance;
