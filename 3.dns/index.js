var dns = require("dns");
var options = { all: true };
// dns.lookup - 域名解析，本地解析不了
// dns.lookup("zuoye.wljty.com", options, function (err, address, family) {
//   if (err) {
//     throw err;
//   }
//   console.log(address);
//   console.log(family);
// });

// dns.resolve4 - 域名解析，本地解析的了，配置了hosts，可以解析除hosts中的配置。
dns.resolve4("zuoye.wljty.com", function (err, address) {
  if (err) {
    throw err;
  }
  console.log(address);
});
