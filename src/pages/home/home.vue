<template>
<div>
  <homeheader></homeheader>
  <homelist></homelist>
  <homefooter></homefooter>
</div>
</template>
<script>
import axios from 'axios'
import homeheader from '../../components/Header.vue'
import homelist from './components/List.vue'
import homefooter from '../../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    homeheader,
    homelist,
    homefooter
  },
  mounted () {
    axios.get('/article')
  },
  methods: {
  }
}
</script>
<style>
</style>


