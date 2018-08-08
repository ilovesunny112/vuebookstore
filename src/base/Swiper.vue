<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in data" :key="index">
      <img :src="slide.src" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<!---->

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: [
        {
          src: 'https://img1.360buyimg.com/da/s640x312_jfs/t23728/167/1786216320/100811/55d642c7/5b697ec7Nfbc192bf.jpg!cr_1125x549_0_72.dpg'
        },
        {
          src: 'https://m.360buyimg.com/mobilecms/s640x312_jfs/t25741/123/237144174/112551/d13507c/5b6994baN7343ecda.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        },
        {
          src: 'https://m.360buyimg.com/mobilecms/s640x312_jfs/t23935/204/1440239186/376655/78904205/5b615718N36d52b6c.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        },
        {
          src: 'https://img1.360buyimg.com/da/jfs/t22444/266/1654115305/189464/b6156ab7/5b67fb6fNd5076042.jpg!cr_1125x549_0_72'
        },
        {
          src: 'https://m.360buyimg.com/mobilecms/s1125x690_jfs/t24880/53/232624198/92769/703df8af/5b694cc0N81ce0b5d.jpg!cr_1125x549_0_72!q70.jpg'
        },
        {
          src: 'https://m.360buyimg.com/mobilecms/s1125x690_jfs/t23116/25/1537056498/271266/2c625944/5b62e4e8Nf6ddb22f.jpg!cr_1125x549_0_72!q70.jpg'
        },
        {
          src: 'https://m.360buyimg.com/mobilecms/s1125x690_jfs/t23197/12/1776994951/270432/659d2270/5b696e15N80dd336a.jpg!cr_1125x549_0_72!q70.jpg'
        }
      ]
    }
  },
  mounted () {
    // setInterval(() => {
    //   console.log('simulate async data')
    //   if (this.swiperSlides.length < 10) {
    //     this.swiperSlides.push(this.swiperSlides.length + 1)
    //   }
    // }, 3000)
  },
  props: ['data']
}
</script>
<style scoped lang="less">
  .swiper-slide{
    img{
      width: 100%;
    }
  }

  /* 这里不产生作用  因为  下面的 span 圆点 是 插件 js 自己插入的  与 vue 无关 所以也 没绑定上 data 属性*/

</style>
