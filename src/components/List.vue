<template>
  <div>
    <store-header :show-back="true">Book List</store-header>
    <div class="content">
      <ul class="list">
        <li v-for="book in bookList" :key="book.bookId">
          <div class="imgwrapper">
            <img :src="book.bookCover" alt="">
          </div>
          <div class="info">
            <div class="name">{{book.bookName}}</div>
            <div class="detail">{{book.bookInfo}}</div>
            <div class="price">${{book.bookPrice}}</div>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import StoreHeader from '../base/StoreHeader'
import {getAllBook} from '../api'
export default {
  name: 'List',
  components: {
    StoreHeader
  },
  data () {
    return {
      bookList: []
    }
  },
  methods: {
    async getAllBook () {
      this.bookList = await getAllBook()
    }
  },
  created () {
    this.getAllBook()
  }
}
</script>

<style lang="less" scoped>
  .list{
    li::after{
      content: '';
      display: block;
      clear: both;
    }
    li{
      position: relative;
      padding: 10px;
    }
    .imgwrapper{
      width: 35%;
      overflow: hidden;
      float: left;
      img {
        width: 100%;
      }
    }
    .info{
      float: right;
      width: 60%;
      height: 100%;
      font-size: 12px;

      .name{
        font-size: 14px;
      }
      .detail{
        color:#ccc;
        font-size: 12px;
        font-family: "微软雅黑";
      }
      .price{
        position:absolute;
        bottom: 30px;
        color: #f00;
      }
    }
  }
</style>
