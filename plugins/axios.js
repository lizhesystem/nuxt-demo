export default function ({ $axios, redirect }) {
  $axios.defaults.timeout = 30000
  $axios.interceptors.request.use((config) => {
    // config.headers['X-Token'] = $cookies.get('token') || ''
    // do something..
    return config
  })
  $axios.interceptors.response.use((response) => {
    // if (/^[4|5]/.test(response.status)) {
    //   return Promise.reject(response.statusText)
    // }
    return response
  })
}
