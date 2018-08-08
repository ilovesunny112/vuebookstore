<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>Home</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiao"></i>
      <span>List</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-filedicon_collect_g"></i>
      <span>Collect</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjia"></i>
      <span>Add</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'StoreFooter'
}
</script>

<style scoped lang="less">
.footer {
  height: 50px;
  background-color: dodgerblue;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  a{
    flex: 1;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    color: #fff;

    span{
      font-size: 12px;
    }

    &.router-link-active{
      font-weight: bold;
      i{
        font-weight: 100;
      }
    }
  }
}
</style>
