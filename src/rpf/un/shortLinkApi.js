function shortLinkApi(axiosInstance, token) {
  if (typeof token !== 'string') {
    throw new Error('token is required and should be a string');
  }
  return function postShortLink({ long_link }) {
    return axiosInstance.post('https://d.h5no1.com/api/client/link/create', {
      long_link,
      token
    });
  };
}

export default shortLinkApi;
