export default ({ app: { $request } }, inject) => {
  inject('api', {
    // 登录
    login(data) {
      return $request.post('/api/login', data)
    },
  })
}
