var http = require("http");
var url = require("url");
var queryString = require("querystring");
var server = http.createServer(function (req, res) {
  // 获取请求信息
  // console.log("1、客户端请求url：" + req.url);
  // console.log("2、http版本：" + req.httpVersion);
  // console.log("3、http请求方法：" + req.method);
  // console.log("4、http请求头部" + JSON.stringify(req.headers));
  // 获取请求参数
  // if (req.method === "GET") {
  //   var urlObj = url.parse(req.url);
  //   var query = urlObj.query;
  //   var data = queryString.parse(query);
  //   console.log(JSON.stringify(data));
  //   res.end("ok");
  // } else {
  //   var body = "";
  //   req.on("data", function (thunk) {
  //     body += thunk;
  //   });
  //   req.on("end", function () {
  //     console.log("传递的数据: " + body);
  //     res.end("ok");
  //   });
  // }
  // 设置请求返回
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("ok");
});

server.listen(3000);
