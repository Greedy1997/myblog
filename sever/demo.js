let http = require('http');
let url = require('url');
let util = require('util');
let sever = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  res.end(util.inspect(url.parse(req.url)));
})
sever.listen(3000, '127.0.0.1', () => {
  console.log('success')
})
