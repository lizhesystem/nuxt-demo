export default ({ app: { $axios } }, inject) => {
  const requestList = {}
  const methods = ['get', 'post', 'put', 'delete']
  methods.forEach((method) => {
    const dataKey = method === 'get' ? 'params' : 'params'
    requestList[method] = function (url, data) {
      return $axios({
        method,
        url,
        [dataKey]: data,
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err)
        return {
          s: 0,
          d: {},
          errors: [err],
        }
      })
    }
  })
  inject('request', requestList)
}
