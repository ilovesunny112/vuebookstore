import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
// 增加默认请求 路径头

axios.interceptors.response.use((res) => {
  return res.data
//  在这里统一拦截结果 吧结果处理成 res.data 以后就返回 res.data
})

// 获取轮播图数据接口
export let getSliders = () => {
  return axios.get('/sliders')
//   返回的是 promise 对象
//  可以这么用 getSliders().then()
}

export let getHotBk = () => {
  return axios.get('/hotsale')
}

export let getAllBook = () => {
  return axios.get('/book')
}
