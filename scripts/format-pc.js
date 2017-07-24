// 将后端的三级城市联动数据转为前端cvux的数据格式
// 1. 将后端三级城市数据推入不同的数组
// 2. 增加市级下面为空情况的区级数据，用‘--’代替，避免前端选择省市后出现无区的报错
"use strict"

var list = require('../back_end_data')

const path = require('path')
const getPath = function (dir) {
  return path.join(__dirname, dir)
}

function build () {
  let province = []
  let city = []
  let area = []
  for (var k in list) {
    // 省份
    if (k == '86') {
      for (var j in list[k]) {
        var item = {
          code: j,
          name: list[k][j],
          parentId: '0'
        }
        province.push(item)
      }
    } else {
      // 保存省级的code
      let provinceCodeArr = Object.keys(list['86'])
      for (var l in list[k]) {
        var item = {
          code: l,
          name: list[k][l],
          parentId: k
        }
        // 市级 ，如果一级键名为‘86’中的键名，则为市级
        if (provinceCodeArr.indexOf(k) !== -1) {
          city.push(item)
        } else {
          area.push(item)
        }
      }
    }
  }

  // 处理市级下面没有区域的问题
  city.forEach(item => {
    if (Object.keys(list).indexOf(item["code"]) === -1) {
      area.push({
        code: item["code"] + "--",
        name: "--",
        parentId: item["code"]
      })
    }
  })
  
  let output = 
  `export const province = ${JSON.stringify(province, null , 2)}\n` + 
  `export const city = ${JSON.stringify(city, null , 2)}\n` +
  `export const area = ${JSON.stringify(area, null , 2)}`
  
  require('fs').writeFileSync(getPath('../data/china_address_pc.js'), output)
}

build()