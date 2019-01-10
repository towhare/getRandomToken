import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost.com:2001',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    config.headers['X-Token'] = 'nyan'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

export function getRandomToken () {
  return service({
    url: '/getRandomToken',
    method: 'get',
    params: { token: 'aa' }
  })
}
export function getAllToken () {
  return service({
    url: '/getTokenList',
    method: 'get',
    params: { token: 'aaa' }
  })
}
