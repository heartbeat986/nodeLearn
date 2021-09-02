var fs = require("fs");

// 异步写入
// fs.writeFile("./write.txt", "hello Node", "utf8", function (error) {
//   if (error) {
//     console.log("发生错误:", error.message);
//   } else {
//     console.log("写入成功");
//   }
// });

// 同步写入
// try {
//   fs.writeFileSync("./write.txt", "同步写入Hello Node", "utf8");
//   console.log("写入成功");
// } catch (error) {
//   console.log("发生错误:", error.message);
// }

// 文件流写入
// var fs = require("fs");
// var writeStream = fs.createWriteStream("./write.txt", "utf8");
// writeStream.on("close", function () {
//   console.log("关闭写入");
// });

// writeStream.write("您好！");
// writeStream.write("Node");
// writeStream.end("abc");
