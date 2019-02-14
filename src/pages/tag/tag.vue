<template>
<div>
  <tagheader></tagheader>
  <tagall class="tagall" v-on:tagslist="tagslist"></tagall>
  <taglist v-bind:taglist='taglist'></taglist>
  <tagfooter></tagfooter>
</div>
</template>
<script>
import axios from 'axios'
// import { mapState } from 'vuex'
import tagheader from '../../components/Header.vue'
import tagall from './components/alltag.vue'
import tagfooter from '../../components/Footer.vue'
import taglist from './components/list.vue'
export default {
  name: 'Tag',
  data () {
    return {
      taglist: []
    }
  },
  components: {
    tagheader,
    tagfooter,
    taglist,
    tagall
  },
  methods: {
    tagslist (e) {
      this.taglist = e
      console.log(this.taglist)
    }
  }
}
</script>
<style lang="stylus" scoped>
.tagall
  margin-top: 15px;
</style>


