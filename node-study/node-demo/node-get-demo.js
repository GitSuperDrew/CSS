/**
 * get 请求示例
 */


var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);
console.log("服务已开启，请访问：http://localhost:3000/user?name=Drew&url=www.baidu.com");