<template>
  <div class="cityheader">国内城市
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont" style="font-size:24px">&#xebef;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'cityheader'
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .cityheader
    overflow: hidden
    background-color: $bgcolor
    height: .86rem
    line-height: .86rem
    color: #fff
    text-align: center
    font-size: .32rem
    .header-left
      top: 0
      left: 0
      width: .64rem
      color: #fff
      float: left
</style>
