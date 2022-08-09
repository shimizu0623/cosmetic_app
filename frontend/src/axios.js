import axios from 'axios';

 axios.interceptors.request.use(config => {
    const token = localStorage.getItem('access-token')
    config.headers['Authorization'] = `Bearer ${token}`
    //↓※commitしない！
    // config.baseURL = 'https://api.cosmetic-search.net/api'
    config.baseURL = 'http://localhost/api'
    return config
  }, err => {
    return Promise.reject(err)
  })

export default axios;