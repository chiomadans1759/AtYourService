import axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.unsplash.com/photos/`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Client-ID c-jG-ORUn49U6d9fI6l4D2RSShCbvI8rNjkewWwiF7U`,
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
