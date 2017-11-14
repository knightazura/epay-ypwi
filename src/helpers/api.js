import axios from 'axios'
const backend = `http://localhost:1705` // or epay-ypwi.dev

export function get (url) {
  return axios({
    method: 'GET',
    url: backend + url
  })
}

export function post (url, payload) {
  return axios({
    method: 'POST',
    url: backend + url,
    data: payload
  })
}

// "delete" is reserved keyword
export function del (url) {
  return axios({
    method: 'DELETE',
    url: backend + url
  })
}

export function interceptors (callback) {
  axios.interceptors.response.use((res) => {
    return res
  }, (err) => {
    callback(err)
    return Promise.reject(err)
  })
}
