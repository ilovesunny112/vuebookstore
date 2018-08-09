<template>
  <div id="notify">
    <div class="title" v-if="show">
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'notify',
  data () {
    return {
      msg: '你好',
      show: false
    }
  },
  methods: {
    init () {
      this.show = true
      setTimeout( () => {
        this.show = false
      }, 2000)
    }
  }
}
</script>

<style lang="less" scoped>
  #notify{
    position: absolute;
    left: 50%;
  }
  .notify {
    width: 200px;
    background-color: rgba(0,0,0,0.8);
    color: #fff;
    /*position: absolute;*/
    top: 100px;
    margin-left: -50%;

  }
</style>
