<template>
  <div>
    <div class="seach">
      <input class="seach-input" placeholder="请输入拼音or城市" v-model="keyword">
    </div>
    <div class="seach-list" v-show="show" ref="search">
      <ul>
        <li v-for="item of list" v-bind:key="item.id" class="seach-item border-bottom" v-on:click="clickcity(item.name)">
          {{item.name}}
        </li>
        <li class="seach-item border-bottom" v-show="!list.length">
          暂无数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'cityseach',
  props: ['cities'],
  data () {
    return {
      list: [],
      keyword: [],
      show: false
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  watch: {
    keyword () {
      if (this.keyword) {
        this.show = true
        const res = []
        for (let i in this.cities) {
          this.cities[i].forEach((val) => {
            if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1) {
              res.push(val)
            }
          })
        }
        this.list = res
      } else {
        this.show = false
      }
    }
  },
  methods: {
    clickcity (name) {
      this.$store.dispatch('changecity', name)
      this.show = false
      this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.seach
  background-color: $bgcolor
  height: .72rem
  padding: .1rem .2rem 0
  .seach-input
    box-sizing: border-box
    height: .62rem
    line-height: .62rem
    text-align: center
    width: 100%
    border-radius: .06rem
.seach-list
  background-color: #fff
  position: absolute
  overflow: hidden
  top: 1.64rem
  right: 0
  left: 0
  bottom: 0
  z-index: 1
  .seach-item
    line-height: .62rem
    padding-left: .4rem
    color: #666
</style>


