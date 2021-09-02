// 读取文件流
var fs = require("fs");
var targetData = "";
var readStream = fs.createReadStream("./1.txt", "utf8");

// 适合读取大文件数据
readStream
  .on("data", function (chunk) {
    // console.log("获取到的数据:\n", chunk);
    targetData += chunk;
    console.log("最终数据:", targetData);
  })
  .on("error", function (error) {
    console.log("监听到的错误:", error.message);
  })
  .on("end", function () {
    console.log("没有数据了");
  })
  .on("close", function () {
    console.log("关闭读取流");
  });
