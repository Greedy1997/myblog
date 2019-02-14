<template>
  <div>
    <section class="hero">
      <header>
        <div class="wrapper">
          <a href="#"><img src="~@/assets/styles/img/logo.png" class="logo" alt="" titl=""/></a>
          <a href="#" class="hamburger"></a>
          <nav>
            <ul>
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/tag">tags</router-link></li>
              <li><a href="#">留言</a></li>
              <li><a href="#">关于我</a></li>
            </ul>
            <!-- <a href="#" class="login_btn">Login</a> -->
          </nav>
        </div>
      </header>
      <section class="caption">
        <h2 class="caption">Find You Dream Home</h2>
        <h3 class="properties">Appartements - Houses - Mansions</h3>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  name: 'HomeHeaders'
}
</script>
<style lang="stylus" scoped>
.hero
    width: 100%;
    height: 900px;
    position: relative;
    background: url('~@/assets/styles/img/hero.jpg') no-repeat bottom center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
.hero .caption
    width: 100%;
    position: absolute;
    text-align: center;
    top: 50%;
    margin-top: -105px;
    z-index: 10;
.hero .caption h2
    color: #fff;
    font-family: "p22_corinthia", Helvetica, Arial, sans-serif;
    font-size: 100px;
    font-weight: lighter;
    margin: 0;
    position: relative;
    display: block;
.hero .caption h3
    color: #fff;
    font-family: "lato-regular", Helvetica, Arial, sans-serif;
    font-size: 14px;
    margin: -15px 0 0 25px;
    left: 1px;
.hero .wrapper
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
header
    width: 100%;
    height: 100px;
    background: rgba(28, 54, 85, .2);
header .logo
    margin-top: 40px;
    float: left;
header a.hamburger
    text-decoration: none;
    display: none;
    float: right;
    margin-top: 41px;
    width: 24px;
    height: 19px;
    background: url('~@/assets/styles/img/hamburger_icon.png') no-repeat;
header a.hamburger.opned
    width: 19px;
    background: url('~@/assets/styles/img/close_menu_icon.png') no-repeat;
header nav
    float: right;
    opacity: 1;
header nav ul
    margin-top: 40px;
    list-style: none;
    overflow: hidden;
    float: left;
header nav ul li
    float: left;
    margin-left: 50px;
header nav ul li a,
header nav .login_btn
    text-decoration: none;
    color: #fff;
    font-family: "lato-regular", Helvetica, Arial, sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
header nav .login_btn
    float: right;
    margin: 30px 0 0 50px;
    padding: 10px 30px 11px 30px;
    border: 2px solid #ffffff;
    background: transparent;
    transition: background .1s linear;
    -webkit-transition: background .1s linear;
    -moz-transition: background .1s linear;
    -o-transition: background .1s linear;
header nav .login_btn:hover
    background: #ffffff;
    color: #1c3655;
@media (max-width: 1150px)
    .wrapper
        padding: 0 40px;
        max-width: 1020px;
</style>


