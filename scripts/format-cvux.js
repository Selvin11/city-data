// 生成 VUX x-address 组件需要的地址数据，不包含港澳台地区
// 后台数据back_end_data.js，‘86’下面包含的是省，其余是省市或者市区两者包含关系的对象
// 1. 将省，省市，市区以不同的数据格式（是否包含parent）推入数组中
// 2. 将市下面不存在区的情况用‘--’代替，推入数组

"use strict"

var list = require('../back_end_data')

const path = require('path')
const getPath = function (dir) {
  return path.join(__dirname, dir)
}

function build () {
  let rs = []
  for (var k in list) {
    // 省份
    if (k == '86') {
      for (var j in list[k]) {
        // 业务需求除去台湾
        if (j != '710000') {
          rs.push({
            name: list[k][j],
            value: j
          })
        }
      }
    } else {
      // 市级／区级
      for (var l in list[k]) {
        rs.push({
          name: list[k][l],
          value: l,
          parent: k
        })
      }
    }
  }
  // 将市下面不存在区的情况用‘--’代替，推入数组
  var provinceCodeArr = Object.keys(list['86'])
  var cityCodeArr = []
  for (var i in list) {
    if (provinceCodeArr.indexOf(i) !== -1) {
      Object.keys(list[i]).forEach(item => {
        cityCodeArr.push(item)
      })
    }
  }
  cityCodeArr.forEach(item => {
    if (Object.keys(list).indexOf(item) === -1) {
      rs.push({
        name: "--",
        value: item + "--",
        parent: item
      })
    }
  })

  require('fs').writeFileSync(getPath('../data/china_address_cvux.json'), JSON.stringify(rs, null, 4))
}

build()

// console.log(process.env.npm_lifecycle_event)

