var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
 
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("website :" + params.name);
    res.write("\n");
    res.write("the Website URL: " + params.url);
    res.end();
 
}).listen(3000);

console.log("server is running ...... ");
console.log("请使用浏览器访问地址：http://localhost:3000/user?name=Drew&url=www.runoob.com");