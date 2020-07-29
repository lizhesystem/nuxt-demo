export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    // eslint-disable-next-line no-console
    console.log('请求拦截')
  })
  $axios.onResponse((response) => {
    // if (/^[4|5]/.test(response.status)) {
    //   return Promise.reject(response.statusText)
    // }
    // eslint-disable-next-line no-console
    console.log('响应拦截')
  })
}
