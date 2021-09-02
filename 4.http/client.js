var http = require("http");
http.get("http://127.0.0.1:3000?app=abc", function (res) {
  console.log(res.httpVersion);
  console.log(res.statusCode);
  console.log(res.statusMessage);
  console.log("4、返回正文：", res.rawTrailers);
});
