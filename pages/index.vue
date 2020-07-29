<template>
  <div class="container">
    <el-button>按钮</el-button>
    <div class="container-link">
      <div class="item">
        <nuxt-link to="/search">
          <div class="link-text">search路由</div>
        </nuxt-link>
      </div>
      <div class="item">
        <nuxt-link to="/list">
          <div class="link-text">list路由</div>
        </nuxt-link>
      </div>
      <div class="item">
        <el-link class="link-text" type="danger" @click="$router.push({ name: 'detail' })">detail路由</el-link>
      </div>
    </div>
    <div class="container-svg">
      <SvgIcon style="width: 100px;" name="lv-4"></SvgIcon>
      <SvgIcon style="width: 100px;" name="notice-active"></SvgIcon>
    </div>
    <div style="width: 300px;">
      <span>{{ data }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  async asyncData({ $axios }) {
    const data = await $axios.$get('/profile')
    return {
      data,
    }
  },
  data() {
    return {}
  },
  computed: {},
  // 进度条
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 500px;
  background-color: #c7c7c7;
  margin-top: 30px;
}

.container-link {
  margin-top: 20px;
  display: flex;

  .link-text {
    font-size: 2em;
    font-weight: 700;
    padding-left: 30px;
  }
}
</style>
