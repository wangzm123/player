import axios from 'axios'
import store from '../store'
export default function (url, options) {
  let headers = {};
   store.state.isLoading = true
  if (options && options.method !== 'GET') {
    headers = {
      'content-type': 'application/json'
    }
  }
  if (options) {
    options.params.appkey = '97a1ad26675a9c0e'
  } else {
    options = {
      params: {
        appkey: '97a1ad26675a9c0e'
      }
    }
  }
  return axios.request(url, { ...options })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({
      data
    }))
    .catch(err => ({
      err
    }))
}

function checkStatus(response) {
  store.state.isLoading = true
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const err = new Error
  error.response = response;
  throw error;
}

function parseJSON(response) {
  store.state.isLoading = true
  return response;
}
