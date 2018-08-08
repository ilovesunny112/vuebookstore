import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Add from '../components/Add'
import List from '../components/List'
import Collect from '../components/Collect'
import Detail from '../components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect
    },
    {
      path: '/detail/:bid',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
