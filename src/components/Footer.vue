<template>
  <div>
    <div class="foot">
      <div class="wrapper foot-bottom border-top">
          <ul>
            <li><i class="iconfont">&#xe79a;</i></li>
            <li><i class="iconfont">&#xe619;</i></li>
            <li><i class="iconfont">&#xe62f;</i></li>
            <li><i class="iconfont">&#xe600;</i></li>
          </ul>
      </div>
      <div class="copyrights wrapper">
        Copyright © Greedy 2018.12.27
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'foot',
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.foot .foot-bottom
    text-align: center;
.foot .foot-bottom > ul
    overflow: hidden;
    display: inline-block;
    margin-top: 45px;
    width: 25%
.foot .foot-bottom > ul > li
    display: block;
    float: left;
    margin-left: 10%;
    list-style-type:none;
.foot .foot-bottom > ul > li .iconfont
    font-size: 50px;
.foot .copyrights
    display: block;
    text-align: center;
    padding: 40px 0;
    margin-top: 60px;
    color: #fff;
    font-family: "lato-regular", Helvetica, Arial, sans-serif;
    font-size: 18px;
    letter-spacing: .5px;
    border-top: 1px solid #82abd4;
    background: #95badf;
.foot .copyrights a.ph_link
    font-family: "lato-bold", Helvetica, Arial, sans-serif;
    font-weight: bold;
    text-decoration: none;
</style>


