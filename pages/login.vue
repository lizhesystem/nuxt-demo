<!--
 * 文件描述: login
 * @author Lz on 2020-07-30
 -->
<template>
  <div class="login-pancel">
    <h1 class="title">登录</h1>
    <el-input
      v-model="loginInfo.account"
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
  data() {
    return {
      loginInfo: {
        account: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      if (this.loginInfo.account.trim() === '') {
        this.$message.warning('请输入账号')
        return
      }
      if (this.loginInfo.password.trim() === '') {
        this.$message.warning('请输入密码')
      }
      try {
        const resource = await this.$auth.loginWith('local', { data: this.loginInfo })
        console.log(resource)
      } catch (err) {
        console.log(err)
      }
      // const res = await this.ctx.$api.loginAuth({
      //   phoneNumber: this.phoneNumber,
      //   password: this.password,
      // })

      // 登录成功
      // if (res.token) {
      //   this.ctx.$utils.setAuthInfo(this.ctx, res)
      //   this.resolve()
      //   location.reload()
      //   this.hideModal()
      // } else {
      //   this.$message.error('登录失败，请重试')
      // }
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
