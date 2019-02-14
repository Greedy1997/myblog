<template>
  <div>
    <cityheader></cityheader>
    <cityseach :cities="cities"></cityseach>
    <citylist :cities="cities" :hotCities="hotCities" :letter="letter"></citylist>
    <cityalphabet :cities="cities" @change="handleletter"></cityalphabet>
  </div>
</template>
<script>
import cityheader from './components/cityheader.vue'
import cityseach from './components/cityseach.vue'
import citylist from './components/citylist.vue'
import cityalphabet from './components/cityalphabet.vue'
import axios from 'axios'
export default {
  name: 'city',
  data () {
    return {
      cities: [],
      hotCities: [],
      letter: []
    }
  },
  components: {
    cityheader,
    cityseach,
    citylist,
    cityalphabet
  },
  mounted () {
    axios({
      method: 'get',
      url: '/api/city.json'
    }).then((res) => {
      this.cities = res.data.data.cities
      this.hotCities = res.data.data.hotCities
    })
  },
  methods: {
    handleletter (e) {
      this.letter = e
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>


