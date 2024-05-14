import axios from 'axios';

const apis = axios.create({
  baseURL: 'https://api.github.com/users/vuejs',
  timeout: 3000,
});

apis.interceptors.request.use(
  (config) => {
    if (config.isAuth === true) {
      config.headers = {
        Authorization: `token ${process.env.VUE_APP_USER_TOKEN}`,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apis.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apis;
