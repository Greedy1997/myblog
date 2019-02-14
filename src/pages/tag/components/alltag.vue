<template>
  <div class="tag-big">
    <Tag class="tag-tags" checkable :checked="showtag" color="primary" v-for="item of taglist" v-bind:key="item.id" v-on:click.native="showclicktag">{{item.tag}}</Tag>
  </div>
</template>

<script>
import { tag } from 'iview'
export default {
  name: 'alltag',
  components: {
    tag
  },
  data () {
    return {
      tagslist: [],
      showtag: false,
      taglist: [
        {id: '1', tag: 'JavaScript'}, {id: '2', tag: 'java'}, {id: '3', tag: 'android'}, {id: '4', tag: '标签4'}
      ]
    }
  },
  methods: {
    showclicktag (e) { // 把选中的标签放到数组里面 当标签被取消选中时踢出数组
      if (e.path[0].innerHTML && e.path[1].className.indexOf('checked') === -1) {
        this.tagslist.push(e.path[0].innerHTML)
      } else if (e.path[0].innerHTML && e.path[1].className.indexOf('checked') !== -1) {
        const thistag = e.path[0].innerHTML
        const tagthere = this.tagslist.indexOf(thistag)
        this.tagslist.splice(tagthere, 1)
      }
    }
  },
  mounted () {
  },
  watch: {
    tagslist () {
      this.$emit('tagslist', this.tagslist)
    }
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .tag-big
    justify-content:center;//子元素水平居中
    align-items:center;//子元素垂直居中
    display:-webkit-flex;
  .ivu-tag
    height: 23px;
</style>
