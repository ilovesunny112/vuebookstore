<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
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
  .book-store-enter {
    opacity: 0.2;
  }
  .book-store-leave {

  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
