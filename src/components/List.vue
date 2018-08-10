<template>
  <div>
    <store-header :show-back="true">Book List</store-header>
    <div class="content" ref="contentWrapper" @scroll="loadMore">
      <ul class="list" ref="innerList">
        <li v-for="book in curBook" :key="book.bookId" @click = "routeToId(book.bookId)">
          <div class="imgwrapper">
            <img :src="book.bookCover" alt="">
          </div>
          <div class="info">
            <div class="name">{{book.bookName}}</div>
            <div class="detail">{{book.bookInfo}}</div>
            <div class="price">${{book.bookPrice}}</div>
            <span @click.stop.self="removeBook(book.bookId)">删除</span>
            <button @click.stop.prevent = "addCollect(book)">加入购物车</button>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import StoreHeader from '../base/StoreHeader'
import {getAllBook, delBookById, getBookByOffset} from '../api'
export default {
  name: 'List',
  components: {
    StoreHeader
  },
  data () {
    return {
      bookList: [],
      curBook: [],
      offset: 0
    }
  },
  methods: {
    async getAllBook () {
      this.bookList = await getAllBook()
    },
    async getBookOffset () {
      let newBook = await getBookByOffset(this.offset)
      this.offset += 6
      this.curBook = [...this.curBook, ...newBook]
    },
    routeToId (id) {
      this.$router.push({
        name: 'Detail',
        params: {
          bid: id
        }
      })
    },
    addCollect (obj) {
      this.$store.commit('addCollect', obj)
      this.$notify('已加入收藏')
    },
    async removeBook (bid) {
      let obj = await delBookById(bid)
      // 规范里提到  删除东西返回结果是空对象
      console.log(obj)
      this.getAllBook()
    },
    loadMore () {
      var totalH = this.$refs['innerList'].offsetHeight
      let {scrollTop, offsetHeight} = this.$refs['contentWrapper']
      window.clearTimeout(this.timer)
      this.timer = window.setTimeout(() => {
        console.log(scrollTop + offsetHeight)
        if (scrollTop + offsetHeight > totalH - 80) {
          console.log('loading')
          this.getBookOffset()
        }
      }, 300)
    }
  },
  created () {
    // this.getAllBook()
    console.log(this)
    this.getBookOffset()
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
      button {
        background-color: #0085ff;
        color: #fff;
        padding: 10px 30px;
        border: none;
        border-radius: 4px;
        font-size: 12px;
        position: absolute;
        right: 10px;
        bottom: 10px;
      }
    }
  }
</style>
