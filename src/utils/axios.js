import axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.unsplash.com/photos/`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Client-ID a6rTsR31F367ghN5g0iqEHx4orZO1ssJFhS1XpPBkQU`,
  },
});

// instance.interceptors.request.use(
//   (config) => {
//     const configInstance = { ...config };
//     configInstance.headers.Authorization = authUtils.getUserToken();
//     return configInstance;
//   },
//   (error) => Promise.reject(error)
// );
export default instance;
