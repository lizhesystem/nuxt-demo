<!--
 * 文件描述: 公共组件Top
 * @author Lz on 2020-07-29
 -->
<template>
  <div class="container-top">
    header
  </div>
</template>

<script>
export default {
  name: 'Top',
  components: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.container-top {
  height: 100px;
  line-height: 100px;
  font-size: 3em;
  text-align: center;
  background-color: $dangerColor;
  cursor: pointer;
  @include ellipsis();
}
</style>
