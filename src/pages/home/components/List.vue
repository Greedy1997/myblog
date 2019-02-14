<template>
  <div>
    <section class="listings">
      <div class="wrapper">
        <ul class="properties_list">
          <li>
            <a href="#">
              <!-- <img src="@/assets/styles/img/property_1.jpg" alt="" title="" class="property_img"/> -->
            </a>
            <div class="property_details">
              <h1>
                <a href="#">Title</a>
              </h1>
              <h2>Content<span class="property_size">(288ftsq)</span></h2>
            </div>
          </li>
          <li>
            <a href="#">
              <!-- <img src="@/assets/styles/img/property_1.jpg" alt="" title="" class="property_img"/> -->
            </a>
            <div class="property_details">
              <h1>
                <a href="#">Title</a>
              </h1>
              <h2>Content<span class="property_size">(288ftsq)</span></h2>
            </div>
          </li>
          <li>
            <a href="#">
              <!-- <img src="@/assets/styles/img/property_1.jpg" alt="" title="" class="property_img"/> -->
            </a>
            <div class="property_details">
              <h1>
                <a href="#">Title</a>
              </h1>
              <h2>Content<span class="property_size">(288ftsq)</span></h2>
            </div>
          </li>
        </ul>
        <div class="more_listing">
          <a href="#" class="more_listing_btn">View More Article</a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'list'
}
</script>
<style lang="stylus" scoped>
.listings
    padding: 100px 0;
.listings ul.properties_list
    list-style: none;
    overflow: hidden;
.listings ul.properties_list li
    display: block;
    width: 90%;
    height: 50%;
    position: relative;
    float: left;
    margin: 0 3.64% 3.64% 3.64%;
.listings ul.properties_list li img.property_img
    width: 100%;
    height: 50%!important;
    vertical-align: top;
.listings ul.properties_list li .price
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 15px 20px;
    background: #ffffff;
    color: #514d4d;
    font-family: "lato-bold", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -o-border-radius: 2px;
.listings ul.properties_list li:nth-child(3n+0)
    margin-right: 0;
.listings ul li .property_details
    width: 87.64705882352941%;
    padding: 2.94% 5.88% 4.12% 5.88%;
    border: 1px solid #f2f1f1;
    transition: all .2s linear;
    -webkit-transition: all .2s linear;
    -moz-transition: all .2s linear;
    -o-transition: all .2s linear;
.listings ul li:hover .property_details
    border: 1px solid #95badf;
.listings ul li .property_details h1
    color: #666464;
    font-family: "lato-bold", Helvetica, Arial, sans-serif;
    font-size: 16px!important;
    font-weight: bold;
    margin-bottom: 5px;
    line-height: 28px;
.listings ul li .property_details h1 a
    text-decoration: none;
    color: #666464;
.listings ul li .property_details h2
    color: #9d9d9d;
    font-family: "lato-regular", Helvetica, Arial, sans-serif;
    font-size: 12px;
    line-height: 26px;
    font-weight: normal;
.listings ul li .property_details .property_size
    color: #676767;
.listings .more_listing
    display: block;
    width: 100%;
    text-align: center;
    margin: 84px 0 22px 0;
.listings .more_listing_btn
    text-decoration: none;
    padding: 20px 40px;
    border: 2px solid #bfd9f1;
    border-radius: 30px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -o-border-radius: 30px;
    color: #afcbe6;
    font-family: "lato-regular", Helvetica, Arial, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    transition: all .2s linear;
    -webkit-transition: all .2s linear;
    -moz-transition: all .2s linear;
    -o-transition: all .2s linear;
.listings .more_listing_btn:hover
    color: #a0c3e5;
    border: 2px solid #a0c3e5;
</style>


