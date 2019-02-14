<template>
  <div class="list">
    <ul class="list-item"
        v-for="item of letters"
        v-bind:key="item"
        v-on:touchstart="touchstart"
        v-on:touchmove="touchmove"
        v-on:touchend="touchend">
      <li v-on:click="clickletter" :ref="item">
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'cityalphabet',
  props: ['cities'],
  data () {
    return {
      touchstatus: false,
      startY: 0
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    clickletter (e) {
      this.$emit('change', e.currentTarget.innerText)
    },
    touchstart () {
      this.touchstatus = true
    },
    touchmove (e) {
      const touchY = e.touches[0].clientY - 74
      const touchnumber = Math.floor((touchY - this.startY) / 20)
      if (touchnumber >= 0 && touchnumber < this.letters.length) {
        this.$emit('change', this.letters[touchnumber])
      }
    },
    touchend () {
      this.touchstatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .list
    width: .4rem
    position: absolute
    top: 1.68rem
    right: 0
    bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
    background-color: #eee
    .list-item
      text-align: center
      line-height: .4rem
      color: #888
</style>


