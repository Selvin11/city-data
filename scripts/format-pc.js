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
  // 保存list元数据中所有的键名（包含省市区）
  let listCodeArr = Object.keys(list)
  // 保存省级的code
  let provinceCodeArr = Object.keys(list['86'])
  for (var k in list) {
    // 省份 86下面包含所有的省份信息
    if (k == '86') {
      for (var j in list[k]) {
        province.push({
          code: j,
          name: list[k][j],
          parentId: '0'
        })
      }
    } else {
      for (var l in list[k]) {
        // 市级 ，如果一级键名为‘86’中的键名，则为市级
        if (provinceCodeArr.indexOf(k) !== -1) {
            city.push({
            code: l,
            name: list[k][l],
            parentId: k
          })
        } else {
          area.push({
            code: l,
            name: list[k][l],
            parentId: k
          })
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

  // 处理省份下面无市区的情况
  for (var i in provinceCodeArr) {
    if (listCodeArr.indexOf(provinceCodeArr[i]) === -1) {
      city.push({
        code: provinceCodeArr[i] + '--',
        name: '--',
        parentId: provinceCodeArr[i]
      })
      area.push({
        code: provinceCodeArr[i] + '--' + '--',
        name: '--',
        parentId: provinceCodeArr[i] + '--'
      })
    }
  }
  
  let data = {
    province: province,
    city: city,
    area: area
  }

  let output = 
  `module.exports = ` +
  `${JSON.stringify(data, null, 2)}`

  require('fs').writeFileSync(getPath('../data/china_address_pc.js'), output)
}

build()