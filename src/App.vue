<template>
  <div id="app">
    <router-view/>
    <store-footer></store-footer>
  </div>
</template>

<script>
import StoreFooter from './base/StoreFooter'

export default {
  name: 'App',
  components: {
    StoreFooter
  }
}
</script>

<style>
  *{
    padding: 0px;
    margin: 0px;
  }

  body{
    font-family: "Verdana";
  }
  ul li{
    list-style: none;
  }

  input,button{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  a{
    text-decoration: none;
  }

  .content{
    position: absolute;
    /*background-color: #ccc;*/
    top: 40px;
    bottom: 50px;
    overflow-y: scroll;
    width: 100%;
  }
  .swiper-pagination-bullet-active{
    background: #fff;
  }
</style>
