export default {
  /**
   * 设置登录验证信息
   * @param {object} ctx - 服务端传入context 客户端传入this
   * @param {object} res - 登录验证信息
   */
  setAuthInfo(ctx, res) {
    let $cookies, $store
    // 客户端
    if (process.client) {
      $cookies = ctx.$cookies
      $store = ctx.$store
    }

    if ($cookies && $store) {
      $cookies.set('token', res.token)
      $cookies.set('userInfo', res.user)
      // $store.commit('auth/UPDATE_USERINFO', res.user)
      // $store.commit('auth/UPDATE_CLIENTID', res.clientId)
      // $store.commit('auth/UPDATE_TOKEN', res.token)
      // $store.commit('auth/UPDATE_USERID', res.userId)
    }
  },
}
