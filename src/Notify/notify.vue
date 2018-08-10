<template>
  <div id="notify">
    <transition name="fade">
      <div class="title"  v-show="show">
        {{msg}}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'notify',
  data () {
    return {
      msg: '你好',
      show: true
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  #notify{
    position: absolute;
    left: 50%;
    top: 50vh;
  }
  .title {
    /*width: 10px;*/
    background-color: rgba(0,0,0,0.8);
    color: #fff;
    text-align: center;
    /*position: absolute;*/
    padding:10px 30px;
    border-radius: 4px;
    margin-left: -50%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
