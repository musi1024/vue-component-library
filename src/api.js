import axios from 'axios';

const api = {
  instance: axios.create({
    baseURL: ``,
    withCredentials: true,
    timeout: 5000
  })
};

api.instance.interceptors.response.use(
  res => {
    const { data } = res;
    if (!data.ok) {
      return Promise.reject(data);
    }
    return Promise.resolve(data);
  },
  err => {
    console.error(err.message);
    return Promise.reject(err);
  }
);

export default api;