// 常用功能
var fs = require("fs");

// 判断文件是否存在
// fs.access("./1.txt", function (err) {
//   if (err) {
//     console.log("出现错误:", err.message);
//   } else {
//     console.log("存在文件1.txt");
//   }
// });

// fs.access("./2.txt", function (err) {
//   if (err) {
//     console.log("出现错误:不存在文件2.txt");
//   } else {
//     console.log("存在文件2.txt");
//   }
// });

// 异步创建目录，存在会报错
// fs.mkdir("test", function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log("目录创建成功");
// });

// 同步创建目录
// try {
//   fs.mkdirSync("test");
// } catch (error) {
//   console.log(error.message);
// }

// 删除文件
// fs.unlink("./write.txt", function (error) {
//   if (error) {
//     console.log(error.message);
//   }
// });

// 文件重命名
// fs.rename("./write.txt", "./1.txt", function (err) {
//   if (err) {
//     console.log(err.message);
//   }
// });

// 监听文件修改
// var options = {
//   persistent: true,
//   interval: 2000,
// };

// fs.watchFile("./write.txt", options, function (curr, prev) {
//   console.log("修改时间:", curr.mtime);
// });

// 修改文件权限
// fs.chmod("./write.txt", "777", function (err) {
//   if (err) {
//     console.log(err.message);
//   }
//   console.log("修改成功");
// });

// 获取文件状态
fs.stat("./write.txt", function (err, stats) {
  if (err) {
    throw err;
  }
  console.log("文件大小: " + stats.size);
  console.log("创建时间: " + stats.birthtime);
  console.log("访问时间: " + stats.atime);
  console.log("修改时间: " + stats.mtime);
});
// console.log(fs.statSync("./write.txt").isFile());
// console.log(fs.statSync("./test").isDirectory());
