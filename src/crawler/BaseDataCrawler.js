const axios = require('axios');

const BASE_URL = 'http://www.caughtontape.tv';

const createRequest = (options = {}) => {
  console.log('log:', options);
  return axios.create(Object.assign({
    baseURL: BASE_URL + options.url,
    // baseURL: BASE_URL
  }, {}));
};

const createRequestUrl = (url = BASE_URL, options = {}) => {
  console.log('log:', url);
  return axios.create(Object.assign({
    baseURL: url
  }, options));
};

const base = {
  BASE_URL,
  createRequest,
  createRequestUrl,
};

module.exports = base;
