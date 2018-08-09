<template>
  <div class="home">
    <store-header v-bind:show-back="true">Home</store-header>
    <div class="content">
      <swiper :data="slideData"></swiper>
      <div class="container">
        <h3>热门图书</h3>
        <ul class="hot">
          <li v-for="book in hotBook" :key="book.bookId" @click="routeToId(book.bookId)">
            <img :src="book.bookCover" alt="">
            <span>{{book.bookName}}</span>
            <span>{{book.bookInfo}}</span>
            <span class="price">¥{{book.bookPrice}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import StoreHeader from '../base/StoreHeader'
import Swiper from '../base/Swiper'
import {getSliders, getHotBk} from '../api/'

export default {
  name: 'Home',
  components: {
    StoreHeader,
    Swiper
  },
  data () {
    return {
      slideData: [],
      hotBook: []
    }
  },
  created () {
    this.getSlide()
    this.getHot()
    // console.log(this)
  },
  methods: {
    async getSlide () {
      let data = await getSliders()
      console.log(data)
      this.slideData = data
    },
    async getHot () {
      // let {data: hotBook} = await getHotBk()
      let hotBook = await getHotBk()
      this.hotBook = hotBook
    },
    routeToId (id) {
      this.$router.push({
        name: 'Detail',
        params: {
          bid: id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container{
  width: 95%;
  text-align: center;
  margin: 0 auto;

  h3 {
    font-weight: 200;

  }
  padding-bottom: 20px;
}
.hot{
  display: flex;
  flex-wrap: wrap;
  li{
    width: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
      width: 80%;
    }
    span{
      font-size: 12px;
      line-height: 15px;

      &.price{
        font-size: 13px;
        color: #f00;
      }
    }
  }
}
</style>
