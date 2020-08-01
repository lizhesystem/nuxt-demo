export default function ({ app: { $axios, $cookies, redirect } }) {
  $axios.onRequest((config) => {
    config.headers['X-Token'] = $cookies.get('token') || ''
    return config
  })
  $axios.onResponse((response) => {
    // if (/^[4|5]/.test(response.status)) {
    //   return Promise.reject(response.statusText)
    // }
    // eslint-disable-next-line no-console
    console.log('响应拦截')
  })
}
