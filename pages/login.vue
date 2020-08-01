<!--
 * 文件描述: login
 * @author Lz on 2020-07-30
 -->
<template>
  <div class="login-pancel">
    <h1 class="title">登录</h1>
    <el-input
      v-model="loginInfo.username"
      class="phoneNumber-input"
      placeholder="请输入手机号或邮箱"
      maxlength="64"
      @focus="currentFocus = 'phoneNumber'"
      @blur="currentFocus = ''"
    ></el-input>
    <el-input
      v-model="loginInfo.password"
      class="password-input"
      type="password"
      placeholder="请输入密码"
      maxlength="64"
      @focus="currentFocus = 'password'"
      @blur="currentFocus = ''"
      @keydown.enter.native="login"
    ></el-input>
    <el-button style="width: 100%; margin-top: 10px;" type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  asyncData(context) {
    console.log(context)
  },
  data() {
    return {
      loginInfo: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      if (this.loginInfo.username.trim() === '') {
        this.$message.warning('请输入账号')
        return
      }
      if (this.loginInfo.password.trim() === '') {
        this.$message.warning('请输入密码')
      }
      // TODO: 自己实现登录
      const { data: res } = await this.$api.login(this.loginInfo)
      if (res.code === 500) return this.$message.error(res.msg)
      if (res.token) {
        this.$cookies.set('token', res.token)
        this.$router.push('/')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login-pancel {
  position: relative;
  padding: 22px;

  .title {
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 3px;
    color: #bbb;
    font-weight: 600;
    cursor: pointer;
  }

  .phoneNumber-input,
  .password-input {
    margin-bottom: 8px;

    ::v-deep input::placeholder {
      color: #999;
    }
  }

  .submit-btn {
    margin-top: 5px;
    padding: 12px;
    background-color: $theme;
    color: #fff;
    text-align: center;
    font-size: 14px;
    border-radius: 2px;
    cursor: pointer;
  }
}
</style>
