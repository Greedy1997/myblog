<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.cityname}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" v-bind:key="item.id">
            <div class="button" v-on:click="clickcity(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,index) of cities" v-bind:key="index">
        <div class="title border-topbottom" :ref="index">{{index}}</div>
        <div class="item-list" v-for="items of item" v-bind:key="items.id">
          <div class="item border-bottom" v-on:click="clickcity(items.name)">
            {{items.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'cityList',
  props: ['cities', 'hotCities', 'letter'],
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  computed: {
    ...mapState({
      cityname: 'city'
    })
  },
  watch: {
    letter () {
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  },
  methods: {
    ...mapActions(['changecity']),
    clickcity (name) {
      this.changecity(name)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.7rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
