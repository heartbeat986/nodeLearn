var cheerio = require("cheerio");
var fs = require("fs");
var https = require("https");

let curPage = 1;

function getData() {
  let url = `https://www.liepin.com/zhaopin/?init=-1&headckid=0417b67c8d823dcb&fromSearchBtn=2&sfrom=click-pc_homepage-centre_searchbox-search_new&ckid=0417b67c8d823dcb&degradeFlag=0&key=%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91&siTag=D_7XS8J-xxxQY6y2bMqEWQ%7EfA9rXquZc5IkJpXC-Ycixw&d_sfrom=search_fp&d_ckId=466b672969a37b2deaf20975f4b05e7c&d_curPage=0&d_pageSize=40&d_headId=466b672969a37b2deaf20975f4b05e7c&curPage=${curPage}`;

  var targetData = "";
  https.get(url, function (res) {
    res.on("data", function (chunk) {
      targetData += chunk;
    });
    res.on("end", function () {
      fs.writeFile("./data.html", targetData, function (err) {
        if (err) {
          console.log("抓取失败");
          throw err;
        }
        let $ = cheerio.load(targetData);
        let result = [];
        $(".sojob-list")
          .find(".job-info")
          .each((i) => {
            let map = {};
            map.name = $(".job-info").eq(i).find("h3").attr("title");
            let baseOthersInfo = $(".job-info")
              .eq(i)
              .find(".condition")
              .attr("title");
            baseOthersInfo = baseOthersInfo.split("_");
            map.reward = baseOthersInfo[0];
            map.area = baseOthersInfo[1];
            map.experience = baseOthersInfo[2];

            let companyTagDom = $(".company-info")
              .eq(i)
              .find(".temptation")
              .find("span");
            let companyTag = [];
            companyTagDom.each((i) => {
              companyTag.push(companyTagDom.eq(i).text());
            });
            let companyInfo = {
              name: $(".company-info")
                .eq(i)
                .find(".company-name a")
                .attr("title"),
              href: $(".company-info")
                .eq(i)
                .find(".company-name a")
                .attr("href"),
              type: $(".company-info").eq(i).find(".industry-link a").text(),
              tag: companyTag.join(","),
            };
            map.company = companyInfo;
            result.push(map);
            map = {};
          });
        if (result.length === 0) {
          curPage = -1;
        } else {
          curPage += 1;
        }
        fs.appendFile(
          "./dataFile.json",
          JSON.stringify(result),
          function (error) {
            if (error) {
              console.log("发生错误");
            }
          }
        );
      });
    });
  });
}

let timer = setInterval(() => {
  if (curPage !== -1) {
    getData();
  } else {
    clearInterval(timer);
  }
}, 1000 * 3);
