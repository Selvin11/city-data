import * as data from '../back_end_data'
// 源数据中的省级总数
let provinceArr = Object.keys(data['86'])
let actualProvince = provinceArr.length

// 源数据中的市级总数
let cityArr = []
let actualCity = 0

// 源数据中的区级总数
let actualArea = 0

for (let i in provinceArr) {
  if (data[provinceArr[i]]) {
    actualCity += Object.keys(data[provinceArr[i]]).length
    Object.keys(data[provinceArr[i]]).forEach(item => {
      cityArr.push(item)
    })
  } else {
    // 省级下无市级
    actualCity += 1
    actualArea += 1
  }
}


for (let j in cityArr) {
  if (data[cityArr[j]]) {
    actualArea += Object.keys(data[cityArr[j]]).length
  } else {
    // 市级下无区级
    actualArea += 1
  }
}

module.exports = {
  actualProvince: actualProvince,
  actualCity: actualCity,
  actualArea: actualArea
}