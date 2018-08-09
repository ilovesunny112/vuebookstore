let http = require('http')
let fs = require('fs')
let url = require('url')

let sliders = require('./sliders')

function read (cb) {
  fs.readFile('./book.json', 'utf8', function (err, data) {
    if (err || data.length === 0) {
      return cb([])
    } else {
      return cb(JSON.parse(data))
    }
  })
}

function write (str, cb) {
  fs.writeFile('./book.json', str, 'utf8', function (err) {
    if (err) {
      cb(err)
    } else {
      cb({})
    }
  })
}

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.setHeader('X-Powered-By', ' 3.2.1')
  // res.setHeader('Content-Type', 'application/json;charset=utf-8')

  if (req.method === 'OPTIONS') return res.end()

  let {pathname, query} = url.parse(req.url, true) // 加true 吧 query 转化成对象
  if (pathname === '/sliders') {
    // res.send(JSON.stringify(sliders))
    // console.log(res)
    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify(sliders))
  }
  if (pathname === '/hotsale') {
    res.setHeader('Content-Type', 'application/json')
    var data = fs.readFileSync('./book.json', 'utf8')
    console.log(data)
    read(function (bks) {
      let hot = bks.reverse().slice(0, 6)
      return res.end(JSON.stringify(hot))
    })
  }
  if (pathname === '/book') {
  //  对书的增删改查 RESTFul 风格
  //  根据方法 进行不同的处理
  //  get post put
    let id = parseInt(query.id)
    console.log(req.method)
    switch (req.method) { // ?id = 1
      case 'GET':
        if (id) { // 查询一个
          read(function (books) {
            let result = books.filter(item => item.bookId === id)
            res.end(JSON.stringify(result))
          })
        } else { // 获取所有图书
          read(function (books) {
            res.end(JSON.stringify(books.reverse()))
          })
        }
        break
      case 'POST':

        break
      case 'PUT':

        break
      case 'DELETE':
        if (id) { // 删除一个 根据 id
          read(function (books) {
            let result = books.filter(item => item.bookId !== id)
            console.log(result)
            write(JSON.stringify(result), function (books) {
              console.log(books)
              return res.end(JSON.stringify(books))
            })
          })
        } else {
        }
        break
    }
  }
}).listen(3000)
