export default function (context) {
  const { app } = context
  const cookiesToken = app.$cookies.get('token')
  if (!cookiesToken) {
    // TODO: 没有token 跳转到 需要跳转的页面
    // 每次跳转路由 验证登录状态是否过期
    // return app.$api.isAuth().then((res) => {
    //   if (res.s === 1) {
    //     if (res.d.isExpired) {
    //       // 过期 移除登陆验证信息
    //       app.$utils.removeAuthInfo(context)
    //     } else {
    //       // 未过期 重新设置存储
    //       const stateToken = store.state.auth.token
    //       if (cookiesToken && stateToken === '') {
    //         store.commit('auth/UPDATE_USERINFO', app.$cookies.get('userInfo'))
    //         store.commit('auth/UPDATE_USERID', app.$cookies.get('userId'))
    //         store.commit('auth/UPDATE_CLIENTID', app.$cookies.get('clientId'))
    //         store.commit('auth/UPDATE_TOKEN', app.$cookies.get('token'))
    //       }
    //     }
    //   }
    // })
  }
}
