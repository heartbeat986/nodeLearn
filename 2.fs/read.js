var fs = require("fs");
var targetData;

// 同步读取
// try {
//   tagetData = fs.readFileSync("./1.txt", "utf-8");
//   console.log(data);
// } catch (error) {
//   console.error(error.message);
// }

// 异步读取
try {
  fs.readFile("./1.txt", "utf8", function (err, data) {
    if (err) {
      return console.error("读取文件出错: " + err.message);
    } else {
      targetData = data;
    }
    console.log(targetData);
  });
} catch (error) {
  console.error(error.message);
}
