import axios from 'axios';

 axios.interceptors.request.use(config => {
    const token = localStorage.getItem('access-token')
    config.headers['Authorization'] = `Bearer ${token}`
    config.baseURL = 'http://localhost/api'
    return config
  }, err => {
    return Promise.reject(err)
  })

export default axios;