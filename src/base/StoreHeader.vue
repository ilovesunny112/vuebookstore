<template>
  <div class="header">
    <i class="iconfont icon-fanhui" @click="goBack" v-if="showBack"></i>
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'StoreHeader',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  props: {
    showBack: {
      type: Boolean,
      default: true
    }
  }

}
</script>

<style lang="less" scoped>
  .header {
    height: 40px;
    position: fixed;
    top: 0;
    background-color: skyblue;
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    i{
      position: absolute;
      left: 20px;
    }
  }
</style>
