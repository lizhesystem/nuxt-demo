<!--
 * 文件描述: list
 * @author Lz on 2020-07-29
 -->
<template>
  <div>
    <header class="header-list">list</header>
    <section class="section-container">
      <div class="section-container--img">
        <img src="../assets/images/hua.jpg" alt="" />
      </div>
      <div class="section-container--router">
        <span>子路由切换</span>
      </div>
      <nuxt-link to="/list/listdetail">
        <el-link class="link-text" type="primary">listdetail路由</el-link>
      </nuxt-link>
      <nuxt-link to="/list/1">
        <el-link class="link-text" type="primary">id详情路由</el-link>
      </nuxt-link>
      <nuxt-child />
    </section>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  name: 'List',
  components: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.header-list {
  text-align: center;
  font-size: 3em;
  width: 600px;
  height: 50px;
  float: left;
  background-color: darkgoldenrod;
}

.section-container--router {
  height: 50px;
  width: 600px;
  background-color: lemonchiffon;
  text-align: center;
  font-size: 2em;
}
.link-text {
  font-size: 2em;
}
</style>
