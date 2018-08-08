<template>
  <div>
    <store-header>Details of the book</store-header>
    <div class="content">
      <div class="imgwrapper">
        <img :src="book.bookCover" alt="">
      </div>
      <div class="detail">
        <h4>{{book.bookName}}</h4>
        <p class="info">{{book.bookInfo}}</p>
        <p class="price">${{book.bookPrice}}</p>
        <a @click.prevent="addCollect">点击加入收藏</a>
      </div>
    </div>
  </div>
</template>

<script>
import StoreHeader from '../base/StoreHeader'
import {getBookById} from '../api'
export default {
  name: 'Detail',
  components: {
    StoreHeader
  },
  data () {
    return {
      book: {

      }
    }
  },
  watch: {
    $route (newVal, oldVal) {
      this.getDetail(this.$route.params.bid)
    }
  },
  created () {
    this.getDetail(this.$route.params.bid)
  },
  methods: {
    async getDetail (bid) {
      this.book = (await getBookById(bid))[0]
    },
    addCollect () {
      console.log(this.$route.params.bid)
    }
  }
}
</script>

<style lang="less" scoped>
  .imgwrapper{
    text-align: center;
    padding: 40px;
  }

  .detail {
    padding: 0px 10px;
    h4{
      font-size: 16px;
      line-height: 40px;
    }
    .info{
      font-size: 12px;
      line-height: 180%;
      padding-bottom: 40px;
    }
    .price{
      color: red;
    }
  }

</style>
