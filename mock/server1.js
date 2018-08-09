let http = require('http')
http.createServer((req, res)=> {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  // res.setHeader('X-Powered-By', ' 3.2.1')
  if (req.method === "OPTIONS") return res.end()

  console.log(req.method)
}).listen(4000)
